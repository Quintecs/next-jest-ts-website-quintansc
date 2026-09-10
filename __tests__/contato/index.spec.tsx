import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContatoPage from "../../app/contato/page";
import ContactForm from "@/components/site/contact-form";

afterEach(() => vi.restoreAllMocks());

describe("Página de Contato", () => {
  it("oferece contato direto e aproveita a solução selecionada", async () => {
    render(await ContatoPage({ searchParams: Promise.resolve({ solucao: "Sistema web" }) }));
    expect(screen.getByRole("heading", { level: 1, name: /boa conversa/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Enviar mensagem/i })).toHaveAttribute("href", "https://wa.me/5511989060037");
    expect(screen.getByLabelText(/O que você precisa/i)).toHaveValue("Sistema web")
  });
  it("descarta uma solução não reconhecida na URL", async () => {
    render(await ContatoPage({ searchParams: Promise.resolve({ solucao: "Desconhecido" }) }));
    expect(screen.getByLabelText(/O que você precisa/i)).toHaveValue("");
  });
  it("prepara um briefing completo e oferece alternativa se a aba for bloqueada", async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm initialSolution="Sistema web" />);
    await user.type(screen.getByLabelText(/Seu nome/i), "Maria Silva");
    await user.type(screen.getByLabelText(/E-mail/i), "maria@example.com");
    await user.type(screen.getByLabelText(/Empresa/i), "Maria & Cia");
    await user.type(screen.getByLabelText(/Conte sobre o projeto/i), "Preciso organizar os pedidos da minha loja.");
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(open).toHaveBeenCalledOnce();
    const url = new URL(String(open.mock.calls[0][0]));
    expect(url.origin + url.pathname).toBe("https://wa.me/5511989060037");
    expect(url.searchParams.get("text")).toContain("Nome: Maria Silva");
    expect(url.searchParams.get("text")).toContain("Empresa: Maria & Cia");
    expect(url.searchParams.get("text")).toContain("Solução: Sistema web");
    expect(url.searchParams.get("text")).toContain("Preciso organizar os pedidos da minha loja.");
    expect(screen.getByRole("status")).toHaveTextContent("Mensagem preparada.");
    expect(screen.getByRole("link", { name: /abra sua mensagem aqui/i })).toHaveAttribute("href", url.href);
    await user.type(screen.getByLabelText(/Seu nome/i), "a");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
  it("não abre o WhatsApp com campos obrigatórios vazios", async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /Continuar no WhatsApp/i }));
    expect(open).not.toHaveBeenCalled();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
