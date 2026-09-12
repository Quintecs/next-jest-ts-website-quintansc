"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { X } from "lucide-react";
import { consentSnapshot, openCookiePreferences, parseConsent, PREFERENCES_EVENT, saveConsent, subscribeConsent, type ConsentChoices } from "@/lib/consent";

const serverSnapshot = () => null;
export function useConsent() {
  return parseConsent(useSyncExternalStore(subscribeConsent, consentSnapshot, serverSnapshot));
}

export function CookiePreferencesButton() {
  return <button type="button" data-cookie-settings onClick={openCookiePreferences} className="text-link text-muted">Preferências de cookies</button>;
}

const choiceButton = "min-h-11 rounded-lg border border-edge px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-muted hover:bg-foreground/5";

export default function CookieConsent() {
  const consent = useConsent();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>({ analytics: false, marketing: false });
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Show the notice only after hydration, without changing the server's page content.
    const frame = requestAnimationFrame(() => setReady(true));
    const show = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const current = parseConsent(consentSnapshot());
      setChoices({ analytics: current?.analytics ?? false, marketing: current?.marketing ?? false });
      setOpen(true);
    };
    window.addEventListener(PREFERENCES_EVENT, show);
    return () => { cancelAnimationFrame(frame); window.removeEventListener(PREFERENCES_EVENT, show); };
  }, []);

  function choose(value: ConsentChoices) {
    saveConsent(value);
    setOpen(false);
  }

  return <>
    {ready && !consent && !open && <section
      aria-labelledby="cookie-notice-title"
      data-cookie-notice
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-3 right-3 z-40 rounded-2xl border border-edge bg-background p-4 shadow-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[32rem] sm:p-5"
    >
      <h2 id="cookie-notice-title" className="text-base font-semibold">Sua privacidade, sua escolha</h2>
      <p className="mb-3 mt-2 text-sm leading-relaxed text-muted">Estatísticas e publicidade só com sua permissão. Você pode recusar e seguir navegando. <Link href="/privacidade" className="underline underline-offset-4">Saiba mais</Link>.</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={choiceButton} onClick={() => choose({ analytics: false, marketing: false })}>Rejeitar opcionais</button>
        <button type="button" className={choiceButton} onClick={() => choose({ analytics: true, marketing: true })}>Aceitar todos</button>
        <button type="button" data-cookie-personalize className="min-h-11 px-2 text-sm text-muted underline underline-offset-4" onClick={openCookiePreferences}>Personalizar</button>
      </div>
    </section>}
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-edge bg-background p-6 shadow-xl"
          onCloseAutoFocus={event => {
            event.preventDefault();
            requestAnimationFrame(() => {
              const target = returnFocus.current?.isConnected ? returnFocus.current
                : document.querySelector<HTMLButtonElement>("[data-cookie-personalize]")
                  ?? document.querySelector<HTMLButtonElement>("[data-cookie-settings]");
              target?.focus();
            });
          }}
        >
          <Dialog.Title className="pr-8 text-xl font-semibold">Preferências de privacidade</Dialog.Title>
          <Dialog.Description className="mb-5 mt-3 text-sm leading-relaxed text-muted">Escolha o que deseja permitir. Você pode mudar de ideia pelo rodapé a qualquer momento.</Dialog.Description>
          <div className="space-y-4">
            <div className="rounded-xl border border-edge p-4"><p className="text-sm font-medium">Essenciais · sempre ativos</p><p className="mt-2 text-sm leading-relaxed text-muted">Permitem entregar e proteger o site e lembrar sua escolha neste navegador.</p></div>
            {([
              ["analytics", "Estatísticas e desempenho", "Permite à Vercel medir visitas, interações e velocidade para melhorar o site. Não enviamos o texto do formulário nesses eventos."],
              ["marketing", "Publicidade", "Permite ao Pixel da Meta usar cookies e registrar visitas e cliques para medir campanhas e personalizar anúncios."],
            ] as const).map(([key, label, description]) => <label key={key} className="flex cursor-pointer items-start gap-3 rounded-xl border border-edge p-4">
              <input type="checkbox" checked={choices[key]} onChange={event => setChoices({ ...choices, [key]: event.target.checked })} className="mt-1 size-5 shrink-0 accent-accent" />
              <span><span className="text-sm font-medium">{label}</span><span className="mt-2 block text-sm leading-relaxed text-muted">{description}</span></span>
            </label>)}
          </div>
          <Link href="/privacidade" onClick={() => setOpen(false)} className="mt-4 inline-block py-2 text-sm text-muted underline underline-offset-4">Política de privacidade e cookies</Link>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className={choiceButton} onClick={() => choose({ analytics: false, marketing: false })}>Rejeitar opcionais</button>
            <button type="button" className={choiceButton} onClick={() => choose(choices)}>Salvar preferências</button>
          </div>
          <Dialog.Close aria-label="Fechar preferências" className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-lg text-muted"><X size={20} /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </>;
}
