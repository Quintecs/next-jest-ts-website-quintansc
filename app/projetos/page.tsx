import type { Metadata } from "next";

import { getProject, getProjectCatalog } from "@/lib/projects";
import ProjectCard from "@/components/site/project-card";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Explore a galeria de projetos da Quintec: aplicações front-end e back-end construídas com React, Next.js e Node.js.",
};

export const revalidate = 86400;

export default async function ProjetosPage() {
  const projects = await Promise.all(
    getProjectCatalog().map((project) => getProject(project.name))
  );

  return (
    <div className="w-full max-w-6xl px-6 py-16 text-center">
      <h1 className="mb-6 font-display text-4xl font-bold">Nossos Projetos</h1>
      <p className="mx-auto mb-12 max-w-3xl leading-relaxed text-muted">
        Explore nossa galeria de projetos e mergulhe em uma variedade de
        trabalhos. Cada empreendimento é cuidadosamente concebido para atender
        às necessidades específicas de nossos clientes, combinando
        criatividade, funcionalidade e inovação.
      </p>
      <div className="flex flex-wrap justify-center gap-8 text-left">
        {projects.map((project) =>
          project ? <ProjectCard key={project.name} project={project} /> : null
        )}
      </div>
    </div>
  );
}
