import type { Metadata } from "next";
import Link from "next/link";
import { TrackedAnchor } from "@/components/site/tracked-link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { findProject, getProjectCatalog } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProjectVisual from "@/components/site/project-visual";
import ContactCta from "@/components/site/contact-cta";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return getProjectCatalog().map(({ name }) => ({ name })); }
type Params = { params: Promise<{ name: string }> };
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name } = await params;
  const project = findProject(name);
  if (!project) notFound();
  return pageMetadata(`/projetos/${encodeURIComponent(project.name)}`, project.name, project.description);
}

const details: Record<string, { purpose: string; features: string[] }> = {
  "MoveIT-NextJS": { purpose: "Uma aplicação de produtividade que combina ciclos de foco com pausas para movimento. O projeto explora como uma interface pode ajudar a organizar uma rotina e tornar o progresso mais visível.", features: ["Ciclos de produtividade com a técnica Pomodoro", "Desafios que incentivam pausas e movimento", "Sistema de níveis para acompanhar o progresso"] },
  "Clean-API": { purpose: "Uma API que explora a separação entre regras de negócio e detalhes de implementação. O foco está em organizar o código para facilitar manutenção e testes.", features: ["Separação de responsabilidades com Clean Architecture", "Desenvolvimento com Node.js e TypeScript", "Testes automatizados para validar o comportamento"] },
  "crud-nest": { purpose: "Uma aplicação back-end para operações de criação, consulta, atualização e exclusão de dados. O projeto usa uma arquitetura em camadas para organizar a implementação.", features: ["Operações de criação, leitura, atualização e exclusão", "Estrutura modular com NestJS", "TypeScript e organização em camadas"] },
};

export default async function ProjetoPage({ params }: Params) {
  const { name } = await params;
  const project = findProject(name);
  if (!project) notFound();
  const detail = details[project.name];
  return (
    <><article className="site-container pb-20 pt-10 md:pb-28"><Link href="/projetos" className="text-link mb-12 text-muted"><ArrowLeft size={16} />Voltar para projetos</Link><div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]"><div><span className="eyebrow">Projeto de portfólio / {project.flag === "front" ? "Front-end" : "Back-end"}</span><h1 className="page-title break-words">{project.name}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.description}</p><div className="mb-8 mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><TrackedAnchor href={project.html_url} analyticsEvent={{ name: "project_click", properties: { project: project.name, destination: "repository" } }} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "primary-cta")}>Explorar código no GitHub <ArrowUpRight size={18} /></TrackedAnchor></div><div className="overflow-hidden rounded-xl border border-edge"><ProjectVisual project={project} /><p className="bg-panel px-6 py-3 text-xs text-muted">Visão conceitual da solução.</p></div></div><div className="mt-16 grid gap-10 border-t border-edge pt-12 md:grid-cols-2"><div><h2 className="mb-4 text-2xl font-semibold tracking-tight">A proposta</h2><p className="leading-relaxed text-muted">{detail.purpose}</p></div><div><h2 className="mb-5 text-2xl font-semibold tracking-tight">O que foi desenvolvido</h2><ul className="space-y-4">{detail.features.map(feature => <li key={feature} className="flex items-start gap-3 leading-relaxed text-muted"><Check size={18} className="mt-1 shrink-0 text-accent" />{feature}</li>)}</ul></div></div></article><ContactCta /></>
  );
}
