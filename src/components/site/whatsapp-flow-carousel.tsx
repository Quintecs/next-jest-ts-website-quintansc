"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCheck, ClipboardList, GitBranch, MessageCircle, MessagesSquare, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    label: "Boas-vindas",
    icon: MessageCircle,
    title: "O primeiro “oi” já encontra uma resposta.",
    description: "Seu cliente recebe uma mensagem de boas-vindas e entende como começar, mesmo quando você está ocupado com outras tarefas.",
    details: ["Mensagem com o jeito do seu negócio", "Orientação desde o primeiro contato", "Informação sobre o horário de atendimento"],
    messages: [
      { sender: "Cliente", text: "Olá! Gostaria de saber mais sobre os serviços de vocês." },
      { sender: "Automação", text: "Olá! Que bom ter você por aqui. Vou te ajudar a encontrar o que precisa. Nossa equipe atende de segunda a sexta, das 9h às 18h." },
    ],
    result: "Seu cliente sabe que chegou ao lugar certo e como o atendimento funciona.",
  },
  {
    label: "Entender a intenção",
    icon: GitBranch,
    title: "Cada conversa segue pelo caminho certo.",
    description: "A automação identifica o motivo do contato. Quem quer um orçamento segue um caminho; quem precisa de suporte ou de um agendamento segue outro.",
    details: ["Opções simples, em linguagem do dia a dia", "Caminhos definidos para cada necessidade", "Possibilidade de pedir atendimento humano"],
    messages: [
      { sender: "Automação", text: "Como podemos ajudar hoje? Você pode pedir um orçamento, consultar um agendamento ou falar com nossa equipe." },
      { sender: "Cliente", text: "Quero um orçamento para uma instalação." },
      { sender: "Automação", text: "Certo! Vamos entender o que você precisa instalar." },
    ],
    result: "O assunto fica claro antes de você ou sua equipe entrarem na conversa.",
  },
  {
    label: "Responder dúvidas",
    icon: MessagesSquare,
    title: "As perguntas de sempre deixam de tomar seu tempo.",
    description: "Respostas sobre horários, serviços e como contratar são preparadas com as informações do seu negócio. Dúvidas específicas seguem para uma pessoa.",
    details: ["Respostas alinhadas com o que você oferece", "Informações consistentes para seus clientes", "Encaminhamento quando é preciso avaliar o caso"],
    messages: [
      { sender: "Cliente", text: "Vocês fazem instalação em escritórios? Como funciona o orçamento?" },
      { sender: "Automação", text: "Sim, atendemos escritórios. Para preparar o orçamento, precisamos entender o tipo de instalação e o local. O valor é confirmado pela equipe após essa avaliação." },
    ],
    result: "O cliente entende o processo e você evita repetir a mesma explicação a cada contato.",
  },
  {
    label: "Reunir os detalhes",
    icon: ClipboardList,
    title: "As informações certas, antes de continuar.",
    description: "O fluxo faz as perguntas que você já faria no atendimento. Assim, o pedido chega com os detalhes iniciais para avaliar o próximo passo.",
    details: ["Perguntas adaptadas ao seu serviço ou produto", "Coleta da necessidade, localização e preferência", "Menos mensagens para entender o pedido"],
    messages: [
      { sender: "Automação", text: "O que você precisa instalar, em qual bairro e para quando gostaria do serviço?" },
      { sender: "Cliente", text: "Duas luminárias no meu escritório, no Centro. Se possível, na próxima semana." },
      { sender: "Automação", text: "Anotado: duas luminárias, escritório no Centro, preferência pela próxima semana." },
    ],
    result: "Você já tem o contexto inicial para conversar sobre preço, prazo e disponibilidade.",
  },
  {
    label: "Passar para uma pessoa",
    icon: UserRoundCheck,
    title: "Quando precisa de você, a conversa continua.",
    description: "A automação orienta o cliente e encaminha a solicitação para atendimento humano. Sua equipe avalia os detalhes e confirma as condições.",
    details: ["Passagem para a pessoa ou área responsável", "Expectativa alinhada ao horário da equipe", "Preço e disponibilidade confirmados por quem atende"],
    messages: [
      { sender: "Cliente", text: "Pode me passar o valor e confirmar se conseguem na terça?" },
      { sender: "Automação", text: "Vou encaminhar seu pedido para a equipe verificar o valor e a agenda. O retorno acontece durante nosso horário de atendimento." },
      { sender: "Atendente", text: "Olá! Vi seu pedido das duas luminárias no Centro. Vou conferir os detalhes com você para preparar o orçamento." },
    ],
    result: "A pessoa que assume sabe por que o cliente chamou e pode dar sequência ao atendimento.",
  },
  {
    label: "O que chega para você",
    icon: ClipboardList,
    title: "Um pedido organizado para você agir.",
    description: "Ao final desse exemplo, você sabe o que o cliente procura, quais detalhes já informou e o que ainda precisa confirmar.",
    details: ["Necessidade: instalação de duas luminárias", "Local e preferência: Centro, próxima semana", "Próximo passo: avaliar o orçamento e a agenda"],
    messages: [
      { sender: "Resumo do exemplo", text: "Pedido de orçamento\nInstalação: 2 luminárias\nLocal: escritório no Centro\nPreferência: próxima semana, terça-feira" },
      { sender: "Próximo passo", text: "Você ou sua equipe avaliam as condições, confirmam a disponibilidade e continuam a conversa com o cliente." },
    ],
    result: "Esse é um exemplo. O seu fluxo é desenhado a partir das perguntas e tarefas da sua rotina.",
  },
];

export default function WhatsAppFlowCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const slide = slides[current];
  const Icon = slide.icon;

  function move(direction: number) {
    setCurrent(index => Math.max(0, Math.min(slides.length - 1, index + direction)));
  }

  return (
    <section
      aria-label="Exemplo de fluxo de atendimento"
      aria-roledescription="carrossel"
      tabIndex={0}
      onKeyDown={event => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        if (event.key === "Home") setCurrent(0);
        else if (event.key === "End") setCurrent(slides.length - 1);
        else move(event.key === "ArrowRight" ? 1 : -1);
      }}
      className="mt-10 rounded-3xl border border-edge bg-panel p-4 sm:p-7 lg:p-8"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div><h2 className="text-lg font-semibold tracking-tight">Do primeiro “oi” ao atendimento com contexto.</h2><p className="mt-1 text-sm text-muted">Acompanhe uma conversa em 6 etapas.</p></div>
        <span className="rounded-full border border-edge bg-white px-3 py-1.5 text-xs text-muted">Exemplo ilustrativo</span>
      </div>

      <div
        id="fluxo-carrossel-slide"
        aria-live="polite"
        aria-atomic="true"
        className="touch-pan-y"
        onTouchStart={event => {
          touchStart.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={event => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || event.changedTouches.length !== 1) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
        }}
      >
        <div key={current} role="group" aria-roledescription="slide" aria-label={`${current + 1} de ${slides.length}: ${slide.label}`} className="grid animate-fade-up gap-5 lg:min-h-[450px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col rounded-2xl bg-accent p-6 text-white sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-white/15"><Icon size={23} aria-hidden="true" /></span><span className="text-sm font-medium text-white/90">{String(current + 1).padStart(2, "0")} / {slide.label}</span></div>
            <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{slide.title}</h3>
            <p className="mb-7 mt-4 text-base leading-relaxed text-white/90">{slide.description}</p>
            <ul className="mt-auto space-y-3 border-t border-white/20 pt-5">{slide.details.map(detail => <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed"><Check size={17} className="mt-0.5 shrink-0 text-[#ffda47]" aria-hidden="true" />{detail}</li>)}</ul>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-edge bg-white">
            <div className="flex items-center gap-3 border-b border-edge px-5 py-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fff5c9] text-accent"><MessageCircle size={21} aria-hidden="true" /></span><div><p className="font-semibold">Seu negócio no WhatsApp</p><p className="text-xs text-muted">{current === slides.length - 1 ? "Resumo do atendimento ilustrativo" : "Exemplo: pedido de orçamento para um serviço"}</p></div></div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-5 sm:p-6">{slide.messages.map(({ sender, text }, index) => <div key={index} className={cn("max-w-[95%] rounded-xl p-4", sender === "Cliente" ? "self-start rounded-tl-sm bg-panel" : "self-end rounded-tr-sm border border-accent/15 bg-accent/5")}><p className="mb-1.5 text-xs font-semibold text-accent">{sender}</p><p className="whitespace-pre-line text-base leading-relaxed">{text}</p>{sender !== "Cliente" && <CheckCheck size={15} className="ml-auto mt-2 text-accent" aria-hidden="true" />}</div>)}</div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-[#f0d466] bg-[#fff5c9] p-4 lg:col-span-2"><Check size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><p className="text-sm leading-relaxed"><strong>Na sua rotina: </strong>{slide.result}</p></div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center" role="group" aria-label="Escolher etapa do fluxo">{slides.map(({ label }, index) => <Button key={label} variant="ghost" size="icon" aria-label={`Ir para etapa ${index + 1}: ${label}`} aria-current={current === index ? "step" : undefined} aria-controls="fluxo-carrossel-slide" onClick={() => setCurrent(index)} className="size-11 text-foreground hover:bg-white"><span className={cn("flex size-8 items-center justify-center rounded-full text-sm font-semibold", current === index ? "bg-accent text-white" : "border border-edge bg-white text-muted")}>{index + 1}</span></Button>)}</div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Etapa anterior" aria-controls="fluxo-carrossel-slide" disabled={current === 0} onClick={() => move(-1)} className="border-edge bg-white text-accent hover:border-accent hover:bg-white disabled:opacity-35"><ArrowLeft size={19} aria-hidden="true" /></Button>
          <span className="min-w-14 text-center text-sm text-muted">{current + 1} de {slides.length}</span>
          <Button variant="outline" size="icon" aria-label="Próxima etapa" aria-controls="fluxo-carrossel-slide" disabled={current === slides.length - 1} onClick={() => move(1)} className="border-edge bg-white text-accent hover:border-accent hover:bg-white disabled:opacity-35"><ArrowRight size={19} aria-hidden="true" /></Button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">Use as setas ou deslize para os lados no celular. Mensagens e encaminhamentos são definidos conforme o escopo do seu projeto.</p>
    </section>
  );
}
