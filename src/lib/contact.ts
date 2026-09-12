export const WHATSAPP_URL = "https://wa.me/5511989060037";
export const AUTOMATION_WHATSAPP_URL = `${WHATSAPP_URL}?text=${encodeURIComponent(
  "Olá, Gustavo! Vim pela página de automação de WhatsApp da Quintec. Quero avaliar meu atendimento e entender qual solução faz sentido para meu negócio. Podemos conversar sobre os fluxos e o investimento?",
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
