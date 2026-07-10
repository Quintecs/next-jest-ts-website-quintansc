import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

const flagStyles = {
  front: "border-[#285676] bg-[#1A3846] text-[#17A2DE]",
  back: "border-[#3E6E66] bg-[#162825] text-accent",
} as const;

const flagLabels = { front: "Front-End", back: "Back-End" } as const;

export default function ProjectCard({ project }: { project: Project | null }) {
  if (!project) return null;
  const createdAt = new Date(project.created_at);

  return (
    <Link
      href={`/projetos/${project.name}`}
      data-testid="projectCard"
      className="max-w-md rounded-xl transition-transform hover:-translate-y-1"
    >
      <Image
        src={project.image}
        alt={`Imagem do projeto ${project.name}`}
        width={375}
        height={375}
        className="size-[375px] max-w-full rounded-xl object-cover"
      />
      <h3 className="mt-4 font-display text-xl font-bold">{project.name}</h3>
      <p className="mb-4 text-muted-dark">{project.description}</p>
      <div className="flex items-center justify-between">
        <span
          className={`flex h-10 w-44 items-center justify-center rounded-lg border-2 text-sm font-semibold ${flagStyles[project.flag]}`}
        >
          {flagLabels[project.flag]}
        </span>
        <p className="text-muted-dark">{createdAt.toLocaleDateString("pt-BR")}</p>
      </div>
    </Link>
  );
}
