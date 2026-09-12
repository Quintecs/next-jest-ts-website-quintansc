import { saveConsent } from "@/lib/consent";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { track } from "@vercel/analytics";
import { analyticsEnabled, sanitizeAnalyticsEvent, trackEvent } from "@/lib/analytics";
import SiteAnalytics from "@/components/site/site-analytics";
import TrackedLink, { TrackedAnchor } from "@/components/site/tracked-link";
import ContactForm from "@/components/site/contact-form";
import WhatsAppFlowCarousel from "@/components/site/whatsapp-flow-carousel";

vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));
vi.mock("@vercel/analytics/next", () => ({ Analytics: () => <div data-testid="analytics" /> }));

const contactEvent = { name: "contact_click", properties: { location: "header", channel: "form" } } as const;

beforeEach(() => {
  localStorage.clear();
  saveConsent({ analytics: true, marketing: true });
  vi.stubEnv("NODE_ENV", "production");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", "vercel");
  vi.stubEnv("NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS", "true");
  vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "");
});

afterEach(() => {
  localStorage.clear();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.mocked(track).mockReset();
});

describe("Configuração de analytics", () => {
  it("envia o contrato de eventos e carrega o provedor em produção", () => {
    render(<SiteAnalytics />);
    trackEvent(contactEvent);
    expect(screen.getByTestId("analytics")).toBeInTheDocument();
    expect(track).toHaveBeenCalledExactlyOnceWith("contact_click", { location: "header", channel: "form" });
  });

  it.each(["none", "google", "invalid"])("não carrega ou envia para um provedor inativo: %s", provider => {
    vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", provider);
    render(<SiteAnalytics />);
    trackEvent(contactEvent);
    expect(screen.queryByTestId("analytics")).not.toBeInTheDocument();
    expect(track).not.toHaveBeenCalled();
  });

  it.each(["development", "test"])("não contabiliza visitas ou ações em %s", environment => {
    vi.stubEnv("NODE_ENV", environment);
    render(<SiteAnalytics />);
    trackEvent(contactEvent);
    expect(screen.queryByTestId("analytics")).not.toBeInTheDocument();
    expect(track).not.toHaveBeenCalled();
  });

  it("permite desligar apenas eventos personalizados e mantém visitas", () => {
    vi.stubEnv("NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS", "false");
    render(<SiteAnalytics />);
    trackEvent(contactEvent);
    expect(screen.getByTestId("analytics")).toBeInTheDocument();
    expect(track).not.toHaveBeenCalled();
  });

  it("usa Vercel por padrão e nunca envia eventos no servidor", () => {
    vi.stubEnv("NEXT_PUBLIC_ANALYTICS_PROVIDER", undefined);
    expect(analyticsEnabled()).toBe(true);
    vi.stubGlobal("window", undefined);
    trackEvent(contactEvent);
    expect(track).not.toHaveBeenCalled();
  });

  it.each(["pageview", "event"] as const)("remove parâmetros e fragmentos do evento %s", type => {
    expect(sanitizeAnalyticsEvent({ type, url: "https://www.quintansc.com.br/contato?email=maria@example.com&text=briefing#nome" }))
      .toEqual({ type, url: "https://www.quintansc.com.br/contato" });
    expect(sanitizeAnalyticsEvent({ type, url: "invalid" })).toBeNull();
  });
});

describe("Interações medidas", () => {
  it("mede o clique no ícone do link uma vez e preserva seu destino", async () => {
    const user = userEvent.setup();
    render(<TrackedLink href="#contato" analyticsEvent={contactEvent}><span>Contato</span></TrackedLink>);
    await user.click(screen.getByText("Contato"));
    expect(screen.getByRole("link")).toHaveAttribute("href", "#contato");
    expect(track).toHaveBeenCalledExactlyOnceWith("contact_click", contactEvent.properties);
  });

  it("preserva handlers, ignora cliques cancelados e diferencia o botão do meio", () => {
    render(<TrackedAnchor href="#contato" analyticsEvent={contactEvent} onClick={event => event.preventDefault()}>Contato</TrackedAnchor>);
    const link = screen.getByRole("link");
    fireEvent.click(link);
    expect(track).not.toHaveBeenCalled();
    fireEvent(link, new MouseEvent("auxclick", { bubbles: true, button: 2 }));
    expect(track).not.toHaveBeenCalled();
    fireEvent(link, new MouseEvent("auxclick", { bubbles: true, button: 1 }));
    expect(track).toHaveBeenCalledOnce();
  });

  it("contabiliza início uma vez e briefing válido sem incluir dados pessoais", async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm initialSolution="Sistema web" />);
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(track).not.toHaveBeenCalled();
    await user.type(screen.getByLabelText(/Seu nome/i), "Maria Silva");
    await user.type(screen.getByLabelText(/E-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/Empresa/i), "Empresa privada");
    await user.type(screen.getByLabelText(/Conte sobre o projeto/i), "Detalhes privados do meu projeto.");
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(open).toHaveBeenCalledOnce();
    expect(vi.mocked(track).mock.calls).toEqual([
      ["contact_form_start", { form: "contact" }],
      ["contact_brief_prepared", { solution: "Sistema web" }],
    ]);
    await user.click(screen.getByRole("link", { name: /abra sua mensagem aqui/i }));
    expect(track).toHaveBeenLastCalledWith("contact_click", { location: "contact_form_fallback", channel: "whatsapp" });
    expect(vi.mocked(track).mock.calls.filter(([name]) => name === "contact_brief_prepared")).toHaveLength(1);
  });

  it("uma falha do SDK não impede a preparação do contato", async () => {
    const user = userEvent.setup();
    vi.mocked(track).mockImplementation(() => { throw new Error("SDK unavailable"); });
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm initialSolution="Sistema web" />);
    await user.type(screen.getByLabelText(/Seu nome/i), "Maria");
    await user.type(screen.getByLabelText(/E-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/Conte sobre o projeto/i), "Quero um sistema para minha loja.");
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(open).toHaveBeenCalledOnce();
    expect(screen.getByRole("status")).toHaveTextContent("Mensagem preparada.");
  });

  it("mede somente mudanças reais de etapa, incluindo teclado e gestos", () => {
    render(<WhatsAppFlowCarousel />);
    expect(track).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: /^Ir para etapa 1:/ }));
    expect(track).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Próxima etapa" }));
    expect(track).toHaveBeenLastCalledWith("whatsapp_flow_step", { step: 2, label: "Entender a intenção" });
    const carousel = screen.getByRole("region", { name: "Exemplo de fluxo de atendimento" });
    fireEvent.keyDown(carousel, { key: "End" });
    expect(track).toHaveBeenLastCalledWith("whatsapp_flow_step", { step: 6, label: "O que chega para você" });
    fireEvent.keyDown(carousel, { key: "End" });
    expect(track).toHaveBeenCalledTimes(2);
    const surface = document.getElementById("fluxo-carrossel-slide")!;
    fireEvent.touchStart(surface, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchEnd(surface, { changedTouches: [{ clientX: 200, clientY: 110 }] });
    expect(track).toHaveBeenLastCalledWith("whatsapp_flow_step", { step: 5, label: "Passar para uma pessoa" });
  });
});
