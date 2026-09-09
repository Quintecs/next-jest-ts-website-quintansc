import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeContent from "@/components/site/home-content";

const user = { name: "Gustavo Quintans", company: "Quintec", bio: "Front-end Developer", location: "São Paulo", avatar_url: "https://avatars.githubusercontent.com/u/68349886?v=4", created_at: "2019-01-01T00:00:00Z" };

describe("Conteúdo da Home", () => {
  it("apresenta a proposta comercial e um caminho direto para contato", () => {
    render(<HomeContent user={user} />);
    expect(screen.getByRole("heading", { level: 1, name: /Seu negócio tem um próximo nível/i })).toBeInTheDocument();
    expect(screen.getByText("Gustavo Quintans")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Conversar sobre meu projeto/i })[0]).toHaveAttribute("href", "/contato");
  });
  it("leva a solução escolhida para o briefing", () => {
    render(<HomeContent user={user} />);
    expect(screen.getByRole("heading", { name: "Sites que abrem portas" })).toBeInTheDocument();
    const links = screen.getAllByRole("link", { name: /Quero essa solução/i });
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", `/contato?solucao=${encodeURIComponent("Site ou landing page")}`);
  });
  it("exibe os projetos em destaque do catálogo", () => {
    render(<HomeContent user={user} />);
    expect(screen.getByRole("heading", { name: "MoveIT-NextJS" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Clean-API" })).toBeInTheDocument();
  });
  it("preserva apresentação e contato sem dados externos", () => {
    render(<HomeContent user={null} />);
    expect(screen.getByText("Gustavo Quintans")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explorar projetos/i })).toHaveAttribute("href", "/projetos");
    expect(screen.queryByText(/anos de experiência/i)).not.toBeInTheDocument();
  });
});
