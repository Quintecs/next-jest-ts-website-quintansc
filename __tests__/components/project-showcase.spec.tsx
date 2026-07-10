import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProjectShowcase from "@/components/site/project-showcase";

describe("Componente de vitrine de projeto", () => {
  it("exibe o link para o projeto completo", () => {
    render(
      <ProjectShowcase
        title="drag-and-drop"
        description="Um projeto de drag and drop"
        urlImage="/1project.png"
        flags={["Frontend", "API"]}
        projectUrl="/projetos/drag-and-drop"
      />
    );
    expect(screen.getByText(/Acessar projeto completo/i)).toBeInTheDocument();
    expect(screen.getByText("drag-and-drop")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });
});
