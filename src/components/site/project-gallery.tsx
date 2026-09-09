"use client";

import { useState } from "react";
import type { Project, ProjectFlag } from "@/lib/projects";
import { cn } from "@/lib/utils";
import ProjectCard from "./project-card";

const filters: { label: string; value: "all" | ProjectFlag }[] = [{ label: "Todos", value: "all" }, { label: "Front-end", value: "front" }, { label: "Back-end", value: "back" }];

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | ProjectFlag>("all");
  const visible = projects.filter(project => filter === "all" || project.flag === filter);
  return (
    <><div className="mb-8 flex flex-col justify-between gap-4 border-b border-edge pb-6 sm:flex-row sm:items-center"><div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por área">{filters.map(({ label, value }) => <button key={value} type="button" onClick={() => setFilter(value)} aria-pressed={filter === value} className={cn("min-h-11 rounded-lg border px-5 text-sm transition-colors", filter === value ? "border-accent/30 bg-accent/10 text-accent" : "border-transparent text-muted hover:border-edge hover:text-foreground")}>{label}</button>)}</div><p role="status" className="font-mono text-xs text-muted">{visible.length} {visible.length === 1 ? "projeto" : "projetos"}</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map(project => <ProjectCard key={project.name} project={project} />)}</div></>
  );
}
