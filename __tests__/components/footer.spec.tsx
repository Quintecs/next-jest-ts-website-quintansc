import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "@/components/site/footer";

describe("Footer da aplicação", () => {
  it("renderiza o container do footer", () => {
    render(<Footer />);
    expect(screen.getByTestId("footerContainer")).toBeInTheDocument();
  });

  it("exibe as redes sociais", () => {
    render(<Footer />);
    const socials = screen.getAllByTestId("lateralElements");
    expect(socials.length).toBeGreaterThanOrEqual(4);
  });

  it("exibe o copyright da Quintec", () => {
    render(<Footer />);
    expect(screen.getByText(/Quintec — Todos os direitos/i)).toBeInTheDocument();
  });
});
