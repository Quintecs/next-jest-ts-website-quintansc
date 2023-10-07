import { makeRender, screen } from '../../src/utils';
import Contato from '../../pages/contato';

describe('Testa a pagina Contato da Aplicação', () => {
    it('testando a pagina contato tem esses Textos', () => {
        makeRender(<Contato />);
        const linkElement = screen.getAllByText(/Entre em contato/i);
        const linkElement1 = screen.getAllByText(/Preencha o formulário/i);
        const linkElement2 = screen.getAllByText(/Contato via Whatsapp/i);
        const linkElement3 = screen.getAllByText(/Enviar solicitação/i);
        expect({ linkElement, linkElement1, linkElement2, linkElement3}).toBeInTheDocument;
    });
})
