import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SocialLinks from "@/components/site/social-links";

describe("Componente de redes sociais", () => {
  it("renderiza pelo menos 4 redes sociais", () => {
    render(<SocialLinks />);
    const links = screen.getAllByTestId("lateralElements");
    expect(links.length).toBeGreaterThanOrEqual(4);
  });
});
