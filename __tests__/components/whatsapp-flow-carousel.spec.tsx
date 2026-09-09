import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import WhatsAppFlowCarousel from "@/components/site/whatsapp-flow-carousel";

describe("Carrossel do fluxo de WhatsApp", () => {
  it("percorre a conversa até o resumo e permite voltar sem ultrapassar os limites", async () => {
    const user = userEvent.setup();
    render(<WhatsAppFlowCarousel />);
    const previous = screen.getByRole("button", { name: "Etapa anterior" });
    const next = screen.getByRole("button", { name: "Próxima etapa" });
    expect(previous).toBeDisabled();
    expect(screen.getByRole("heading", { name: "O primeiro “oi” já encontra uma resposta." })).toBeInTheDocument();

    for (let step = 2; step <= 6; step++) {
      await user.click(next);
      expect(screen.getByRole("group", { name: new RegExp(`^${step} de 6:`) })).toBeInTheDocument();
    }

    expect(next).toBeDisabled();
    expect(screen.getByRole("heading", { name: "Um pedido organizado para você agir." })).toBeInTheDocument();
    expect(screen.getByText(/Instalação: 2 luminárias/)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "O primeiro “oi” já encontra uma resposta." })).not.toBeInTheDocument();
    await user.click(previous);
    expect(screen.getByRole("group", { name: /^5 de 6:/ })).toBeInTheDocument();
    expect(next).toBeEnabled();
  });

  it("permite escolher uma etapa diretamente e navegar pelo teclado", async () => {
    const user = userEvent.setup();
    render(<WhatsAppFlowCarousel />);
    const stage = screen.getByRole("button", { name: "Ir para etapa 4: Reunir os detalhes" });
    await user.click(stage);
    expect(stage).toHaveAttribute("aria-current", "step");
    expect(screen.getByText(/Duas luminárias no meu escritório/)).toBeInTheDocument();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("group", { name: /^3 de 6:/ })).toBeInTheDocument();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("group", { name: /^4 de 6:/ })).toBeInTheDocument();
    await user.keyboard("{End}");
    expect(screen.getByRole("button", { name: "Próxima etapa" })).toBeDisabled();
    await user.keyboard("{Home}");
    expect(screen.getByRole("button", { name: "Etapa anterior" })).toBeDisabled();
  });

  it("distingue deslizar para os lados de rolar a página e cancela gestos interrompidos", () => {
    render(<WhatsAppFlowCarousel />);
    const surface = document.getElementById("fluxo-carrossel-slide")!;
    function swipe(fromX: number, fromY: number, toX: number, toY: number) {
      fireEvent.touchStart(surface, { touches: [{ clientX: fromX, clientY: fromY }] });
      fireEvent.touchEnd(surface, { changedTouches: [{ clientX: toX, clientY: toY }] });
    }
    swipe(200, 100, 100, 110);
    expect(screen.getByRole("group", { name: /^2 de 6:/ })).toBeInTheDocument();
    swipe(200, 100, 190, 250);
    expect(screen.getByRole("group", { name: /^2 de 6:/ })).toBeInTheDocument();
    fireEvent.touchStart(surface, { touches: [{ clientX: 200, clientY: 100 }] });
    fireEvent.touchCancel(surface);
    fireEvent.touchEnd(surface, { changedTouches: [{ clientX: 50, clientY: 100 }] });
    expect(screen.getByRole("group", { name: /^2 de 6:/ })).toBeInTheDocument();
    swipe(100, 100, 200, 110);
    expect(screen.getByRole("group", { name: /^1 de 6:/ })).toBeInTheDocument();
  });
});
