import Head from "next/head";
import {
  HeroSection, HeroContent, AvailableBadge, HeroGreeting,
  HeroName, HeroRole, HeroDescription, HeroCTAs,
  PrimaryButton, SecondaryButton, HeroImageWrapper, ScrollHint,
  StatsBar, StatItem, StatNumber, StatLabel, StatDivider,
  SectionWrapper, SectionTag, SectionTitle, SectionSubtitle,
  ContactSection, ContactGlow,
  AboutWrapper,
} from "../../styles/home";
import { Grid, Skeleton } from "@mui/material";
import { HiOutlineArrowDown, FaReact, FaNodeJs, SiNextdotjs, BsChat, SiAngularjs } from "../../src/utils/icons";
import { useState } from 'react';
import UserComponent from "@/components/UserComponents";
import CardLanguage from "@/components/CardLanguages";
import { getRepositories, userRoute } from "../../src/api";
import { HomeContent } from "../../src/images";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Project = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" style={{ height: "calc(375px*2)", width: "100%" }} />,
});

const Home = ({ gitUser, repositories }: any) => {
  const [user] = useState(gitUser ?? {
    created_at: '',
    avatar_url: '',
    name: '',
    company: '',
    bio: '',
    location: '',
  });

  const [repos] = useState(repositories);

  function isRepoCorrect(id: number) {
    const defaultRepo = { name: '', description: '' };
    if (!repos || !Array.isArray(repos)) return defaultRepo;
    return repos.find((e: any) => e.id === id) ?? defaultRepo;
  }

  const repositorys = {
    repo1: isRepoCorrect(338077631),
    repo2: isRepoCorrect(359374320),
    repo3: isRepoCorrect(742617230),
  };

  const createdAt = user.created_at ? new Date(user.created_at).getFullYear() : 2019;
  const yearsExp = new Date().getFullYear() - createdAt;

  return (
    <>
      <Head>
        <title>Gustavo Quintans — Front-end Developer</title>
        <link rel="icon" href="/desenvolvedor1.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfólio de Gustavo Quintans — Desenvolvedor Front-end especialista em React, Next.js e TypeScript." />
        <meta name="keywords" content="Desenvolvedor, Programador, Frontend, Front-end, JS, TypeScript, React, Next.js, Portfólio" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection container>
        <HeroContent item xs={12} md={6}>
          <AvailableBadge>
            <span className="dot" />
            Disponível para novas oportunidades
          </AvailableBadge>

          <HeroGreeting>Olá, eu sou</HeroGreeting>
          <HeroName>Gustavo Quintans</HeroName>
          <HeroRole>Front-end Developer</HeroRole>

          <HeroDescription>
            Especialista em <strong style={{ color: '#ffffff' }}>JavaScript e TypeScript</strong>, construindo
            interfaces modernas, performáticas e acessíveis com React, Next.js e Node.js.
          </HeroDescription>

          <HeroCTAs>
            <PrimaryButton variant="contained">
              <Link href="/contato" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 8 }}>
                <BsChat size={16} /> Entre em Contato
              </Link>
            </PrimaryButton>
            <SecondaryButton variant="outlined">
              <Link href="/projetos" style={{ color: 'inherit' }}>
                Ver Projetos
              </Link>
            </SecondaryButton>
          </HeroCTAs>
        </HeroContent>

        <HeroImageWrapper item xs={12} md={6}>
          {HomeContent ? (
            <Image
              src={HomeContent}
              loading="eager"
              fetchPriority="high"
              alt="Ilustração hero"
              width={489}
              height={404}
            />
          ) : (
            <Skeleton variant="rectangular" width={489} height={404} />
          )}
        </HeroImageWrapper>
      </HeroSection>

      {/* Scroll hint */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <ScrollHint variant="text" endIcon={<HiOutlineArrowDown color="#10BB83" />}>
          Veja mais
        </ScrollHint>
      </div>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <StatsBar>
        <StatItem>
          <StatNumber>+{yearsExp}</StatNumber>
          <StatLabel>Anos de Experiência</StatLabel>
        </StatItem>
        <StatDivider />
        <StatItem>
          <StatNumber>4+</StatNumber>
          <StatLabel>Tecnologias Dominadas</StatLabel>
        </StatItem>
        <StatDivider />
        <StatItem>
          <StatNumber>20+</StatNumber>
          <StatLabel>Projetos Realizados</StatLabel>
        </StatItem>
      </StatsBar>

      {/* ── SOBRE / GITHUB CARD ──────────────────────────────────────── */}
      <AboutWrapper>
        <UserComponent user={user} />
      </AboutWrapper>

      {/* ── HABILIDADES ──────────────────────────────────────────────── */}
      <SectionWrapper>
        <SectionTag>Tecnologias</SectionTag>
        <SectionTitle>Minhas Habilidades</SectionTitle>
        <SectionSubtitle>
          Conheça as principais tecnologias que utilizo para criar soluções de front-end e back-end
          escaláveis e de alta qualidade.
        </SectionSubtitle>

        <Grid container spacing={3}>
          <CardLanguage
            theme={{ colorBackgroundIcon: '#10BB83', cardBackgroundColor: '#162825', cardBackroundTitleColor: '#3E6E66' }}
            infos={{
              title: 'NodeJS',
              subtitle: 'Back-end Framework',
              subscription: 'Node Documentation',
              textContent: 'Node.js® é um ambiente de execução de JavaScript de código aberto e multiplataforma.',
            }}
            icon={<FaNodeJs size={65} color="#3c873a" />}
            link={{ link: 'https://nodejs.org/en/' }}
            key="node"
          />
          <CardLanguage
            theme={{ colorBackgroundIcon: '#17A2DE', cardBackgroundColor: '#1A3846', cardBackroundTitleColor: '#285676' }}
            infos={{
              title: 'ReactJs',
              subtitle: 'Front-end Framework',
              subscription: 'React Documentation',
              textContent: 'A biblioteca para web e interfaces de usuário nativas baseada em JavaScript e TypeScript.',
            }}
            icon={<FaReact size={65} color="#61DBFB" />}
            link={{ link: 'https://pt-br.react.dev' }}
            key="react"
          />
          <CardLanguage
            theme={{ colorBackgroundIcon: '#F4F4F4', cardBackgroundColor: '#1D1D1F', cardBackroundTitleColor: '#DAD9DE', textTitleColor: '#18181A' }}
            infos={{
              title: 'NextJs',
              subtitle: 'Front-end Framework',
              subscription: 'Next Documentation',
              textContent: 'Next.js é um framework React para criar aplicativos web full-stack com recursos e otimizações extras.',
            }}
            icon={<SiNextdotjs size={65} color="black" />}
            link={{ link: 'https://nextjs.org/' }}
            key="next"
          />
          <CardLanguage
            theme={{ colorBackgroundIcon: '#DD0031', cardBackgroundColor: '#2A1010', cardBackroundTitleColor: '#5C1A1A', textTitleColor: '#ffffff' }}
            infos={{
              title: 'AngularJS',
              subtitle: 'Front-end Framework',
              subscription: 'Angular Documentation',
              textContent: 'Framework JavaScript da Google para criação de aplicativos web dinâmicos e interativos.',
            }}
            icon={<SiAngularjs size={65} color="#DD0031" />}
            link={{ link: 'https://angular.io/' }}
            key="angular"
          />
        </Grid>
      </SectionWrapper>

      {/* ── PROJETOS ─────────────────────────────────────────────────── */}
      <SectionWrapper style={{ paddingTop: 0 }}>
        <SectionTag>Portfólio</SectionTag>
        <SectionTitle>Projetos Selecionados</SectionTitle>
        <SectionSubtitle>
          Alguns dos projetos que desenvolvi, demonstrando criatividade, habilidades técnicas e
          experiência em desenvolvimento front-end.
        </SectionSubtitle>
      </SectionWrapper>

      <Project
        title={repositorys.repo1.name}
        description={repositorys.repo1.description}
        urlImage="/1project.png"
        flags={['Frontend', 'API', 'ReactJS']}
        projectUrl={`/projetos/${repositorys.repo1.name}`}
      />
      <Project
        title={repositorys.repo2.name}
        description={repositorys.repo2.description}
        urlImage="/project2.png"
        flags={['Backend', 'API', 'Node']}
        projectUrl={`/projetos/${repositorys.repo2.name}`}
      />

      {/* ── CONTATO ──────────────────────────────────────────────────── */}
      <ContactSection>
        <ContactGlow />
        <SectionTag>Contato</SectionTag>
        <h2>Vamos trabalhar juntos?</h2>
        <p>
          Estou disponível para projetos freelance, oportunidades de emprego e colaborações.
          Vamos transformar suas ideias em realidade!
        </p>
        <PrimaryButton variant="contained" style={{ fontSize: 15, padding: '14px 36px' }}>
          <Link href="/contato" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: 10 }}>
            <BsChat size={18} /> Entre em Contato
          </Link>
        </PrimaryButton>
      </ContactSection>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const gitUser = await userRoute();
  const repositories = await getRepositories();
  return {
    props: {
      gitUser: gitUser ?? null,
      repositories: repositories ?? null,
    },
    revalidate: 100000,
  };
}
