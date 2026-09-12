import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import WhatsAppAutomationPage from "../../app/automacao-whatsapp/page";
import Header from "@/components/site/header";

vi.mock("next/navigation", () => ({ usePathname: () => "/automacao-whatsapp" }));

describe("Página de conversão de automação", () => {
  it("oferece contato antes da demonstração e mantém o carrossel como aprofundamento opcional", () => {
    render(<WhatsAppAutomationPage />);
    const hero = screen.getByRole("region", { name: /Automação de WhatsApp para atender melhor/ });
    const contact = within(hero).getByRole("link", { name: "Quero avaliar meu atendimento" });
    expect(contact.getAttribute("href")).toMatch(/^https:\/\/wa.me\/5511989060037\?text=/);
    const carousel = screen.getByRole("region", { name: "Exemplo de fluxo de atendimento", hidden: true });
    expect(contact.compareDocumentPosition(carousel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(carousel.closest("details")).not.toHaveAttribute("open");
  });

  it("informa o mesmo plano e preço na página e na mensagem do WhatsApp", () => {
    render(<WhatsAppAutomationPage />);
    const plans = document.getElementById("planos")!;
    const cards = within(plans).getAllByRole("article");
    expect(cards).toHaveLength(3);
    for (const card of cards) {
      const name = within(card).getByRole("heading", { level: 3 }).textContent!;
      const cta = within(card).getByRole("link", { name: `Quero o ${name}` });
      const url = new URL(cta.getAttribute("href")!);
      expect(url.origin + url.pathname).toBe("https://wa.me/5511989060037");
      const message = url.searchParams.get("text")!;
      expect(message).toContain(name);
      const price = card.textContent!.match(/R\$\s?[\d.]+/)![0];
      expect(message).toContain(price);
      expect(cta).toHaveAttribute("target", "_blank");
      expect(cta).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(within(plans).getByText(/Assinaturas de plataforma, tarifas de mensagens/)).toBeInTheDocument();
  });

  it("mantém um caminho direto para o WhatsApp no cabeçalho da campanha", () => {
    render(<Header />);
    const cta = screen.getByRole("link", { name: "Falar no WhatsApp" });
    expect(cta.getAttribute("href")).toMatch(/^https:\/\/wa.me\/5511989060037\?text=/);
    expect(screen.getByRole("link", { name: "Planos" })).toHaveAttribute("href", "#planos");
  });
});
