import type { Metadata } from "next";

// The hosting redirects the apex domain to www. Keep every discovery signal
// on that same HTTPS origin instead of deriving it from request headers.
export const SITE_ORIGIN = "https://www.quintansc.com.br";
export const SITE_TITLE = "Quintec — Tecnologia & Soluções Digitais";
export const SITE_DESCRIPTION =
  "Sites, sistemas web e integrações sob medida para o seu negócio. Conheça os projetos de Gustavo Quintans e converse sobre sua próxima solução digital.";

export function siteUrl(pathname: string): string {
  return new URL(pathname, SITE_ORIGIN).toString();
}

export function pageMetadata(pathname: string, title: string, description: string): Metadata {
  const url = siteUrl(pathname);
  const socialTitle = pathname === "/" ? title : `${title} | Quintec`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Quintec",
      url,
      title: socialTitle,
      description,
    },
    twitter: { card: "summary", title: socialTitle, description },
  };
}
