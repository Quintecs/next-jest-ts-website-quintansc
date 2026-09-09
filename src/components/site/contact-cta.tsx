import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactCta() {
  return (
    <section className="site-container pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-2xl border border-primary-light/20 bg-primary/10 px-7 py-12 sm:p-12 lg:p-16">
        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div><span className="eyebrow">Seu próximo passo</span><h2 className="section-title max-w-2xl">Vamos tirar seu projeto<br className="hidden sm:block" /> do papel?</h2><p className="mt-5 max-w-lg leading-relaxed text-muted">Conte o que seu negócio precisa. Vamos entender o desafio e encontrar o melhor caminho para a solução.</p></div>
          <Link href="/contato" className={cn(buttonVariants(), "primary-cta shrink-0 self-start lg:self-auto")}>Conversar sobre meu projeto <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
