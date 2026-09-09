import { ArrowDown, ArrowUpRight, Braces, Check, Database, Globe2, Layers3 } from "lucide-react";

export default function SolutionDiagram() {
  return (
    <div className="grid-surface relative rounded-2xl border border-edge bg-panel p-5 sm:p-8" aria-label="Da ideia à solução: estratégia, interface, integração e entrega">
      <div className="mb-10 flex items-center justify-between border-b border-edge pb-5"><span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Da ideia à solução</span><Braces className="text-accent" size={20} /></div>
      <div className="mx-auto max-w-xs">
        <div className="rounded-xl border border-edge bg-[#1a2228] p-5"><div className="mb-3 flex items-center justify-between"><span className="font-mono text-xs text-accent">01 / ESTRATÉGIA</span><ArrowUpRight size={16} className="text-muted" /></div><p className="text-xl font-medium tracking-tight">Seu objetivo de negócio</p><p className="mt-2 text-sm text-muted">O ponto de partida de cada decisão.</p></div>
        <ArrowDown className="mx-auto my-4 text-muted-dark" size={20} />
        <div className="grid grid-cols-2 gap-3">{[{ icon: Globe2, title: "Interface", text: "Clara e acessível" }, { icon: Database, title: "Integração", text: "Tudo conectado" }].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-xl border border-edge bg-background p-4"><Icon size={21} className="mb-5 text-accent" /><p className="font-medium">{title}</p><p className="mt-1 text-xs text-muted">{text}</p></div>)}</div>
        <ArrowDown className="mx-auto my-4 text-muted-dark" size={20} />
        <div className="flex items-center gap-4 rounded-xl border border-accent/30 bg-[#1b2820] p-5"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-background"><Layers3 size={21} /></div><div><p className="font-medium">Uma solução para o seu negócio</p><p className="mt-1 text-xs text-muted">Pronta para evoluir com você</p></div></div>
      </div>
      <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted"><Check size={14} className="text-accent" /> Propósito em cada etapa. Cuidado em cada detalhe.</div>
    </div>
  );
}
