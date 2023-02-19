import FormContact from 'src/components/contact';
import { makeRender, screen } from 'src/utils';
import Contato from '../../pages/contato';

jest.mock('../../src/utils')
jest.mock('../../src/components/contact')

describe('Testa a pagina Contato da Aplicação', () => {
    it('testando a pagina contato tem esses Textos', () => {
        makeRender(<Contato />);
        const linkElement = screen.getByText(/Entre em contato/i);
        const linkElement1 = screen.getByText(/Preencha o formulário/i);
        const linkElement2 = screen.getByText(/Contato via Whatsapp/i);
        const linkElement3 = screen.getByText(/Enviar solicitação/i);
        expect({ linkElement, linkElement1, linkElement2, linkElement3}).toBeInTheDocument;
    });

    it('testando se a pagina tem os devidos componentes', ()=>{
        expect(FormContact).toHaveBeenCalled
    })
})
