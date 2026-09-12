import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { track } from "@vercel/analytics";
import CookieConsent, { CookiePreferencesButton } from "@/components/site/cookie-consent";
import SiteAnalytics from "@/components/site/site-analytics";
import { CONSENT_KEY, consentSnapshot, hasConsent, parseConsent, saveConsent } from "@/lib/consent";
import { sanitizeAnalyticsEvent, sanitizePerformanceEvent, trackEvent } from "@/lib/analytics";

vi.mock("next/navigation", () => ({ usePathname: () => "/automacao-whatsapp" }));
vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));
vi.mock("@vercel/analytics/next", () => ({ Analytics: () => <div data-testid="analytics" /> }));
vi.mock("@vercel/speed-insights/next", () => ({ SpeedInsights: () => <div data-testid="performance" /> }));
const event = { name: "contact_click", properties: { location: "automation_hero", channel: "whatsapp" } } as const;

beforeEach(() => {
  localStorage.clear();
  vi.stubEnv("NODE_ENV", "production");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", "vercel");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS", "true");
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "123456789012345");
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ENABLED", "true");
});
afterEach(() => {
  localStorage.clear();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.mocked(track).mockReset();
  delete window.fbq;
  delete window._fbq;
  delete window.quintecMetaPixel;
  document.getElementById("quintec-meta-pixel")?.remove();
});

function app() { return <><CookieConsent /><CookiePreferencesButton /><SiteAnalytics /></>; }

describe("Consentimento de cookies", () => {
  it("não inicializa nem envia medições antes da escolha ou após rejeição", async () => {
    render(app());
    expect(await screen.findByRole("region", { name: "Sua privacidade, sua escolha" })).toBeInTheDocument();
    trackEvent(event);
    expect(track).not.toHaveBeenCalled();
    expect(window.fbq).toBeUndefined();
    expect(screen.queryByTestId("analytics")).not.toBeInTheDocument();
    expect(screen.queryByTestId("performance")).not.toBeInTheDocument();
    expect(document.getElementById("quintec-meta-pixel")).toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "Rejeitar opcionais" }));
    trackEvent(event);
    expect(track).not.toHaveBeenCalled();
    expect(window.fbq).toBeUndefined();
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
    expect(parseConsent(consentSnapshot())).toMatchObject({ analytics: false, marketing: false });
  });

  it("lembra a recusa ao remontar a página e mantém uma forma de reabrir", async () => {
    const first = render(app());
    await userEvent.click(await screen.findByRole("button", { name: "Rejeitar opcionais" }));
    first.unmount();
    render(app());
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Preferências de cookies" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox").every(input => !(input as HTMLInputElement).checked)).toBe(true);
  });

  it("permite estatísticas sem autorizar publicidade", async () => {
    render(app());
    await userEvent.click(await screen.findByRole("button", { name: "Personalizar" }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getAllByRole("checkbox").every(input => !(input as HTMLInputElement).checked)).toBe(true);
    await userEvent.click(within(dialog).getByRole("checkbox", { name: /Estatísticas e desempenho/ }));
    await userEvent.click(within(dialog).getByRole("button", { name: "Salvar preferências" }));
    expect(screen.getByTestId("analytics")).toBeInTheDocument();
    expect(screen.getByTestId("performance")).toBeInTheDocument();
    trackEvent(event);
    expect(track).toHaveBeenCalledOnce();
    expect(window.fbq).toBeUndefined();
  });

  it("permite publicidade sem carregar estatísticas", () => {
    saveConsent({ analytics: false, marketing: true });
    render(app());
    trackEvent(event);
    expect(window.fbq?.queue).toContainEqual(["trackSingle", "123456789012345", "Contact", event.properties]);
    expect(track).not.toHaveBeenCalled();
    expect(screen.queryByTestId("analytics")).not.toBeInTheDocument();
    expect(screen.queryByTestId("performance")).not.toBeInTheDocument();
  });

  it("retira autorização, descarta eventos pendentes e limpa cookies da Meta", async () => {
    render(app());
    await userEvent.click(await screen.findByRole("button", { name: "Aceitar todos" }));
    expect(document.getElementById("quintec-meta-pixel")).toBeInTheDocument();
    document.cookie = "_fbp=example; path=/";
    document.cookie = "_fbc=example; path=/";
    document.cookie = "other=keep; path=/";
    await userEvent.click(screen.getByRole("button", { name: "Preferências de cookies" }));
    await userEvent.click(screen.getByRole("button", { name: "Rejeitar opcionais" }));
    expect(window.fbq?.queue).toContainEqual(["consent", "revoke"]);
    expect(window.fbq?.queue?.some(command => command[0].startsWith("track"))).toBe(false);
    const queueLength = window.fbq?.queue?.length;
    trackEvent(event);
    expect(window.fbq?.queue).toHaveLength(queueLength!);
    expect(track).not.toHaveBeenCalled();
    expect(document.cookie).not.toMatch(/_fbp|_fbc/);
    expect(document.cookie).toContain("other=keep");
    expect(sanitizeAnalyticsEvent({ type: "pageview", url: "https://www.quintansc.com.br/" })).toBeNull();
    expect(sanitizePerformanceEvent({ type: "vital", url: "https://www.quintansc.com.br/" })).toBeNull();
    expect(screen.queryByTestId("analytics")).not.toBeInTheDocument();
    expect(screen.queryByTestId("performance")).not.toBeInTheDocument();
    document.cookie = "other=; Max-Age=0; path=/";
  });

  it("fechar as preferências não registra um aceite", async () => {
    render(app());
    await userEvent.click(await screen.findByRole("button", { name: "Personalizar" }));
    await userEvent.click(screen.getByRole("checkbox", { name: /Publicidade/ }));
    await userEvent.keyboard("{Escape}");
    expect(consentSnapshot()).toBeNull();
    expect(window.fbq).toBeUndefined();
    expect(await screen.findByRole("region", { name: "Sua privacidade, sua escolha" })).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("button", { name: "Personalizar" })).toHaveFocus());
  });

  it("reage à revogação feita em outra aba", async () => {
    saveConsent({ analytics: true, marketing: true });
    render(app());
    act(() => {
      localStorage.removeItem(CONSENT_KEY);
      window.dispatchEvent(new StorageEvent("storage", { key: CONSENT_KEY }));
    });
    await waitFor(() => expect(screen.queryByTestId("analytics")).not.toBeInTheDocument());
    expect(window.fbq?.queue).toContainEqual(["consent", "revoke"]);
    expect(hasConsent("marketing")).toBe(false);
  });

  it("descarta escolhas expiradas, inválidas ou de outra versão", () => {
    const now = Date.now();
    for (const raw of ["invalid", "null", JSON.stringify({ version: 1, analytics: true, marketing: true, savedAt: now - 2000, expiresAt: now - 1000 }), JSON.stringify({ version: 2, analytics: true, marketing: true, savedAt: now, expiresAt: now + 1000 })]) {
      localStorage.setItem(CONSENT_KEY, raw);
      expect(consentSnapshot()).toBeNull();
      expect(hasConsent("marketing")).toBe(false);
    }
  });

  it("respeita a escolha nesta visita mesmo se o armazenamento for bloqueado", async () => {
    render(app());
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage blocked"); });
    await userEvent.click(await screen.findByRole("button", { name: "Rejeitar opcionais" }));
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
    expect(parseConsent(consentSnapshot())).toMatchObject({ analytics: false, marketing: false });
    vi.restoreAllMocks();
    act(() => window.dispatchEvent(new StorageEvent("storage", { key: null })));
  });
});
