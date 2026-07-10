"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, LayoutGrid, Info, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
];

const mobileLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/projetos", label: "Projetos", icon: LayoutGrid },
  { href: "/sobre", label: "Sobre", icon: Info },
  { href: "/contato", label: "Contato", icon: MessageCircle },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      data-testid="headerContainer"
      className="sticky top-0 z-40 border-b border-edge bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full items-center justify-between px-6">
        <Link href="/" className="no-underline">
          <div className="flex h-21 items-center gap-3.5">
            <Image
              data-testid="companyLogo"
              src="/logo.png"
              alt="Logo da Quintec"
              width={48}
              height={48}
              priority
              className="size-12 rounded-xl ring-1 ring-primary/40 transition-shadow hover:shadow-[0_0_18px_rgba(91,33,230,0.45)]"
            />
            <div className="flex flex-col justify-center">
              <span className="font-display text-2xl font-bold tracking-[2px] text-foreground">
                Quintec
              </span>
              <span className="text-[11px] uppercase tracking-[1.5px] text-primary-light">
                Tecnologia &amp; Soluções Digitais
              </span>
            </div>
          </div>
        </Link>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            data-testid="btnMobileMenu"
            className="self-center sm:hidden"
          >
            <Menu className="size-8 text-foreground" />
            <span className="sr-only">Abrir menu</span>
          </SheetTrigger>
          <SheetContent data-testid="drawer">
            <SheetTitle className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
              Menu
            </SheetTitle>
            {mobileLinks.map(({ href, label, icon: Icon }) => (
              <SheetClose key={href} asChild>
                <Link
                  href={href}
                  data-testid="linkElements"
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-foreground transition-colors hover:bg-white/5"
                >
                  <Icon className="size-5 text-primary-light" />
                  {label}
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>

        <nav className="hidden items-center gap-2 sm:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-testid="menuElements"
              className={cn(
                "flex h-21 items-center border-b-2 px-6 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary-light",
                pathname === href
                  ? "border-primary text-primary-light"
                  : "border-transparent text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className={cn(buttonVariants(), "ml-8 min-w-45 tracking-wider")}
          >
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
