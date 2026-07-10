import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      data-testid="footerContainer"
      className="border-t border-edge bg-panel"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo da Quintec"
              width={40}
              height={40}
              className="size-10 rounded-lg ring-1 ring-primary/40"
            />
            <span className="font-display text-xl font-bold tracking-[2px]">
              Quintec
            </span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-muted transition-colors hover:text-foreground">
              Início
            </Link>
            <Link href="/projetos" className="text-muted transition-colors hover:text-foreground">
              Projetos
            </Link>
            <Link href="/sobre" className="text-muted transition-colors hover:text-foreground">
              Sobre
            </Link>
            <Link href="/contato" className="text-muted transition-colors hover:text-foreground">
              Contato
            </Link>
          </nav>
          <SocialLinks />
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-dark">
          Explore nosso portfólio diversificado, onde cada projeto é uma
          expressão única de criatividade e expertise. Nossa dedicação ao
          design excepcional e à excelência em execução é evidente em cada
          detalhe.
        </p>

        <p className="text-xs text-muted">
          © {year} Quintec — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
