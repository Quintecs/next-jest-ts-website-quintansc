"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Início" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header data-testid="headerContainer" className="sticky top-0 z-40 border-b border-edge/70 bg-background/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Quintec — página inicial" className="flex shrink-0 items-center gap-3">
          <Image data-testid="companyLogo" src="/logo.png" alt="" width={36} height={36} priority className="size-9 rounded-lg" />
          <span className="text-2xl font-semibold tracking-[-0.06em]">quintec<span className="text-accent">.</span></span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} data-testid="menuElements" aria-current={isActive(href) ? "page" : undefined} className={cn("text-link", isActive(href) ? "text-accent" : "text-muted")}>{label}</Link>
          ))}
        </nav>
        <Link href="/contato" className={cn(buttonVariants(), "primary-cta hidden md:inline-flex")}>
          Vamos conversar <ArrowUpRight size={17} />
        </Link>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger data-testid="btnMobileMenu" className="flex size-11 items-center justify-center rounded-lg border border-edge md:hidden" aria-label="Abrir menu"><Menu size={22} /></SheetTrigger>
          <SheetContent data-testid="drawer" aria-describedby={undefined} className="w-[min(90vw,360px)] gap-3 pt-14 [&>button]:flex [&>button]:size-11 [&>button]:items-center [&>button]:justify-center">
            <SheetTitle className="mb-6 text-2xl font-semibold tracking-tight">Explore a Quintec<span className="text-accent">.</span></SheetTitle>
            {[...links, { href: "/contato", label: "Vamos conversar" }].map(({ href, label }) => (
              <SheetClose key={href} asChild><Link href={href} data-testid="linkElements" aria-current={isActive(href) ? "page" : undefined} className={cn("flex min-h-12 items-center justify-between rounded-lg px-4 text-base hover:bg-white/5", isActive(href) ? "bg-white/5 text-accent" : "text-foreground")}>{label}<ArrowUpRight size={18} /></Link></SheetClose>
            ))}
            <p className="mt-auto text-sm leading-relaxed text-muted">Tecnologia com propósito.<br />Desenvolvimento por Gustavo Quintans.</p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
