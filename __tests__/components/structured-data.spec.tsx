import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { JsonLd } from "@/components/site/structured-data";

describe("JSON-LD", () => {
  it("preserva o conteúdo sem permitir que um texto feche a tag script", () => {
    const name = '</script><script>alert("exemplo")</script>';
    const html = renderToStaticMarkup(<JsonLd data={{ "@context": "https://schema.org", name }} />);
    const document = new DOMParser().parseFromString(html, "text/html");
    const scripts = document.querySelectorAll("script");
    expect(scripts).toHaveLength(1);
    expect(scripts[0].type).toBe("application/ld+json");
    expect(JSON.parse(scripts[0].textContent || "").name).toBe(name);
  });
});
