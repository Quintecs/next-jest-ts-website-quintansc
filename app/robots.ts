import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // A single wildcard rule covers all compliant crawlers, including new ones.
    // Public pages and the CSS/JS/images needed to render them remain crawlable.
    rules: { userAgent: "*", allow: "/" },
    sitemap: siteUrl("/sitemap.xml"),
  };
}
