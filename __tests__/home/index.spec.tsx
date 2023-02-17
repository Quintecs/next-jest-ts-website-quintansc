import { makeRender, screen } from '../../src/utils'
import Home from '../../pages/home';

jest.mock('../../src/components/project')

describe('Testa a Home da Aplicação', ()=>{
    it('testando a Home tem esse Texto', () => {
        makeRender(<Home gitUser={{}} />);
        const linkElement = screen.getByText(/Meu nome é Gustavo Quintans/i);
        expect(linkElement).toBeInTheDocument;
    });
})
