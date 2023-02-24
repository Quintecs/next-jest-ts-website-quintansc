import Layout from '../../src/components/layout';
import { makeRender, screen } from '../../src/utils'

describe('Testa a Home da Aplicação', ()=>{
    it('testando a Home tem esse Texto', () => {
        makeRender(<Layout children={<></>}/>);
        const mainElement = screen.getAllByTestId('layout');
        expect(mainElement).toBeInTheDocument;
    });
})
