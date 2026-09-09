import Link from "@/components/site/tracked-link";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer data-testid="footerContainer" className="border-t border-edge">
      <div className="site-container py-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start"><div><Link href="/" aria-label="Quintec — página inicial" className="text-3xl font-semibold tracking-[-0.06em]">quintec<span className="text-accent">.</span></Link><p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">Tecnologia com propósito.<br />Soluções digitais por Gustavo Quintans.</p></div><nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-7 gap-y-2">{[{ href: "/#solucoes", label: "Soluções" }, { href: "/automacao-whatsapp", label: "Automação de WhatsApp" }, { href: "/projetos", label: "Projetos" }, { href: "/sobre", label: "Sobre" }, { href: "/contato", label: "Contato" }].map(({ href, label }) => <Link key={href} href={href} analyticsEvent={href === "/contato" ? { name: "contact_click", properties: { location: "footer", channel: "form" } } : undefined} className="text-link text-muted">{label}</Link>)}</nav><SocialLinks /></div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-edge pt-6 text-xs text-muted"><p>© {new Date().getFullYear()} Quintec — Todos os direitos reservados.</p></div>
      </div>
    </footer>
  );
}
