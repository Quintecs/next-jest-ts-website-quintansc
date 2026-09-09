import { ArrowRight, Braces, Check, Database, Timer } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectVisual({ project }: { project: Project }) {
  const front = project.flag === "front";
  return (
    <div className={`grid-surface flex min-h-64 flex-col justify-between overflow-hidden p-6 sm:p-8 ${front ? "bg-[#1a2520]" : "bg-[#21152f]"}`}>
      <div className="flex items-center justify-between font-mono text-xs text-muted"><span>{front ? "PRODUTIVIDADE / WEB APP" : "ARQUITETURA / BACK-END"}</span>{front ? <Timer size={18} /> : <Braces size={18} />}</div>
      {front ? <div className="mx-auto my-7 w-full max-w-xs rounded-xl border border-accent/20 bg-background/75 p-5"><div className="flex items-center justify-between"><span className="text-sm text-muted">Foco. Pausa. Movimento.</span><Timer size={19} className="text-accent" /></div><p className="my-5 text-3xl font-medium tracking-tight">Um ciclo de cada vez<span className="text-accent">.</span></p><div className="flex items-center gap-2 border-t border-edge pt-3 text-xs text-muted"><Check size={14} className="text-accent" />Pomodoro + desafios</div></div> : <div className="my-10 flex items-center justify-center gap-3">{[{ icon: Braces, text: "API" }, { icon: Check, text: "Regras" }, { icon: Database, text: "Dados" }].map(({ icon: Icon, text }, index) => <div key={text} className="contents">{index > 0 && <ArrowRight size={16} className="shrink-0 text-muted-dark" />}<div className="flex flex-1 flex-col items-center gap-3 rounded-xl border border-primary-light/25 bg-background/70 px-2 py-5"><Icon size={24} strokeWidth={1.5} className="text-primary-light" /><span className="text-xs text-muted">{text}</span></div></div>)}</div>}
      <span className="font-mono text-xs text-muted">{front ? "React + Next.js" : project.tags.join(" / ")}<span className="float-right">{front ? "FRONT-END" : "BACK-END"}</span></span>
    </div>
  );
}
