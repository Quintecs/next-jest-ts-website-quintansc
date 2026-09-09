"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createWhatsAppUrl, solutionOptions } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { TrackedAnchor } from "./tracked-link";

export default function ContactForm({ initialSolution = "" }: { initialSolution?: string }) {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const started = useRef(false);
  function handleChange() {
    setPreparedUrl(null);
    if (!started.current) {
      started.current = true;
      trackEvent({ name: "contact_form_start", properties: { form: "contact" } });
    }
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "");
    const url = createWhatsAppUrl({ name: value("nome"), email: value("email"), company: value("empresa"), solution: value("solucao"), message: value("mensagem") });
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    const solution = solutionOptions.find(option => option === value("solucao"));
    if (solution) trackEvent({ name: "contact_brief_prepared", properties: { solution } });
  }
  return (
    <section className="rounded-2xl border border-edge bg-panel p-6 sm:p-9">
      <span className="eyebrow">Um pouco sobre sua ideia</span>
      <h2 className="text-2xl font-semibold tracking-tight">Vamos começar pelo seu desafio.</h2>
      <p id="form-help" className="mb-8 mt-3 text-sm leading-relaxed text-muted">Preencha o briefing e continue pelo WhatsApp. A mensagem só será enviada quando você confirmar por lá.</p>
      <form onSubmit={handleSubmit} onChange={handleChange} aria-describedby="form-help" className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="nome" className="mb-2 block text-sm font-medium">Seu nome <span className="text-accent">*</span></label><Input id="nome" name="nome" placeholder="Como posso te chamar?" autoComplete="name" required maxLength={100} pattern=".*\S.*" className="field" /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-medium">E-mail <span className="text-accent">*</span></label><Input id="email" name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" required maxLength={200} className="field" /></div>
        </div>
        <div><label htmlFor="empresa" className="mb-2 block text-sm font-medium">Empresa <span className="font-normal text-muted">(opcional)</span></label><Input id="empresa" name="empresa" placeholder="Nome do seu negócio" autoComplete="organization" maxLength={150} className="field" /></div>
        <div><label htmlFor="solucao" className="mb-2 block text-sm font-medium">O que você precisa? <span className="text-accent">*</span></label><select id="solucao" name="solucao" defaultValue={initialSolution} required className="field"><option value="" disabled>Selecione uma opção</option>{solutionOptions.map(option => <option key={option}>{option}</option>)}</select></div>
        <div><label htmlFor="mensagem" className="mb-2 block text-sm font-medium">Conte sobre o projeto <span className="text-accent">*</span></label><textarea id="mensagem" name="mensagem" rows={4} required minLength={10} maxLength={2000} placeholder="Qual problema você quer resolver? Se já tiver uma ideia de prazo ou escopo, conte também." className="field resize-y" /></div>
        <Button type="submit" className="primary-cta h-auto w-full whitespace-normal py-3"><MessageCircle size={18} />Continuar no WhatsApp <ArrowUpRight size={17} /></Button>
        <p className="text-xs leading-relaxed text-muted">* Campos obrigatórios. Os dados são usados apenas para preparar sua mensagem; este formulário não armazena seu briefing.</p>
        {preparedUrl && <div role="status" className="rounded-lg border border-accent/25 bg-accent/5 p-4 text-sm"><p className="flex items-center gap-2 font-medium text-accent"><Check size={16} />Mensagem preparada.</p><p className="mt-2 leading-relaxed text-muted">Conclua o envio no WhatsApp. Se a nova aba não abriu, <TrackedAnchor href={preparedUrl} analyticsEvent={{ name: "contact_click", properties: { location: "contact_form_fallback", channel: "whatsapp" } }} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">abra sua mensagem aqui</TrackedAnchor>.</p></div>}
      </form>
    </section>
  );
}
