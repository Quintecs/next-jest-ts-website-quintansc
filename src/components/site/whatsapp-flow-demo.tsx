"use client";

import { trackEvent } from "@/lib/analytics";
import { TrackedAnchor } from "./tracked-link";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, CheckCheck, MessageCircle, UserRound } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const examples = [
  {
    segment: "Agendamentos",
    title: "Menos troca de mensagens para combinar um horário.",
    customer: "Oi! Queria agendar um atendimento para amanhã.",
    reply: "Olá! Qual serviço você procura e qual seria o melhor período para você?",
    answer: "Uma consultoria, no período da tarde.",
    handoff: "Perfeito! Vou encaminhar sua preferência para verificarmos a agenda e confirmarmos com você.",
    outcome: "Você recebe o serviço e o período desejados para confirmar a disponibilidade. Um fluxo para quem trabalha com horários marcados.",
    steps: ["Identifica o serviço", "Coleta as preferências", "Encaminha para confirmação"],
  },
  {
    segment: "Pedidos e vendas",
    title: "Entenda o que o cliente quer antes de assumir a conversa.",
    customer: "Olá! Quero fazer um pedido. Vocês entregam?",
    reply: "Olá! Me conte qual produto você procura e o endereço para verificarmos a entrega.",
    answer: "Quero o kit presente. Meu endereço é Rua das Flores, 120.",
    handoff: "Obrigada! Vou encaminhar seu pedido para conferir a disponibilidade e as opções de entrega com você.",
    outcome: "O atendimento já começa com o produto e os dados de entrega. Você pode conferir as condições e orientar a compra com mais contexto.",
    steps: ["Entende o interesse", "Reúne os dados do pedido", "Encaminha para continuar a venda"],
  },
  {
    segment: "Orçamentos e serviços",
    title: "Um pedido de orçamento com as informações certas.",
    customer: "Olá! Gostaria de um orçamento.",
    reply: "Claro! Me conte qual serviço você precisa e se tem uma data em mente.",
    answer: "Preciso de uma instalação no meu escritório na próxima semana.",
    handoff: "Entendido! Vou encaminhar essas informações para avaliarmos os detalhes e conversarmos sobre seu orçamento.",
    outcome: "Você entende a necessidade e o prazo antes de continuar. Mais clareza para quem presta serviços ou recebe pedidos sob medida.",
    steps: ["Identifica a necessidade", "Pergunta os detalhes iniciais", "Prepara a conversa sobre o orçamento"],
  },
];

export default function WhatsAppFlowDemo() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  const contactUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(`Olá, Gustavo! Vi o exemplo de ${example.segment.toLowerCase()} na página da Quintec e quero conversar sobre automação de WhatsApp para meu negócio.`)}`;

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-3" role="group" aria-label="Escolha uma necessidade do seu negócio">
        {examples.map(({ segment }, index) => (
          <Button key={segment} variant="outline" aria-pressed={selected === index} aria-controls="exemplo-fluxo" onClick={() => { if (index !== selected) { setSelected(index); trackEvent({ name: "whatsapp_example_select", properties: { segment } }); } }} className={cn("h-auto min-h-12 whitespace-normal rounded-full px-5 py-3 text-sm hover:border-accent", selected === index ? "border-accent bg-accent text-white hover:bg-primary-dark" : "border-edge bg-white text-muted hover:bg-panel")}>
            {segment}
          </Button>
        ))}
      </div>
      <div id="exemplo-fluxo" className="grid gap-10 lg:grid-cols-2 lg:gap-16" aria-live="polite" aria-atomic="true">
        <div className="flex flex-col items-start py-2">
          <h3 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">{example.title}</h3>
          <ol className="my-8 space-y-4">
            {example.steps.map((step, index) => <li key={step} className="flex items-center gap-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-edge font-mono text-sm text-accent">0{index + 1}</span><span>{step}</span></li>)}
          </ol>
          <p className="max-w-lg leading-relaxed text-muted">{example.outcome}</p>
          <TrackedAnchor href={contactUrl} analyticsEvent={{ name: "contact_click", properties: { location: "automation_example", channel: "whatsapp" } }} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "primary-cta mt-8 h-auto min-h-14 whitespace-normal py-3")}>Quero um fluxo para meu negócio <ArrowUpRight size={18} aria-hidden="true" /></TrackedAnchor>
        </div>
        <div className="overflow-hidden rounded-2xl border border-edge bg-white">
          <div className="flex items-center gap-3 border-b border-edge px-5 py-4 sm:px-7">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><MessageCircle size={21} aria-hidden="true" /></span>
            <div><p className="font-medium">Seu negócio</p><p className="text-sm text-muted">Exemplo ilustrativo de atendimento</p></div>
          </div>
          <div className="space-y-4 p-5 sm:p-7">
            {[example.customer, example.reply, example.answer, example.handoff].map((message, index) => (
              <div key={`${selected}-${index}`} className={cn("w-fit max-w-[92%] rounded-xl p-4", index % 2 ? "ml-auto rounded-tr-sm border border-accent/15 bg-accent/10" : "rounded-tl-sm border border-edge bg-background")}>
                <p className="mb-1.5 text-xs font-medium text-muted">{index % 2 ? "Atendimento automático" : "Cliente"}</p>
                <p className="text-base leading-relaxed">{message}</p>
                {index % 2 === 1 && <CheckCheck size={16} className="ml-auto mt-2 text-accent" aria-hidden="true" />}
              </div>
            ))}
            <div className="flex items-center justify-center gap-2 pt-2 text-sm text-muted"><ArrowDown size={15} aria-hidden="true" /><UserRound size={15} aria-hidden="true" /> Você ou sua equipe continuam daqui</div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted">Os fluxos são personalizados. Consultas de agenda, estoque e pedidos dependem das integrações e do escopo definido para o seu negócio.</p>
    </div>
  );
}
