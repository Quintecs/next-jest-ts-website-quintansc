import LateralComponent from '../src/components/lateral';
import { makeRender, screen } from '../src/utils'

describe('Testa o componente flutuante na esquerda da Aplicação', ()=>{
    it('esperando que o componente lateral exista', ()=>{
        makeRender(<LateralComponent/>)
        const linkElement = screen.getAllByTestId('lateralElements');
        expect(linkElement.length).toBeGreaterThanOrEqual(3)
    });
})
