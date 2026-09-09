import type { MetadataRoute } from "next";
import { getProjectCatalog } from "@/lib/projects";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/sobre",
    "/projetos",
    "/contato",
    "/automacao-whatsapp",
    ...getProjectCatalog().map(({ name }) => `/projetos/${encodeURIComponent(name)}`),
  ];

  // Do not invent lastModified dates: a build is not a content update.
  return paths.map(path => ({ url: siteUrl(path) }));
}
