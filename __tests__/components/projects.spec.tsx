import Project from '../../src/components/Projects';
import { makeRender, screen } from '../../src/utils'

jest.mock('../../src/components/ImageComponent/style')

describe('Testa o componente Projeto', ()=>{
    it('testando a Home tem esse Texto', () => {
        makeRender(<Project title={''} urlImage={''} flags={[]} projectUrl={''} />);
        const mainElement = screen.getAllByText('Acessar projeto completo');
        expect(mainElement).toBeInTheDocument;
    });
})
