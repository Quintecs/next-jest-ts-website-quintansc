import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProjectCard from "@/components/site/project-card";
import type { Project } from "@/lib/projects";

const project: Project = {
  name: "Clean-API",
  description: "API com Clean Architecture",
  created_at: "2023-11-01T00:00:00Z",
  html_url: "https://github.com/QuintansC/Clean-API",
  image: "/tsnode.png",
  flag: "back",
  tags: ["Backend", "API", "Node"],
};

describe("Card de projeto", () => {
  it("renderiza nome, descrição e flag do projeto", () => {
    render(<ProjectCard project={project} />);
    expect(
      screen.getByRole("heading", { name: "Clean-API" })
    ).toBeInTheDocument();
    expect(screen.getByText("API com Clean Architecture")).toBeInTheDocument();
    expect(screen.getByText("Back-End")).toBeInTheDocument();
  });

  it("não renderiza nada sem projeto", () => {
    const { container } = render(<ProjectCard project={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
