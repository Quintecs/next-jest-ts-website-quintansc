import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomeContent from "@/components/site/home-content";

const user = {
  name: "Gustavo Quintans",
  company: "Quintec",
  bio: "Front-end Developer",
  location: "São Paulo",
  avatar_url: "https://avatars.githubusercontent.com/u/68349886?v=4",
  created_at: "2019-01-01T00:00:00Z",
};

describe("Conteúdo da Home", () => {
  it("exibe o hero com o nome", () => {
    render(<HomeContent user={user} />);
    expect(
      screen.getByRole("heading", { name: /Gustavo Quintans/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("exibe a seção de habilidades", () => {
    render(<HomeContent user={user} />);
    expect(screen.getByText(/Minhas Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText("NodeJS")).toBeInTheDocument();
    expect(screen.getByText("ReactJs")).toBeInTheDocument();
  });

  it("exibe os projetos em destaque do catálogo", () => {
    render(<HomeContent user={user} />);
    expect(screen.getByText("MoveIT-NextJS")).toBeInTheDocument();
    expect(screen.getByText("Clean-API")).toBeInTheDocument();
  });

  it("renderiza mesmo sem dados do GitHub", () => {
    render(<HomeContent user={null} />);
    expect(screen.getByText(/Vamos trabalhar juntos/i)).toBeInTheDocument();
  });
});
