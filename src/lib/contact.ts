export const WHATSAPP_URL = "https://wa.me/5511933712324";
export const AUTOMATION_WHATSAPP_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Olá, Gustavo! Vim pela página de automação de WhatsApp da Quintec. Sou empreendedor e quero organizar o atendimento do meu negócio. Podemos conversar?",
)}`;
export const solutionOptions = ["Site ou landing page", "Sistema web", "API ou integração", "Ainda preciso de orientação"] as const;

export interface ProjectBrief {
  name: string;
  email: string;
  company: string;
  solution: string;
  message: string;
}

export function createWhatsAppUrl(brief: ProjectBrief): string {
  const text = [
    "Olá, Gustavo! Gostaria de conversar sobre um projeto.",
    `Nome: ${brief.name.trim()}`,
    `E-mail: ${brief.email.trim()}`,
    brief.company.trim() ? `Empresa: ${brief.company.trim()}` : "",
    `Solução: ${brief.solution}`,
    `Sobre o projeto: ${brief.message.trim()}`,
  ].filter(Boolean).join("\n\n");
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
