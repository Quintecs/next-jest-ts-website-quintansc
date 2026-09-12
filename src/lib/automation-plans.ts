import { WHATSAPP_URL } from "./contact";

// Proposed commercial packages. Keep amounts, scope and WhatsApp messages together.
export const automationBaseModule = [
  "Configuração de 1 número em plataforma compatível",
  "Boas-vindas e informação de horários",
  "Encaminhamento para atendimento humano",
  "Testes dos caminhos e orientação de uso",
] as const;
export const automationPlans = [
  {
    id: "simples",
    name: "Simples",
    price: 1490,
    audience: "Base + Fluxo Simples para organizar uma necessidade do atendimento.",
    label: "Base + Fluxo Simples",
    features: [
      "Módulo Base incluído",
      "1 fluxo simples com até 5 etapas",
      "Até 10 respostas para dúvidas frequentes",
      "1 rodada de ajustes antes da entrega",
    ],
    note: "Ideal para recepção, dúvidas frequentes ou coleta inicial de um pedido.",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2990,
    audience: "Base + múltiplos fluxos e coleta de dados para organizar diferentes assuntos.",
    label: "Base + Fluxos + Coleta de dados",
    features: [
      "Módulo Base incluído",
      "Até 3 fluxos com até 10 etapas cada",
      "Até 20 respostas para dúvidas frequentes",
      "Coleta de informações por tipo de solicitação",
      "Encaminhamento por assunto para a equipe",
      "2 rodadas de ajustes antes da entrega",
    ],
    note: "Ideal para separar orçamentos, pedidos e solicitações de agendamento.",
  },
  {
    id: "completo",
    name: "Completo",
    price: 4990,
    audience: "Para conectar o atendimento ao cadastro de contatos em uma ferramenta do seu negócio.",
    label: "Premium + Módulo de integração",
    features: [
      "Todos os módulos e limites do Premium",
      "1 integração para cadastrar contatos",
      "Destino: 1 planilha ou CRM com API disponível",
      "Mapeamento de até 5 campos do contato",
      "Envio em um sentido: do fluxo para a ferramenta",
      "Teste de envio e tratamento de falhas",
    ],
    note: "A ferramenta e a viabilidade da integração são confirmadas antes da contratação.",
  },
] as const;

export type AutomationPlan = (typeof automationPlans)[number];

export function formatPlanPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(price);
}

export function automationPlanContactUrl(plan: AutomationPlan): string {
  const message = `Olá, Gustavo! Tenho interesse no plano ${plan.name} de automação de WhatsApp, com implantação a partir de ${formatPlanPrice(plan.price)}. Módulos: ${plan.label}. Quero confirmar o escopo, o prazo e os custos de plataforma e mensagens para meu negócio.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
