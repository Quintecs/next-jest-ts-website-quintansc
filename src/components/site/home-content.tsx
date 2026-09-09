import Link from "@/components/site/tracked-link";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Globe2, Layers3 } from "lucide-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import type { GithubUser } from "@/lib/github";
import { getProjectCatalog } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactCta from "./contact-cta";
import ProjectCard from "./project-card";
import SolutionDiagram from "./solution-diagram";

const solutions = [
  { number: "01", icon: Globe2, title: "Sites que abrem portas", text: "Apresente sua empresa com clareza e facilite o caminho entre o primeiro acesso e o contato comercial.", items: ["Sites institucionais e landing pages", "Experiência mobile e acessibilidade"], need: "Site ou landing page" },
  { number: "02", icon: Layers3, title: "Sistemas que simplificam", text: "Transforme uma operação complexa em uma experiência intuitiva para sua equipe e seus clientes.", items: ["Aplicações e plataformas web", "Interfaces sob medida para sua operação"], need: "Sistema web" },
  { number: "03", icon: Braces, title: "Tecnologia que conecta", text: "Conecte ferramentas e organize o fluxo de informações para reduzir tarefas manuais no dia a dia.", items: ["APIs e integrações entre sistemas", "Back-end estruturado para evoluir"], need: "API ou integração" },
];

export default function HomeContent({ user }: { user: GithubUser | null }) {
  return (
    <>
      <section className="site-container grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">Quintec / Desenvolvimento de soluções digitais</span>
          <h1 className="text-[clamp(2.65rem,5.3vw,4.7rem)] font-semibold leading-[1.06] tracking-[-0.055em]">Seu negócio tem<br className="hidden sm:block" /> um próximo nível.<br /><span className="text-accent">Vamos construir.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">Sites, sistemas e integrações que aproximam clientes, simplificam processos e dão espaço para seu negócio crescer.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contato" analyticsEvent={{ name: "contact_click", properties: { location: "home_hero", channel: "form" } }} className={cn(buttonVariants(), "primary-cta")}>Conversar sobre meu projeto <ArrowUpRight size={18} /></Link><Link href="/projetos" className={cn(buttonVariants({ variant: "outline" }), "secondary-cta")}>Explorar projetos <ArrowRight size={17} /></Link></div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted"><span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-edge bg-panel font-mono text-xs text-foreground">GQ</span><p>Desenvolvimento por <span className="font-medium text-foreground">{user?.name || "Gustavo Quintans"}</span><br /><span className="text-xs">Conversa direta. Soluções sob medida.</span></p></div>
        </div>
        <SolutionDiagram />
      </section>
      <div className="w-full border-y border-edge bg-panel/40"><div className="site-container flex flex-col justify-between gap-5 py-6 md:flex-row md:items-center"><p className="font-mono text-xs uppercase tracking-widest text-muted">Uma base sólida para suas ideias</p><div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-muted">{[{ Icon: FaReact, name: "React" }, { Icon: SiNextdotjs, name: "Next.js" }, { Icon: SiTypescript, name: "TypeScript" }, { Icon: FaNodeJs, name: "Node.js" }].map(({ Icon, name }) => <span key={name} className="flex items-center gap-2"><Icon size={21} />{name}</span>)}</div></div></div>
      <section id="solucoes" className="site-container section-space">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="eyebrow">01 / O que posso fazer por você</span><h2 className="section-title">Menos obstáculos.<br />Mais possibilidades.</h2></div><p className="max-w-sm leading-relaxed text-muted">A tecnologia certa começa com o entendimento do seu desafio, não com uma lista de ferramentas.</p></div>
        <div className="grid gap-4 lg:grid-cols-3">{solutions.map(({ number, icon: Icon, title, text, items, need }) => <article key={number} className="flex flex-col rounded-xl border border-edge bg-panel p-7 transition-colors hover:border-accent/40"><div className="mb-10 flex items-center justify-between"><Icon size={26} strokeWidth={1.5} className="text-accent" /><span className="font-mono text-xs text-muted-dark">/{number}</span></div><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mb-7 mt-4 leading-relaxed text-muted">{text}</p><ul className="mb-8 space-y-3">{items.map(item => <li key={item} className="flex gap-2 text-sm text-muted"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{item}</li>)}</ul><Link href={`/contato?solucao=${encodeURIComponent(need)}`} analyticsEvent={{ name: "solution_click", properties: { solution: need, location: "home_solutions" } }} className="text-link mt-auto justify-between border-t border-edge pt-5">Quero essa solução <ArrowUpRight size={18} /></Link></article>)}</div>
      </section>
      <section className="w-full border-y border-edge bg-panel/30"><div className="site-container section-space"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="eyebrow">02 / Portfólio selecionado</span><h2 className="section-title">Ideias que viraram código.</h2></div><Link href="/projetos" className="text-link">Todos os projetos <ArrowUpRight size={18} /></Link></div><div className="grid gap-6 md:grid-cols-2">{getProjectCatalog().slice(0, 2).map(project => <ProjectCard key={project.name} project={project} />)}</div><p className="mt-6 text-sm text-muted">Projetos de portfólio com código aberto para você conhecer minha abordagem técnica.</p></div></section>
      <section className="site-container section-space"><span className="eyebrow">03 / Como vamos trabalhar</span><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-title">Clareza do primeiro contato<br />à última entrega.</h2><Link href="/sobre" className="text-link">Conheça quem vai desenvolver <ArrowUpRight size={18} /></Link></div><ol className="grid gap-8 md:grid-cols-3">{[{ title: "Entender", text: "Conversamos sobre seu negócio, o problema e o que você espera alcançar." }, { title: "Planejar e construir", text: "Definimos escopo e prioridades. Você acompanha o desenvolvimento com alinhamentos ao longo do projeto." }, { title: "Entregar e evoluir", text: "Validamos os fluxos e os detalhes para colocar a solução em uso e planejar os próximos passos." }].map(({ title, text }, index) => <li key={title} className="border-t border-edge pt-6"><div className="mb-5 flex items-center justify-between"><span className="font-mono text-sm text-accent">0{index + 1}</span><ArrowDown size={16} className="text-muted-dark md:-rotate-90" /></div><h3 className="mb-3 text-xl font-medium tracking-tight">{title}</h3><p className="leading-relaxed text-muted">{text}</p></li>)}</ol></section>
      <ContactCta />
    </>
  );
}
