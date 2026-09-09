import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import WhatsAppFlowDemo from "@/components/site/whatsapp-flow-demo";
import { WHATSAPP_URL } from "@/lib/contact";

describe("Exemplos de automação de WhatsApp", () => {
  it("troca o fluxo e mantém a mensagem de contato alinhada à necessidade escolhida", async () => {
    const user = userEvent.setup();
    render(<WhatsAppFlowDemo />);

    expect(screen.getByRole("button", { name: "Agendamentos" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Oi! Queria agendar um atendimento para amanhã.")).toBeInTheDocument();

    for (const [segment, message] of [
      ["Pedidos e vendas", "Olá! Quero fazer um pedido. Vocês entregam?"],
      ["Orçamentos e serviços", "Olá! Gostaria de um orçamento."],
    ]) {
      await user.click(screen.getByRole("button", { name: segment }));
      expect(screen.getByRole("button", { name: segment })).toHaveAttribute("aria-pressed", "true");
      expect(screen.getByText(message)).toBeInTheDocument();
      expect(screen.queryByText("Oi! Queria agendar um atendimento para amanhã.")).not.toBeInTheDocument();

      const link = screen.getByRole("link", { name: /quero um fluxo para meu negócio/i });
      const url = new URL(link.getAttribute("href")!);
      expect(url.origin + url.pathname).toBe(WHATSAPP_URL);
      expect(url.searchParams.get("text")).toContain(segment.toLowerCase());
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("permite selecionar um exemplo usando o teclado", async () => {
    const user = userEvent.setup();
    render(<WhatsAppFlowDemo />);
    await user.tab();
    await user.tab();
    expect(screen.getByRole("button", { name: "Pedidos e vendas" })).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("button", { name: "Pedidos e vendas" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Olá! Quero fazer um pedido. Vocês entregam?")).toBeInTheDocument();
  });
});
