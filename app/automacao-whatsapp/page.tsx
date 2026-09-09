import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, Check, Clock3, MessageCircle, MessagesSquare, Plus, Repeat2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import WhatsAppFlowCarousel from "@/components/site/whatsapp-flow-carousel";
import WhatsAppFlowDemo from "@/components/site/whatsapp-flow-demo";
import { AUTOMATION_WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Automação de WhatsApp para o seu negócio",
  description: "Organize o WhatsApp do seu negócio com fluxos de atendimento sob medida. Automatize perguntas frequentes, encaminhe pedidos e conecte o cliente à sua equipe. Converse com a Quintec.",
  keywords: ["automação de WhatsApp", "WhatsApp Business", "atendimento para empreendedores", "fluxos de atendimento", "Quintec"],
};

const problems = [
  { icon: Clock3, title: "O cliente chama. A resposta demora.", text: "Entre entregas, reuniões e tarefas do dia a dia, as conversas se acumulam e quem chamou fica sem saber o próximo passo.", solution: "Recepção automática e orientação desde a primeira mensagem." },
  { icon: Repeat2, title: "As mesmas perguntas, todos os dias.", text: "Horários, endereço, serviços e como pedir. Sua equipe repete as respostas quando poderia cuidar de quem precisa de atenção.", solution: "Respostas padronizadas para as dúvidas mais frequentes." },
  { icon: MessagesSquare, title: "Tudo se mistura nas conversas.", text: "Pedidos, dúvidas e agendamentos chegam no mesmo lugar. O atendente precisa descobrir do zero o que cada pessoa quer.", solution: "Triagem por assunto e coleta das informações essenciais." },
];

const questions = [
  { question: "Já uso o WhatsApp Business. Isso é para mim?", answer: "Sim. A conversa começa pelo que você já usa e pelas dificuldades do atendimento. Avaliamos quais ajustes fazem sentido e quando é necessário conectar uma plataforma ou integração para construir os fluxos." },
  { question: "Vou precisar mudar meu número?", answer: "Isso é avaliado antes da implantação. O uso do número atual depende da configuração da sua conta e da solução escolhida. Qualquer necessidade de mudança é alinhada com você antes de começar." },
  { question: "O cliente pode falar com uma pessoa?", answer: "Sim. O fluxo é planejado com um caminho para atendimento humano. A automação organiza o início da conversa e as dúvidas recorrentes; sua equipe assume quando o cliente precisa de atenção específica, respeitando o horário de atendimento." },
  { question: "Funciona para o meu tipo de negócio?", answer: "Se você vende produtos, presta serviços ou trabalha com agendamentos pelo WhatsApp, podemos desenhar um fluxo para sua rotina. Seja trabalhando por conta própria ou com uma equipe. Primeiro entendemos sua rotina, o volume de conversas e o que você quer melhorar para avaliar a solução adequada." },
  { question: "Quanto custa e quanto tempo leva?", answer: "O valor e o prazo dependem da quantidade de fluxos, das integrações e da estrutura atual. Depois de entender seu atendimento, você recebe uma proposta com escopo, etapas e custos. Eventuais cobranças de plataformas e mensagens são apresentadas separadamente." },
  { question: "Preciso entender de tecnologia?", answer: "Não. Você explica como seu negócio atende hoje e quais problemas quer resolver. A Quintec cuida da construção dos fluxos e orienta sua equipe para usar a solução. O acompanhamento após a entrega é combinado na proposta." },
];

function WhatsAppCta({ children, className }: { children: React.ReactNode; className?: string }) {
  return <a href={AUTOMATION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "primary-cta h-auto min-h-14 whitespace-normal py-4 text-base", className)}><MessageCircle size={20} aria-hidden="true" />{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

export default function WhatsAppAutomationPage() {
  return (
    <div className="whatsapp-landing w-full bg-background text-foreground">
      <section className="site-container pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fff5c9] px-4 py-2 text-sm font-medium text-foreground"><MessageCircle size={17} className="text-accent" aria-hidden="true" /> Para quem empreende e atende pelo WhatsApp</p>
          <h1 className="text-[clamp(2.35rem,5.2vw,4.5rem)] font-semibold leading-[1.09] tracking-[-0.055em]">Seu negócio pede atenção.<br /><span className="text-accent">Seu WhatsApp, <span className="bg-[linear-gradient(transparent_65%,#ffda47_65%,#ffda47_94%,transparent_94%)]">organização.</span></span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">Você cuida de vender, entregar e fazer acontecer. A automação recebe seus clientes, organiza as conversas e ajuda o atendimento a seguir — com você ou com sua equipe.</p>
        </div>

        <WhatsAppFlowCarousel />

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <WhatsAppCta className="w-full sm:w-auto">Quero organizar meu WhatsApp</WhatsAppCta>
          <p className="text-sm text-muted">Converse com Gustavo, da Quintec, sobre o que seu negócio precisa.</p>
        </div>
      </section>

      <div className="border-y border-edge bg-white"><div className="site-container flex flex-wrap gap-x-10 gap-y-4 py-6">{["Para quem trabalha por conta própria", "Para quem já tem uma equipe", "Para quem quer atender melhor"].map(item => <span key={item} className="flex items-center gap-2 text-sm text-muted"><Check size={17} className="text-accent" aria-hidden="true" />{item}</span>)}</div></div>

      <section className="site-container section-space">
        <p className="eyebrow">01 / A rotina de quem empreende</p>
        <h2 className="section-title max-w-3xl">Você cuida do negócio.<br />Mas quem organiza as mensagens?</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{problems.map(({ icon: Icon, title, text, solution }) => <article key={title} className="flex flex-col rounded-2xl border border-edge bg-white p-7"><Icon size={25} strokeWidth={1.5} className="mb-7 box-content rounded-xl bg-[#fff5c9] p-3 text-accent" aria-hidden="true" /><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mb-7 mt-4 leading-relaxed text-muted">{text}</p><p className="mt-auto flex gap-3 border-t border-edge pt-5 text-sm leading-relaxed"><ArrowRight size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{solution}</p></article>)}</div>
      </section>

      <section id="fluxos" className="border-y border-edge bg-panel/60"><div className="site-container section-space"><p className="eyebrow">02 / Veja na prática</p><h2 className="section-title">O fluxo certo começa<br />pela sua rotina.</h2><p className="mb-9 mt-5 max-w-2xl leading-relaxed text-muted">Vende produtos? Presta serviços? Trabalha com horários marcados? Escolha o que faz parte do seu dia e veja um exemplo de atendimento.</p><WhatsAppFlowDemo /></div></section>

      <section id="como-funciona" className="site-container section-space">
        <p className="eyebrow">03 / Do seu atendimento ao seu fluxo</p>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="section-title max-w-2xl">Sob medida para o seu negócio.<br />Com clareza em cada etapa.</h2><p className="max-w-sm leading-relaxed text-muted">Você traz a experiência do dia a dia. Eu transformo essa rotina em um atendimento mais organizado.</p></div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">{[
          { title: "Entendemos o seu atendimento", text: "Mapeamos as dúvidas recorrentes, os horários, a equipe e os pontos em que as conversas travam." },
          { title: "Desenhamos e construímos", text: "Você recebe uma proposta com escopo e investimento. Com tudo alinhado, construímos as mensagens, regras e integrações necessárias." },
          { title: "Colocamos na sua rotina", text: "Testamos os caminhos de atendimento, ajustamos os detalhes e orientamos você e quem atende com você para colocar o fluxo em uso." },
        ].map(({ title, text }, index) => <li key={title} className="border-t border-edge pt-6"><span className="font-mono text-sm text-accent">0{index + 1}</span><h3 className="mb-3 mt-5 text-xl font-medium tracking-tight">{title}</h3><p className="leading-relaxed text-muted">{text}</p></li>)}</ol>
      </section>

      <section id="duvidas" className="site-container pb-20 md:pb-28"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"><div><p className="eyebrow">04 / Antes de conversar</p><h2 className="section-title">Para você decidir<br />com tranquilidade.</h2></div><div className="border-t border-edge">{questions.map(({ question, answer }) => <details key={question} className="group border-b border-edge"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 font-medium [&::-webkit-details-marker]:hidden">{question}<Plus size={20} className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="pb-6 pr-6 leading-relaxed text-muted">{answer}</p></details>)}</div></div></section>

      <section className="site-container pb-20 md:pb-28"><div className="rounded-3xl border border-[#f0d466] bg-[#fff5c9] px-6 py-12 sm:p-12 lg:p-16"><p className="eyebrow">Vamos olhar para o seu atendimento?</p><h2 className="section-title max-w-3xl">Menos tempo repetindo respostas.<br /><span className="text-accent">Mais atenção para seus clientes.</span></h2><p className="mb-8 mt-6 max-w-xl text-lg leading-relaxed text-muted">Me conte sobre o seu negócio e o que mais atrapalha no WhatsApp hoje. Vamos entender por onde começar.</p><WhatsAppCta className="w-full sm:w-auto">Conversar sobre meu negócio</WhatsAppCta><p className="mt-4 text-sm text-muted">Solução e investimento definidos a partir da sua necessidade.</p></div></section>
      <a
        href={AUTOMATION_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Gustavo pelo WhatsApp (abre em nova aba)"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 inline-flex min-h-14 min-w-14 items-center justify-center gap-3 rounded-full bg-[#087f5b] p-3 text-white shadow-lg transition-colors hover:bg-[#066649] focus-visible:ring-4 focus-visible:ring-white sm:px-5"
      >
        <FaWhatsapp size={28} aria-hidden="true" />
        <span className="hidden text-sm font-semibold sm:inline">Fale pelo WhatsApp</span>
      </a>
    </div>
  );
}
