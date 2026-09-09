import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ProjectGallery from "@/components/site/project-gallery";
import { getProjectCatalog } from "@/lib/projects";

describe("Galeria de projetos", () => {
  it("filtra por área e permite voltar ao catálogo completo", async () => {
    const user = userEvent.setup();
    render(<ProjectGallery projects={getProjectCatalog()} />);
    expect(screen.getAllByTestId("projectCard")).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: "Front-end" }));
    expect(screen.getByRole("button", { name: "Front-end" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("1 projeto");
    expect(screen.getByRole("heading", { name: "MoveIT-NextJS" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Clean-API" })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Back-end" }));
    expect(screen.getAllByTestId("projectCard")).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: "Todos" }));
    expect(screen.getAllByTestId("projectCard")).toHaveLength(3);
  });
});
