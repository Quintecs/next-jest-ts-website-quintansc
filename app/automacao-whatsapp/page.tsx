import { TrackedAnchor } from "@/components/site/tracked-link";
import { pageMetadata, seoPages } from "@/lib/seo";
import { StaticPageStructuredData } from "@/components/site/structured-data";
import { ArrowDown, ArrowUpRight, Check, CheckCheck, ClipboardList, Clock3, GitBranch, MessageCircle, MessagesSquare, Plus, Repeat2, UserRoundCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import WhatsAppFlowCarousel from "@/components/site/whatsapp-flow-carousel";
import WhatsAppFlowDemo from "@/components/site/whatsapp-flow-demo";
import { AUTOMATION_WHATSAPP_URL } from "@/lib/contact";
import { automationBaseModule, automationPlans, automationPlanContactUrl, formatPlanPrice } from "@/lib/automation-plans";
import { cn } from "@/lib/utils";

const seo = seoPages["/automacao-whatsapp"];
export const metadata = pageMetadata("/automacao-whatsapp", seo.title, seo.description);

const improvements = [
  { icon: Clock3, before: "Mensagens esperando enquanto você trabalha", after: "Uma recepção que orienta o cliente", text: "O fluxo apresenta as opções e informa como o atendimento funciona, mesmo quando você está ocupado." },
  { icon: Repeat2, before: "A mesma explicação várias vezes por dia", after: "Respostas prontas para dúvidas recorrentes", text: "Horários, serviços e como pedir ficam organizados em mensagens com a linguagem do seu negócio." },
  { icon: MessagesSquare, before: "Pedidos, dúvidas e orçamentos misturados", after: "Conversas com assunto e próximo passo", text: "Você recebe as informações iniciais para continuar o atendimento com mais contexto." },
];

const deliverables = [
  { icon: MessagesSquare, title: "Mensagens com a sua linguagem", text: "Boas-vindas, perguntas e respostas alinhadas aos seus serviços e à forma como você atende." },
  { icon: GitBranch, title: "Um caminho para cada assunto", text: "Triagem de pedidos, dúvidas ou agendamentos, conforme as prioridades do seu negócio." },
  { icon: UserRoundCheck, title: "Passagem para sua equipe", text: "Um caminho claro para atendimento humano, com expectativas alinhadas ao horário da equipe." },
  { icon: ClipboardList, title: "Testes e orientação de uso", text: "Validação dos fluxos e orientação para você e sua equipe colocarem a solução na rotina." },
];

const questions = [
  { question: "Quanto custa a automação de WhatsApp?", answer: `A implantação começa em ${automationPlans.map(plan => `${formatPlanPrice(plan.price)} no ${plan.name}`).join(", ")}. Os limites de cada pacote estão na seção de planos. O valor final é confirmado na proposta; plataformas, mensagens, integrações além do módulo contratado e acompanhamento contínuo são cobrados separadamente, quando necessários e aprovados por você.` },
  { question: "Já uso o WhatsApp Business. Preciso trocar tudo?", answer: "A avaliação começa pelo que você já usa. Verificamos quais ajustes fazem sentido e quando é necessário conectar uma plataforma ou integração. O uso do número atual depende da configuração da conta e da solução escolhida; qualquer necessidade de mudança é alinhada antes da implantação." },
  { question: "O cliente consegue falar com uma pessoa?", answer: "Sim. Planejamos um caminho para atendimento humano. A automação organiza o início da conversa e as dúvidas recorrentes; você ou sua equipe assumem quando o cliente precisa de atenção específica, respeitando o horário de atendimento." },
  { question: "Funciona para quem trabalha sozinho?", answer: "Podemos desenhar fluxos tanto para quem atende por conta própria quanto para equipes. Se você recebe pedidos, orçamentos ou solicitações de agendamento pelo WhatsApp, a conversa inicial ajuda a avaliar o que vale organizar primeiro." },
  { question: "A automação confirma preços, estoque ou horários sozinha?", answer: "Essas confirmações dependem das regras e das integrações contratadas. Sem conexão com agenda, estoque ou sistema de pedidos, o fluxo reúne as informações e encaminha para você ou sua equipe confirmarem as condições. Isso é definido no escopo." },
  { question: "Quanto tempo leva e o que preciso preparar?", answer: "O prazo é definido na proposta, conforme a complexidade. Para começar a conversa, basta explicar o que seu negócio faz e o que mais toma tempo no WhatsApp. Na implantação, reunimos informações como horários, serviços, dúvidas frequentes e responsáveis pelo atendimento." },
  { question: "E depois que a automação estiver funcionando?", answer: "A entrega inclui testes dos caminhos e orientação de uso. Suporte contínuo, novos fluxos e ajustes depois da entrega são combinados na proposta, para você saber o que está incluído e como pedir mudanças." },
];

function WhatsAppCta({ children, className, location }: { children: React.ReactNode; className?: string; location: string }) {
  return <TrackedAnchor analyticsEvent={{ name: "contact_click", properties: { location, channel: "whatsapp" } }} href={AUTOMATION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "primary-cta h-auto min-h-14 gap-3 whitespace-normal px-6 py-4 text-base", className)}><MessageCircle size={20} className="shrink-0" aria-hidden="true" />{children}<ArrowUpRight size={18} className="shrink-0" aria-hidden="true" /></TrackedAnchor>;
}

function ConversationPreview() {
  return <figure className="relative mx-auto w-full max-w-lg lg:ml-auto lg:mr-0">
    <div className="overflow-hidden rounded-3xl border border-edge bg-white shadow-[0_24px_70px_-30px_#2456d94d]">
      <div className="flex items-center gap-3 border-b border-edge bg-panel px-5 py-4 sm:px-6">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-white"><MessageCircle size={23} aria-hidden="true" /></span>
        <div><p className="font-semibold">Seu negócio no WhatsApp</p><p className="text-sm text-muted">Exemplo ilustrativo de atendimento</p></div>
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="mr-8 rounded-2xl rounded-tl-sm border border-edge p-4"><p className="mb-1 text-xs font-medium text-muted">Cliente</p><p>Oi! Queria um orçamento. Como funciona?</p></div>
        <div className="ml-5 rounded-2xl rounded-tr-sm bg-[#edf3ff] p-4"><p className="mb-1 text-xs font-medium text-accent">Atendimento automático</p><p>Olá! Me conte qual serviço você precisa e para quando. Vou organizar seu pedido para a equipe.</p><CheckCheck size={17} className="ml-auto mt-2 text-accent" aria-hidden="true" /></div>
        <div className="mr-8 rounded-2xl rounded-tl-sm border border-edge p-4"><p className="mb-1 text-xs font-medium text-muted">Cliente</p><p>Uma instalação no escritório, na próxima semana.</p></div>
        <div className="rounded-2xl border border-[#f0d466] bg-[#fff5c9] p-4">
          <p className="flex items-center gap-2 text-sm font-semibold"><ClipboardList size={17} aria-hidden="true" />O que chega para você</p>
          <p className="mt-2 text-sm leading-relaxed">Pedido de orçamento · Instalação em escritório · Preferência pela próxima semana</p>
          <p className="mt-3 flex items-start gap-2 border-t border-[#e6d791] pt-3 text-sm"><UserRoundCheck size={17} className="mt-0.5 shrink-0" aria-hidden="true" />Sua equipe assume para confirmar preço e prazo.</p>
        </div>
      </div>
    </div>
    <figcaption className="mt-4 text-center text-sm text-muted">O fluxo é adaptado às perguntas e à rotina do seu negócio.</figcaption>
  </figure>;
}

export default function WhatsAppAutomationPage() {
  return <div className="whatsapp-landing w-full bg-background text-foreground">
    <StaticPageStructuredData path="/automacao-whatsapp" />

    <section aria-labelledby="automation-title" className="automation-hero border-b border-edge">
      <div className="site-container grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0d466] bg-[#fff5c9] px-3 py-2 text-sm font-medium"><MessageCircle size={16} aria-hidden="true" />Para quem atende e vende pelo WhatsApp</p>
          <h1 id="automation-title" className="max-w-2xl text-[clamp(2.35rem,4.4vw,4.1rem)] font-semibold leading-[1.08] tracking-[-0.055em]">Automação de WhatsApp para <span className="text-accent">atender melhor e ganhar tempo.</span></h1>
          <p className="mb-6 mt-6 max-w-xl text-lg leading-relaxed text-muted">Automatize as dúvidas frequentes e receba pedidos organizados. Fluxos sob medida, com atendimento humano quando o cliente precisar.</p>
          <WhatsAppCta location="automation_hero" className="w-full sm:w-auto">Quero avaliar meu atendimento</WhatsAppCta>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">Fale diretamente com Gustavo pelo WhatsApp. Entenda a solução e o investimento antes de contratar.</p>
          <a href="#fluxos" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent">Ver um exemplo para meu negócio <ArrowDown size={16} aria-hidden="true" /></a>
          <ul className="my-6 space-y-3 text-base">{["Menos respostas repetidas na sua rotina", "Pedidos e orçamentos com contexto", "Você ou sua equipe no controle do atendimento"].map(item => <li key={item} className="flex items-start gap-2"><Check size={19} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul>
          <p className="mb-4 text-sm leading-relaxed"><strong>Implantação a partir de {formatPlanPrice(automationPlans[0].price)}.</strong> <a href="#planos" className="font-medium text-accent underline underline-offset-4">Compare os planos</a><span className="mt-1 block text-muted">Plataforma e mensagens à parte, quando aplicáveis.</span></p>
        </div>
        <ConversationPreview />
      </div>
    </section>

    <div className="border-b border-edge bg-white"><div className="site-container grid gap-4 py-6 text-sm sm:grid-cols-3">{[
      ["Sob medida", "Fluxos para a sua rotina"],
      ["Atendimento humano", "Com um caminho para sua equipe"],
      ["Escopo transparente", "Etapas e custos antes de começar"],
    ].map(([title, text]) => <p key={title} className="flex items-start gap-3"><Check size={19} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span><strong className="block font-semibold">{title}</strong><span className="mt-1 block text-muted">{text}</span></span></p>)}</div></div>

    <section className="site-container section-space">
      <p className="eyebrow">O que muda na rotina</p>
      <h2 className="section-title max-w-3xl">Seu tempo não precisa ir todo para as mesmas mensagens.</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{improvements.map(({ icon: Icon, before, after, text }) => <article key={before} className="rounded-2xl border border-edge bg-white p-6 sm:p-7">
        <Icon size={24} className="mb-6 text-accent" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-muted">Hoje: {before.toLowerCase()}.</p>
        <ArrowDown size={18} className="my-4 text-accent" aria-hidden="true" />
        <h3 className="text-xl font-semibold tracking-tight">{after}</h3>
        <p className="mt-3 leading-relaxed text-muted">{text}</p>
      </article>)}</div>
    </section>

    <section id="fluxos" className="border-y border-edge bg-panel/60">
      <div className="site-container section-space">
        <p className="eyebrow">Veja na prática</p>
        <h2 className="section-title max-w-3xl">Como isso funcionaria<br />no seu negócio?</h2>
        <p className="mb-8 mt-5 max-w-2xl text-lg leading-relaxed text-muted">Escolha o tipo de atendimento que você recebe. Veja o que o fluxo organiza e o que fica com sua equipe.</p>
        <WhatsAppFlowDemo />
        <details className="mt-10 rounded-2xl border border-edge bg-white p-5 sm:p-6">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">Quer acompanhar uma conversa completa? Veja as 6 etapas.<Plus size={20} className="shrink-0 text-accent" aria-hidden="true" /></summary>
          <WhatsAppFlowCarousel />
        </details>
      </div>
    </section>

    <section id="planos" className="site-container section-space">
      <div className="mx-auto max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Escolha por onde começar</p><h2 className="section-title">O plano acompanha<br />a sua necessidade.</h2><p className="mt-5 text-lg leading-relaxed text-muted">Todos os planos partem da mesma Base. Você acrescenta os módulos que seu atendimento precisa, com limites e custos definidos antes da contratação.</p></div>
      <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-edge bg-panel p-6"><h3 className="text-lg font-semibold">Módulo Base · incluído em todos os planos</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{automationBaseModule.map(item => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed"><Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div>
      <div className="mx-auto mt-6 grid max-w-6xl gap-6 lg:grid-cols-3">
        {automationPlans.map(plan => <article key={plan.id} aria-labelledby={`plan-${plan.id}`} className={cn("flex flex-col rounded-3xl border p-6 sm:p-8", plan.id === "premium" ? "border-accent bg-[#edf3ff]" : "border-edge bg-white")}>
          <p className="mb-3 text-sm font-medium text-accent">{plan.label}</p>
          <h3 id={`plan-${plan.id}`} className="text-3xl font-semibold tracking-tight">{plan.name}</h3>
          <p className="mt-3 min-h-12 leading-relaxed text-muted">{plan.audience}</p>
          <div className="my-6 border-y border-edge py-6"><p className="text-sm text-muted">Implantação a partir de</p><p className="mt-1 text-4xl font-semibold tracking-tight">{formatPlanPrice(plan.price)}</p><p className="mt-2 text-sm text-muted">Pagamento único pela implantação do escopo.</p></div>
          <ul className="mb-7 space-y-3">{plan.features.map(feature => <li key={feature} className="flex items-start gap-3 leading-relaxed"><Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{feature}</li>)}</ul>
          <p className="mb-6 mt-auto text-sm leading-relaxed text-muted">{plan.note}</p>
          <TrackedAnchor href={automationPlanContactUrl(plan)} analyticsEvent={{ name: "contact_click", properties: { location: `automation_plan_${plan.id}`, channel: "whatsapp" } }} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "primary-cta h-auto min-h-14 gap-2 whitespace-normal py-4 text-base")}><MessageCircle size={19} aria-hidden="true" />Quero o {plan.name}<ArrowUpRight size={18} aria-hidden="true" /></TrackedAnchor>
        </article>)}
      </div>
      <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-edge bg-panel p-5 sm:p-6"><h3 className="font-semibold">O que é orçado separadamente</h3><p className="mt-2 leading-relaxed text-muted">Assinaturas de plataforma, tarifas de mensagens da Meta, integrações além do módulo contratado, fluxos adicionais e manutenção contínua. Os custos recorrentes são apresentados na proposta, antes da contratação.</p><p className="mt-3 text-sm leading-relaxed text-muted">Uma etapa é uma pergunta, resposta ou decisão dentro do atendimento. A compatibilidade do número e da plataforma é verificada antes da implantação. O prazo é definido após esse diagnóstico. O módulo de integração do Completo não inclui sincronização de agenda, estoque, pagamentos ou migração de bases.</p></div>
    </section>

    <section id="entrega" className="site-container pb-20 md:pb-28">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><p className="eyebrow">O que você contrata</p><h2 className="section-title">Um atendimento organizado.<br />Do fluxo à implantação.</h2></div><p className="text-lg leading-relaxed text-muted">A proposta define quais fluxos serão construídos e o que está incluído. Você sabe o que vai receber antes de começar.</p></div>
      <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">{deliverables.map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-edge pt-6"><Icon size={24} className="mb-5 text-accent" aria-hidden="true" /><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></article>)}</div>

    </section>

    <section id="como-funciona" className="border-y border-edge bg-panel/60">
      <div className="site-container section-space">
        <p className="eyebrow">Comece pela conversa</p>
        <h2 className="section-title max-w-3xl">Você explica a rotina.<br />Eu cuido da parte técnica.</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">{[
          { title: "Conte o que toma seu tempo", text: "No WhatsApp, me diga o que você vende ou oferece e quais mensagens mais se repetem. Você não precisa chegar com um projeto pronto." },
          { title: "Avalie uma proposta clara", text: "Entendemos o cenário e definimos fluxos, integrações, prazo e investimento. Você avalia o escopo antes de decidir pela contratação." },
          { title: "Receba e coloque em uso", text: "Com a proposta aprovada, construímos e testamos a solução. Você e sua equipe recebem orientação para usar os fluxos no dia a dia." },
        ].map(({ title, text }, index) => <li key={title} className="border-t border-edge pt-6"><span className="font-mono text-sm text-accent">0{index + 1}</span><h3 className="mb-3 mt-4 text-xl font-semibold tracking-tight">{title}</h3><p className="leading-relaxed text-muted">{text}</p></li>)}</ol>
        <div className="mt-12 grid gap-6 rounded-2xl border border-edge bg-white p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div className="flex items-center gap-4"><span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-xl font-semibold text-white" aria-hidden="true">GQ.</span><div><p className="text-lg font-semibold">Gustavo Quintans</p><p className="mt-1 text-sm text-muted">Desenvolvedor e criador da Quintec</p></div></div>
          <div><h3 className="text-xl font-semibold">Você fala com quem desenvolve.</h3><p className="mt-3 leading-relaxed text-muted">Eu conheço seu contexto, desenho a solução e acompanho a construção. Meu trabalho com sistemas web e integrações conecta o atendimento às necessidades do seu negócio.</p><p className="mt-4 flex items-center gap-2 text-sm font-medium"><UserRoundCheck size={18} className="text-accent" aria-hidden="true" />Contato direto para alinhar escopo e decisões.</p></div>
        </div>
      </div>
    </section>

    <section id="duvidas" className="site-container section-space">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"><div><p className="eyebrow">Antes de decidir</p><h2 className="section-title">Tire suas dúvidas.<br />Entenda o próximo passo.</h2><p className="mt-5 leading-relaxed text-muted">Cada operação tem suas particularidades. Estes são os pontos que alinhamos antes de construir seu fluxo.</p></div><div className="border-t border-edge">{questions.map(({ question, answer }) => <details key={question} className="group border-b border-edge"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 font-medium [&::-webkit-details-marker]:hidden">{question}<Plus size={20} className="shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" /></summary><p className="pb-6 pr-6 leading-relaxed text-muted">{answer}</p></details>)}</div></div>
    </section>

    <section id="conversar" className="site-container pb-20 md:pb-28">
      <div className="grid gap-8 rounded-3xl border border-[#f0d466] bg-[#fff5c9] p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-14">
        <div><p className="eyebrow">Vamos organizar seu atendimento?</p><h2 className="section-title">Comece pelo que mais toma seu tempo hoje.</h2><p className="mt-5 text-lg leading-relaxed text-muted">Me conte como seu negócio usa o WhatsApp. Vamos entender qual fluxo faz sentido e o que seria necessário para colocá-lo em prática.</p></div>
        <div className="flex flex-col justify-center rounded-2xl border border-[#e6d791] bg-white/70 p-6"><h3 className="text-lg font-semibold">Na primeira conversa, me conte:</h3><ul className="my-5 space-y-3">{["O que seu negócio faz", "Quais mensagens mais se repetem", "Quem atende os clientes hoje"].map(item => <li key={item} className="flex gap-2 text-sm"><Check size={18} className="shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul><WhatsAppCta location="automation_bottom" className="w-full">Quero avaliar meu atendimento</WhatsAppCta><p className="mt-3 text-center text-sm leading-relaxed text-muted">Abre o WhatsApp com uma mensagem pronta.<br />Você revisa e envia quando quiser.</p></div>
      </div>
    </section>
  </div>;
}
