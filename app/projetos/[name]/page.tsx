import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getProject, getProjectCatalog } from "@/lib/projects";

export function generateStaticParams() {
  return getProjectCatalog().map(({ name }) => ({ name }));
}

export const revalidate = 86400;

type Params = { params: Promise<{ name: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name } = await params;
  return { title: decodeURIComponent(name) };
}

export default async function ProjetoPage({ params }: Params) {
  const { name } = await params;
  const project = await getProject(decodeURIComponent(name));
  if (!project) notFound();

  const createdAt = new Date(project.created_at);

  return (
    <article className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="mb-4 font-display text-4xl font-bold">{project.name}</h1>
        <p className="max-w-3xl leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-6">
        <Image
          src={project.banner ?? project.image}
          alt={`Captura de tela do projeto ${project.name}`}
          width={1980}
          height={500}
          priority
          className="h-auto w-full shrink-0 snap-center rounded-xl"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="mb-4 font-display text-2xl font-bold">Processo de Desenvolvimento</h2>
        <p className="mb-6 max-w-3xl leading-relaxed text-muted">
          Projeto desenvolvido com foco em qualidade de código, testes
          automatizados e boas práticas de engenharia. O código-fonte completo
          está disponível no GitHub.
        </p>
        <a
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-primary-light hover:underline"
        >
          Ver repositório no GitHub →
        </a>
        <p className="mt-8">~ Desenvolvido por Gustavo Quintans</p>
        <p className="text-muted-dark">
          {createdAt.toLocaleDateString("pt-BR")}
        </p>
      </div>
    </article>
  );
}
