import LateralComponent from '../../src/components/Lateral';
import { makeRender, screen } from '../../src/utils'

describe('Testa o componente flutuante na esquerda da Aplicação', ()=>{
    it('esperando que o componente lateral exista', ()=>{
        makeRender(<LateralComponent theme={{}} />)
        const linkElement = screen.getAllByTestId('lateralElements');
        expect(linkElement.length).toBeGreaterThanOrEqual(4)
    });
})
