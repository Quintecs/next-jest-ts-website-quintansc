import { makeRender, screen } from '../../src/utils'
import Home from '../../pages/home';

jest.mock('../../src/components/Projects')

describe('Testa a Home da Aplicação', ()=>{
    it('testando a Home tem esse Texto', () => {
        const mockRepositories = [
            { id: 338077631, name: 'Repo 1' },
            { id: 338077631, name: 'Repo 2' },
            { id: 338077631, name: 'Repo 3' },
        ];
        // Renderiza o componente Home com as props necessárias, incluindo o mock de repositories
        makeRender(<Home gitUser={{}} repositories={mockRepositories} />);

        const linkElement = screen.getByText(/Meu nome é Gustavo Quintans/i);
        expect(linkElement).toBeInTheDocument;
    });
})
