import { seoPages, SITE_DESCRIPTION, siteUrl } from "@/lib/seo";

type Entity = Record<string, unknown>;

export function JsonLd({ data }: { data: Entity }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  }} />;
}

export function SiteStructuredData() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteUrl("/#organization"),
        name: "Quintec",
        url: siteUrl("/"),
        logo: siteUrl("/logo.png"),
        description: SITE_DESCRIPTION,
        founder: { "@id": siteUrl("/sobre#person") },
      },
      {
        "@type": "Person",
        "@id": siteUrl("/sobre#person"),
        name: "Gustavo Quintans",
        url: siteUrl("/sobre"),
        jobTitle: "Desenvolvedor de soluções digitais",
        sameAs: [
          "https://github.com/quintansc",
          "https://gitlab.com/QuintansC",
          "https://www.instagram.com/quintansdev/",
          "https://www.linkedin.com/in/gustavo-quintans-59206242/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": siteUrl("/#website"),
        name: "Quintec",
        url: siteUrl("/"),
        inLanguage: "pt-BR",
        publisher: { "@id": siteUrl("/#organization") },
      },
    ],
  }} />;
}

export function PageStructuredData({ path, page, type = "WebPage", mainEntity }: {
  path: string;
  page: { title: string; description: string };
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  mainEntity?: Entity;
}) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": type,
    "@id": siteUrl(`${path}#webpage`),
    url: siteUrl(path),
    name: page.title,
    description: page.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": siteUrl("/#website") },
    publisher: { "@id": siteUrl("/#organization") },
    ...(mainEntity ? { mainEntity } : {}),
  }} />;
}

export function StaticPageStructuredData({ path }: { path: keyof typeof seoPages }) {
  return <PageStructuredData
    path={path}
    page={seoPages[path]}
    type={path === "/sobre" ? "AboutPage" : path === "/contato" ? "ContactPage" : path === "/projetos" ? "CollectionPage" : "WebPage"}
    mainEntity={path === "/sobre" ? { "@id": siteUrl("/sobre#person") } : path === "/automacao-whatsapp" ? {
      "@type": "Service",
      "@id": siteUrl("/automacao-whatsapp#service"),
      name: "Automação de WhatsApp para empresas",
      serviceType: "Automação de atendimento pelo WhatsApp",
      description: seoPages[path].description,
      provider: { "@id": siteUrl("/#organization") },
      url: siteUrl(path),
    } : undefined}
  />;
}
