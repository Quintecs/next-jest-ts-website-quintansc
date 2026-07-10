import type { Metadata } from "next";
import { RiSendPlaneFill } from "react-icons/ri";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Quintec: formulário ou WhatsApp para projetos, orçamentos e parcerias.",
};

export default function ContatoPage() {
  return (
    <div className="w-full max-w-6xl px-6 py-16 text-center">
      <h1 className="mb-12 font-display text-4xl font-bold">Entre em contato</h1>

      <div className="grid grid-cols-1 items-start gap-8 text-left lg:grid-cols-2">
        <section className="rounded-xl border-2 border-edge bg-panel p-8 sm:p-12">
          <h2 className="mb-2 font-display text-2xl font-bold">Preencha o formulário</h2>
          <p className="mb-8 text-sm text-muted-dark">
            Iremos entrar em contato assim que possível.
          </p>
          <form className="flex flex-col gap-4">
            <Input name="nome" placeholder="Seu nome" autoComplete="name" />
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
            />
            <Input
              name="telefone"
              type="tel"
              placeholder="Número com DDD"
              autoComplete="tel"
            />
            <Button type="submit" className="mt-2">
              <RiSendPlaneFill /> Enviar solicitação
            </Button>
          </form>
        </section>

        <section className="rounded-xl border-2 border-edge bg-panel p-8 sm:p-12">
          <h2 className="mb-2 font-display text-2xl font-bold">Contato via WhatsApp</h2>
          <p className="mb-8 text-sm text-muted-dark">
            Entre em contato diretamente conosco via WhatsApp.
          </p>
          <a
            href="https://wa.me/5511996394440"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "accent" }), "w-full")}
          >
            <RiSendPlaneFill /> Enviar Mensagem
          </a>
          <div className="mt-8 text-sm text-muted-dark">
            <p className="font-semibold text-muted">Horário de Atendimento:</p>
            <p>Segunda a sexta das 8:00 às 19:00</p>
            <p>Sábado e domingo das 10:00 às 16:00</p>
          </div>
        </section>
      </div>
    </div>
  );
}
