import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Quintec: tecnologia e soluções digitais com React, Next.js e Node.js.",
};

const values = [
  {
    title: "Tecnologia moderna",
    text: "Trabalhamos com as ferramentas mais atuais do ecossistema JavaScript: React, Next.js, TypeScript e Node.js.",
  },
  {
    title: "Qualidade de código",
    text: "Testes automatizados, revisão de código e boas práticas de engenharia em todos os projetos.",
  },
  {
    title: "Foco no resultado",
    text: "Interfaces performáticas e acessíveis que transformam a visão dos nossos clientes em realidade.",
  },
];

export default function SobrePage() {
  return (
    <div className="w-full max-w-6xl px-6 py-16">
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary-light">
        Sobre
      </span>
      <h1 className="mb-6 font-display text-4xl font-bold">Sobre a Quintec</h1>
      <p className="mb-12 max-w-3xl leading-relaxed text-muted">
        A Quintec é especializada em desenvolvimento de soluções digitais.
        Criamos aplicações web modernas, do design à entrega, combinando
        criatividade, funcionalidade e inovação para atender às necessidades
        específicas de cada cliente.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {values.map(({ title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-edge bg-panel p-6"
          >
            <h2 className="mb-3 text-lg font-bold text-primary-light">{title}</h2>
            <p className="text-sm leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4">
        <h2 className="font-display text-2xl font-bold">Vamos conversar?</h2>
        <Link href="/contato" className={cn(buttonVariants())}>
          Fale Conosco
        </Link>
      </div>
    </div>
  );
}
