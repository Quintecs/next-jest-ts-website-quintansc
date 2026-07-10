import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContatoPage from "../../app/contato/page";

describe("Página de Contato", () => {
  it("exibe os textos principais", () => {
    render(<ContatoPage />);
    expect(
      screen.getByRole("heading", { name: /Entre em contato/i, level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Preencha o formulário/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Contato via WhatsApp/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Enviar solicitação/i)).toBeInTheDocument();
  });

  it("possui o link de WhatsApp", () => {
    render(<ContatoPage />);
    const wa = screen.getByRole("link", { name: /Enviar Mensagem/i });
    expect(wa).toHaveAttribute("href", "https://wa.me/5511996394440");
  });
});
