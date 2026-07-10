import Image from "next/image";
import Link from "next/link";
import { BsChat } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAngular, SiNextdotjs } from "react-icons/si";

import type { GithubUser } from "@/lib/github";
import { getProjectCatalog } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProjectShowcase from "./project-showcase";
import SkillCard, { type SkillCardProps } from "./skill-card";
import UserCard from "./user-card";

const skills: SkillCardProps[] = [
  {
    title: "NodeJS",
    subtitle: "Back-end Framework",
    textContent:
      "Node.js® é um ambiente de execução de JavaScript de código aberto e multiplataforma.",
    icon: <FaNodeJs size={65} color="#3c873a" />,
    link: "https://nodejs.org/en/",
    theme: {
      colorBackgroundIcon: "#10BB83",
      cardBackgroundColor: "#162825",
      cardBackroundTitleColor: "#3E6E66",
    },
  },
  {
    title: "ReactJs",
    subtitle: "Front-end Framework",
    textContent:
      "A biblioteca para web e interfaces de usuário nativas baseada em JavaScript e TypeScript.",
    icon: <FaReact size={65} color="#61DBFB" />,
    link: "https://pt-br.react.dev",
    theme: {
      colorBackgroundIcon: "#17A2DE",
      cardBackgroundColor: "#1A3846",
      cardBackroundTitleColor: "#285676",
    },
  },
  {
    title: "NextJs",
    subtitle: "Front-end Framework",
    textContent:
      "Next.js é um framework React para criar aplicativos web full-stack com recursos e otimizações extras.",
    icon: <SiNextdotjs size={65} color="black" />,
    link: "https://nextjs.org/",
    theme: {
      colorBackgroundIcon: "#F4F4F4",
      cardBackgroundColor: "#1D1D1F",
      cardBackroundTitleColor: "#DAD9DE",
      textTitleColor: "#18181A",
    },
  },
  {
    title: "AngularJS",
    subtitle: "Front-end Framework",
    textContent:
      "Framework JavaScript da Google para criação de aplicativos web dinâmicos e interativos.",
    icon: <SiAngular size={65} color="#DD0031" />,
    link: "https://angular.io/",
    theme: {
      colorBackgroundIcon: "#DD0031",
      cardBackgroundColor: "#2A1010",
      cardBackroundTitleColor: "#5C1A1A",
      textTitleColor: "#ffffff",
    },
  },
];

interface HomeContentProps {
  user: GithubUser | null;
}

export default function HomeContent({ user }: HomeContentProps) {
  const featured = getProjectCatalog().filter((project) => project.banner);

  const createdAt = user?.created_at
    ? new Date(user.created_at).getFullYear()
    : 2019;
  const yearsExp = new Date().getFullYear() - createdAt;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="flex min-h-[88vh] animate-fade-up flex-col-reverse items-center gap-10 px-6 py-12 md:flex-row md:px-15 md:py-0">
        <div className="flex flex-1 flex-col justify-center max-md:items-center max-md:text-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[13px] font-medium text-accent">
            <span className="size-2 animate-pulse-dot rounded-full bg-accent" />
            Disponível para novas oportunidades
          </div>

          <span className="text-lg text-muted">Olá, eu sou</span>
          <h1 className="mb-3 bg-gradient-to-br from-white via-[#d6c9f8] to-primary-light bg-clip-text font-display text-[clamp(40px,5vw,72px)] font-bold leading-[1.15] text-transparent">
            Gustavo Quintans
          </h1>
          <h2 className="mb-5 text-[clamp(20px,2.5vw,30px)] font-normal tracking-wide text-primary-light">
            Front-end Developer
          </h2>

          <p className="mb-9 max-w-md leading-relaxed text-muted">
            Especialista em{" "}
            <strong className="text-white">JavaScript e TypeScript</strong>,
            construindo interfaces modernas, performáticas e acessíveis com
            React, Next.js e Node.js.
          </p>

          <div className="flex flex-wrap gap-4 max-md:justify-center">
            <Link href="/contato" className={cn(buttonVariants())}>
              <BsChat size={16} /> Entre em Contato
            </Link>
            <Link
              href="/projetos"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Ver Projetos
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <Image
            src="/homeContent.png"
            priority
            alt="Ilustração hero"
            width={489}
            height={404}
            className="h-auto w-full max-w-[340px] rounded-2xl drop-shadow-[0_0_60px_rgba(91,33,230,0.25)] md:max-w-[489px]"
          />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="flex w-full flex-col items-center justify-center gap-6 border-y border-white/5 bg-panel px-6 py-7 sm:flex-row sm:px-15">
        <div className="flex flex-1 flex-col items-center">
          <span className="text-4xl font-bold leading-none text-primary-light">
            +{yearsExp}
          </span>
          <span className="mt-1.5 text-center text-[13px] text-muted">
            Anos de Experiência
          </span>
        </div>
        <div className="h-px w-12 bg-white/10 sm:h-12 sm:w-px" />
        <div className="flex flex-1 flex-col items-center">
          <span className="text-4xl font-bold leading-none text-primary-light">
            4+
          </span>
          <span className="mt-1.5 text-center text-[13px] text-muted">
            Tecnologias Dominadas
          </span>
        </div>
        <div className="h-px w-12 bg-white/10 sm:h-12 sm:w-px" />
        <div className="flex flex-1 flex-col items-center">
          <span className="text-4xl font-bold leading-none text-primary-light">
            20+
          </span>
          <span className="mt-1.5 text-center text-[13px] text-muted">
            Projetos Realizados
          </span>
        </div>
      </section>

      {/* ── SOBRE / GITHUB ────────────────────────────────────────────── */}
      {user ? (
        <div className="w-full px-6 pt-12 md:px-15">
          <UserCard user={user} />
        </div>
      ) : null}

      {/* ── HABILIDADES ───────────────────────────────────────────────── */}
      <section className="w-full px-6 py-14 md:px-15 md:py-18">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary-light">
          Tecnologias
        </span>
        <h2 className="mb-3 font-display text-[clamp(26px,3vw,40px)] font-bold">
          Minhas Habilidades
        </h2>
        <p className="mb-12 max-w-xl leading-relaxed text-muted">
          Conheça as principais tecnologias que utilizo para criar soluções de
          front-end e back-end escaláveis e de alta qualidade.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>

      {/* ── PROJETOS ──────────────────────────────────────────────────── */}
      <section className="w-full px-6 pb-12 md:px-15">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary-light">
          Portfólio
        </span>
        <h2 className="mb-3 font-display text-[clamp(26px,3vw,40px)] font-bold">
          Projetos Selecionados
        </h2>
        <p className="max-w-xl leading-relaxed text-muted">
          Alguns dos projetos que desenvolvi, demonstrando criatividade,
          habilidades técnicas e experiência em desenvolvimento front-end.
        </p>
      </section>

      {featured.map((project) => (
        <ProjectShowcase
          key={project.name}
          title={project.name}
          description={project.description}
          urlImage={project.banner!}
          flags={project.tags}
          projectUrl={`/projetos/${project.name}`}
        />
      ))}

      {/* ── CONTATO ───────────────────────────────────────────────────── */}
      <section className="relative flex w-full flex-col items-center border-t border-white/5 bg-gradient-to-b from-transparent to-primary/10 px-6 py-18 text-center md:px-15 md:py-24">
        <div className="absolute left-1/2 top-0 h-0.5 w-[600px] max-w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary-light">
          Contato
        </span>
        <h2 className="mb-4 font-display text-[clamp(28px,3.5vw,44px)] font-bold">
          Vamos trabalhar juntos?
        </h2>
        <p className="mb-9 max-w-lg leading-relaxed text-muted">
          Estou disponível para projetos freelance, oportunidades de emprego e
          colaborações. Vamos transformar suas ideias em realidade!
        </p>
        <Link
          href="/contato"
          className={cn(buttonVariants({ size: "lg" }))}
        >
          <BsChat size={18} /> Entre em Contato
        </Link>
      </section>
    </>
  );
}
