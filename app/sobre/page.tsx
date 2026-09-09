import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Braces, Fingerprint, MessagesSquare } from "lucide-react";
import ContactCta from "@/components/site/contact-cta";
import SocialLinks from "@/components/site/social-links";

export const metadata: Metadata = { title: "Gustavo Quintans", description: "Conheça Gustavo Quintans, desenvolvedor por trás da Quintec. Soluções digitais com atenção à experiência, à qualidade e ao seu negócio." };

export default function SobrePage() {
  return (
    <>
      <section className="site-container section-space grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
        <div><span className="eyebrow">Sobre / Quem está por trás do código</span><h1 className="page-title">Prazer, Gustavo.<br /><span className="text-accent">Seu parceiro em tecnologia.</span></h1><p className="mt-7 text-lg leading-relaxed text-muted">Sou Gustavo Quintans, desenvolvedor e criador da Quintec. Transformo ideias e necessidades de negócio em experiências digitais claras, funcionais e bem construídas.</p><p className="mt-5 leading-relaxed text-muted">Meu trabalho conecta o cuidado com a interface à estrutura que faz tudo funcionar. React, Next.js, TypeScript e Node.js fazem parte das ferramentas que uso para desenvolver sites, aplicações e integrações.</p><Link href="/projetos" className="text-link mt-6">Conheça meu trabalho <ArrowUpRight size={18} /></Link></div>
        <div className="grid-surface rounded-2xl border border-edge bg-panel p-8 sm:p-10"><span className="font-mono text-xs uppercase tracking-widest text-muted">Desenvolvedor / Quintec</span><div className="my-10 flex size-28 items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 text-4xl font-medium tracking-tighter text-accent">GQ<span className="text-foreground">.</span></div><h2 className="text-2xl font-semibold tracking-tight">Gustavo Quintans</h2><p className="mt-2 text-muted">Desenvolvimento de soluções digitais</p><div className="my-7 flex flex-wrap gap-2">{["Front-end", "Back-end", "APIs & integrações"].map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="border-t border-edge pt-6"><SocialLinks /></div></div>
      </section>
      <section className="site-container pb-20 md:pb-28"><span className="eyebrow">Princípios de trabalho</span><h2 className="section-title mb-12">O cuidado vai além da tela.</h2><div className="grid gap-8 md:grid-cols-3">{[{ icon: MessagesSquare, title: "Comunicação clara", text: "Conversas diretas sobre objetivos, escopo e decisões. Você participa do processo e entende o que está sendo construído." }, { icon: Fingerprint, title: "Seu contexto primeiro", text: "Cada negócio tem uma realidade. A solução começa pelo que você precisa resolver e pela experiência de quem vai usá-la." }, { icon: Braces, title: "Uma base para evoluir", text: "Código organizado, atenção à acessibilidade e validação dos fluxos para facilitar o uso e a evolução do projeto." }].map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-edge pt-7"><Icon size={25} className="mb-6 text-accent" strokeWidth={1.5} /><h3 className="mb-3 text-xl font-medium tracking-tight">{title}</h3><p className="leading-relaxed text-muted">{text}</p></article>)}</div></section>
      <ContactCta />
    </>
  );
}
