import { TrackedAnchor } from "@/components/site/tracked-link";
import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, Clock3, MessageCircle } from "lucide-react";
import ContactForm from "@/components/site/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { solutionOptions, WHATSAPP_URL } from "@/lib/contact";

export const metadata = pageMetadata(
  "/contato",
  "Vamos conversar",
  "Conte seu desafio para Gustavo Quintans. Converse sobre sites, sistemas web e integrações sob medida para seu negócio.",
);

type Props = { searchParams: Promise<{ solucao?: string | string[] }> };

export default async function ContatoPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialSolution = solutionOptions.find(option => option === params.solucao) ?? "";
  return (
    <div className="site-container section-space">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div><span className="eyebrow">Vamos conversar</span><h1 className="page-title">Uma boa solução começa com uma <span className="text-accent">boa conversa.</span></h1><p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">Você não precisa ter tudo definido. Conte o que seu negócio precisa e vamos entender juntos o próximo passo.</p>
          <div className="my-10 border-y border-edge py-7"><p className="mb-2 font-medium">Seu contato é direto comigo.</p><p className="text-sm leading-relaxed text-muted">Sou Gustavo Quintans, desenvolvedor por trás da Quintec. Vou conhecer seu contexto para avaliar como posso ajudar.</p></div>
          <h2 className="flex items-center gap-2 text-lg font-medium"><MessageCircle size={20} className="text-accent" />Prefere ir direto ao WhatsApp?</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-muted">Sem formulário. Comece a conversa da forma que for mais fácil para você.</p><TrackedAnchor href={WHATSAPP_URL} analyticsEvent={{ name: "contact_click", properties: { location: "contact_direct", channel: "whatsapp" } }} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "secondary-cta")}>Enviar mensagem <ArrowUpRight size={17} /></TrackedAnchor>
          <div className="mt-10 flex gap-3 text-sm text-muted"><Clock3 size={18} className="mt-1 shrink-0" /><div><p className="mb-2 text-foreground">Horário de atendimento</p><p>Segunda a sexta, das 8h às 19h</p><p className="mt-1">Sábado e domingo, das 10h às 16h</p><p className="mt-2 text-xs">Horário de Brasília</p></div></div>
        </div>
        <ContactForm initialSolution={initialSolution} />
      </div>
    </div>
  );
}
