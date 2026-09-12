import { saveConsent } from "@/lib/consent";
import { StrictMode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { track } from "@vercel/analytics";
import SiteAnalytics from "@/components/site/site-analytics";
import ContactForm from "@/components/site/contact-form";
import { trackEvent } from "@/lib/analytics";
import { getMetaPixelId, trackMetaPageView } from "@/lib/meta-pixel";

const route = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => route.pathname }));
vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));
vi.mock("@vercel/analytics/next", () => ({ Analytics: () => <div data-testid="vercel-analytics" /> }));

const pixelId = "123456789012345";
const whatsappEvent = { name: "contact_click", properties: { location: "automation_hero", channel: "whatsapp" } } as const;

beforeEach(() => {
  localStorage.clear();
  saveConsent({ analytics: true, marketing: true });
  route.pathname = "/";
  vi.stubEnv("NODE_ENV", "production");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", "vercel");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS", "true");
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", pixelId);
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ENABLED", "true");
});

afterEach(() => {
  localStorage.clear();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.mocked(track).mockReset();
  delete window.fbq;
  delete window._fbq;
  delete window.quintecMetaPixel;
  document.querySelectorAll('script[src^="https://connect.facebook.net/"]').forEach(script => script.remove());
});

describe("Inicialização e navegação do Pixel da Meta", () => {
  it.each([undefined, "", "pixel-123", "123<script>"])("não carrega o SDK sem ID numérico: %s", id => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", id);
    render(<SiteAnalytics />);
    trackEvent(whatsappEvent);
    expect(getMetaPixelId()).toBeNull();
    expect(window.fbq).toBeUndefined();
    expect(document.getElementById("quintec-meta-pixel")).toBeNull();
    expect(track).toHaveBeenCalledWith("contact_click", whatsappEvent.properties);
  });

  it("inicializa uma vez e enfileira PageView e ações antes de o script carregar", () => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", ` ${pixelId} `);
    render(<StrictMode><SiteAnalytics /></StrictMode>);
    expect(screen.getByTestId("vercel-analytics")).toBeInTheDocument();
    trackEvent(whatsappEvent);
    expect(window.fbq?.queue).toEqual([
      ["set", "autoConfig", false, pixelId],
      ["init", pixelId],
      ["consent", "grant"],
      ["trackSingle", pixelId, "PageView", { page_path: "/" }],
      ["trackSingle", pixelId, "Contact", { location: "automation_hero", channel: "whatsapp" }],
    ]);
    expect(window._fbq).toBe(window.fbq);
    expect(window.fbq?.disablePushState).toBe(true);
    expect(document.querySelectorAll("#quintec-meta-pixel")).toHaveLength(1);
    expect(document.getElementById("quintec-meta-pixel")).toHaveAttribute("src", "https://connect.facebook.net/en_US/fbevents.js");

    const send = vi.fn();
    window.fbq!.callMethod = send;
    trackEvent(whatsappEvent);
    expect(send).toHaveBeenCalledExactlyOnceWith("trackSingle", pixelId, "Contact", whatsappEvent.properties);
  });

  it("registra novas rotas e retorno à anterior sem duplicar rerenders ou remontagens", () => {
    const fbq = vi.fn();
    window.fbq = fbq;
    const { rerender, unmount } = render(<SiteAnalytics />);
    rerender(<SiteAnalytics />);
    route.pathname = "/automacao-whatsapp";
    rerender(<SiteAnalytics />);
    unmount();
    const second = render(<SiteAnalytics />);
    route.pathname = "/";
    second.rerender(<SiteAnalytics />);
    expect(fbq.mock.calls.filter(call => call[2] === "PageView")).toEqual([
      ["trackSingle", pixelId, "PageView", { page_path: "/" }],
      ["trackSingle", pixelId, "PageView", { page_path: "/automacao-whatsapp" }],
      ["trackSingle", pixelId, "PageView", { page_path: "/" }],
    ]);
    expect(fbq.mock.calls.filter(call => call[0] === "init")).toHaveLength(1);
  });

  it.each(["development", "test"])("não carrega ou envia dados em %s", environment => {
    vi.stubEnv("NODE_ENV", environment);
    render(<SiteAnalytics />);
    trackEvent(whatsappEvent);
    expect(window.fbq).toBeUndefined();
    expect(track).not.toHaveBeenCalled();
    expect(document.getElementById("quintec-meta-pixel")).toBeNull();
  });

  it("permite desligar a Meta mantendo a Vercel", () => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ENABLED", "false");
    render(<SiteAnalytics />);
    trackEvent(whatsappEvent);
    expect(window.fbq).toBeUndefined();
    expect(track).toHaveBeenCalledOnce();
  });

  it("não acessa APIs do navegador durante renderização no servidor", () => {
    vi.stubGlobal("window", undefined);
    expect(() => trackMetaPageView("/")).not.toThrow();
    expect(() => trackEvent(whatsappEvent)).not.toThrow();
    expect(track).not.toHaveBeenCalled();
  });
});

describe("Distribuição de eventos para anúncios", () => {
  it.each(["none", "vercel"])("mantém a Meta com provedor %s e eventos da Vercel desligados", provider => {
    vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", provider);
    vi.stubEnv("NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS", "false");
    const fbq = vi.fn();
    window.fbq = fbq;
    render(<SiteAnalytics />);
    trackEvent(whatsappEvent);
    expect(track).not.toHaveBeenCalled();
    expect(fbq).toHaveBeenCalledWith("trackSingle", pixelId, "PageView", { page_path: "/" });
    expect(fbq).toHaveBeenLastCalledWith("trackSingle", pixelId, "Contact", whatsappEvent.properties);
  });

  it("envia um evento por provedor e preserva o nome dos eventos personalizados", () => {
    const fbq = vi.fn();
    window.fbq = fbq;
    trackEvent({ name: "contact_click", properties: { location: "header", channel: "form" } });
    trackEvent({ name: "solution_click", properties: { solution: "Sistema web", location: "home_solutions" } });
    expect(fbq).toHaveBeenCalledWith("trackSingleCustom", pixelId, "contact_click", { location: "header", channel: "form" });
    expect(fbq).toHaveBeenLastCalledWith("trackSingleCustom", pixelId, "solution_click", { solution: "Sistema web", location: "home_solutions" });
    expect(track).toHaveBeenCalledTimes(2);
    expect(fbq.mock.calls.filter(call => call[0].startsWith("track"))).toHaveLength(2);
  });

  it("preserva o envio à Meta se o SDK da Vercel falhar", () => {
    vi.mocked(track).mockImplementation(() => { throw new Error("Vercel unavailable"); });
    const fbq = vi.fn();
    window.fbq = fbq;
    expect(() => trackEvent(whatsappEvent)).not.toThrow();
    expect(fbq).toHaveBeenLastCalledWith("trackSingle", pixelId, "Contact", whatsappEvent.properties);
  });

  it("falha da Meta não bloqueia a ação ou a Vercel", () => {
    window.fbq = vi.fn(() => { throw new Error("Meta unavailable"); });
    expect(() => trackEvent(whatsappEvent)).not.toThrow();
    expect(() => trackMetaPageView("/")).not.toThrow();
    expect(track).toHaveBeenCalledOnce();
  });

  it("envia apenas a solução do briefing, sem dados pessoais ou Lead/Purchase", async () => {
    const user = userEvent.setup();
    const fbq = vi.fn();
    window.fbq = fbq;
    vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm initialSolution="Sistema web" />);
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(fbq).not.toHaveBeenCalled();
    await user.type(screen.getByLabelText(/Seu nome/i), "Maria Silva");
    await user.type(screen.getByLabelText(/E-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/Empresa/i), "Empresa privada");
    await user.type(screen.getByLabelText(/Conte sobre o projeto/i), "Meu briefing privado para este projeto.");
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(fbq.mock.calls.filter(call => call[0].startsWith("track"))).toEqual([
      ["trackSingleCustom", pixelId, "contact_form_start", { form: "contact" }],
      ["trackSingleCustom", pixelId, "contact_brief_prepared", { solution: "Sistema web" }],
    ]);
    expect(screen.getByRole("status")).toHaveTextContent("Mensagem preparada.");
  });
});
