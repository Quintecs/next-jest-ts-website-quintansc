import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Header from "@/components/site/header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header da aplicação", () => {
  it("renderiza o container do header", () => {
    render(<Header />);
    expect(screen.getByTestId("headerContainer")).toBeInTheDocument();
  });

  it("exibe o logo e o nome da empresa", () => {
    render(<Header />);
    expect(screen.getByTestId("companyLogo")).toBeInTheDocument();
    expect(screen.getByText(/Quintec/i)).toBeInTheDocument();
  });

  it("possui os links de navegação desktop", () => {
    render(<Header />);
    const links = screen.getAllByTestId("menuElements");
    expect(links.length).toBeGreaterThanOrEqual(3);
  });

  it("possui o CTA Fale Conosco apontando para /contato", () => {
    render(<Header />);
    const cta = screen.getByRole("link", { name: /fale conosco/i });
    expect(cta).toHaveAttribute("href", "/contato");
  });

  it("abre o menu mobile com os links", async () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId("btnMobileMenu"));

    expect(await screen.findByTestId("drawer")).toBeInTheDocument();
    const links = await screen.findAllByTestId("linkElements");
    expect(links.length).toBeGreaterThanOrEqual(4);
  });
});
