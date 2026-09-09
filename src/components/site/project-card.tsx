import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectVisual from "./project-visual";

export default function ProjectCard({ project }: { project: Project | null }) {
  if (!project) return null;
  return (
    <Link href={`/projetos/${encodeURIComponent(project.name)}`} data-testid="projectCard" className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-edge bg-panel transition-colors hover:border-muted-dark">
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-6 sm:p-7"><span className="mb-3 font-mono text-xs text-muted">{project.flag === "front" ? "Front-End" : "Back-End"}</span><div className="flex items-center justify-between gap-4"><h3 className="break-words text-2xl font-semibold tracking-tight">{project.name}</h3><ArrowUpRight size={22} className="shrink-0 text-muted transition-colors group-hover:text-accent" /></div><p className="mb-6 mt-3 leading-relaxed text-muted">{project.description}</p><div className="mt-auto flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></div>
    </Link>
  );
}
