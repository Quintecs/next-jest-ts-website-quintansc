import type { Metadata } from "next";

// The hosting redirects the apex domain to www. Keep every discovery signal
// on that same HTTPS origin instead of deriving it from request headers.
export const SITE_ORIGIN = "https://www.quintansc.com.br";
export const SITE_TITLE = "Criação de sites, sistemas web e automações | Quintec";
export const SITE_DESCRIPTION =
  "Desenvolvimento de sites, landing pages, sistemas web e automação de WhatsApp sob medida. Conheça a Quintec e converse com Gustavo Quintans sobre seu projeto.";

export const seoPages = {
  "/privacidade": {
    title: "Política de privacidade e cookies",
    description: "Entenda como a Quintec usa dados de contato, estatísticas e publicidade. Consulte a política de privacidade e saiba como gerenciar suas preferências de cookies.",
  },
  "/": { title: SITE_TITLE, description: SITE_DESCRIPTION },
  "/sobre": {
    title: "Gustavo Quintans — Desenvolvedor de sites e sistemas",
    description: "Conheça Gustavo Quintans, desenvolvedor e criador da Quintec. Sites, sistemas web e integrações com React, Next.js, TypeScript e Node.js para seu negócio.",
  },
  "/projetos": {
    title: "Projetos de desenvolvimento web e APIs",
    description: "Explore projetos de portfólio com React, Next.js, Node.js e TypeScript. Conheça as soluções, as tecnologias e o código desenvolvido por Gustavo Quintans.",
  },
  "/contato": {
    title: "Contato e orçamento para sites, sistemas e automações",
    description: "Solicite uma proposta para seu site, landing page, sistema web ou integração. Fale diretamente com Gustavo Quintans, da Quintec, pelo formulário ou WhatsApp.",
  },
  "/automacao-whatsapp": {
    title: "Automação de WhatsApp para empresas",
    description: "Automação de WhatsApp sob medida para seu negócio: respostas frequentes, triagem, pedidos e encaminhamento à equipe. Converse com a Quintec sobre seu atendimento.",
  },
} as const;

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
