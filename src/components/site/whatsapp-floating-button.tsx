"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { TrackedAnchor } from "@/components/site/tracked-link";
import { AUTOMATION_WHATSAPP_URL, WHATSAPP_URL } from "@/lib/contact";

export default function WhatsAppFloatingButton() {
  const isAutomationPage = usePathname() === "/automacao-whatsapp";

  return (
    <TrackedAnchor
      analyticsEvent={{ name: "contact_click", properties: { location: isAutomationPage ? "automation_floating" : "site_floating", channel: "whatsapp" } }}
      href={isAutomationPage ? AUTOMATION_WHATSAPP_URL : WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Gustavo pelo WhatsApp (abre em nova aba)"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 inline-flex min-h-14 min-w-14 items-center justify-center gap-3 rounded-full bg-[#087f5b] p-3 text-white shadow-lg transition-colors hover:bg-[#066649] focus-visible:ring-4 focus-visible:ring-white sm:px-5"
    >
      <FaWhatsapp size={28} aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Fale pelo WhatsApp</span>
    </TrackedAnchor>
  );
}
