import { pageMetadata } from "@/lib/seo";
import { getProjectCatalog } from "@/lib/projects";
import ProjectGallery from "@/components/site/project-gallery";
import ContactCta from "@/components/site/contact-cta";

export const metadata = pageMetadata(
  "/projetos",
  "Projetos",
  "Conheça os projetos de Gustavo Quintans: interfaces, aplicações web e APIs com React, Next.js, Node.js e TypeScript.",
);

export default function ProjetosPage() {
  return (
    <><section className="site-container section-space"><span className="eyebrow">Portfólio / Da ideia à implementação</span><h1 className="page-title">O trabalho fala.<br /><span className="text-accent">Explore os detalhes.</span></h1><p className="mb-12 mt-6 max-w-2xl text-lg leading-relaxed text-muted">Uma seleção de projetos de portfólio que mostram como construo interfaces e organizo soluções. Conheça a proposta, as tecnologias e o código de cada um.</p><ProjectGallery projects={getProjectCatalog()} /></section><ContactCta /></>
  );
}
