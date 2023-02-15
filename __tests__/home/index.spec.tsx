import { render, screen } from '@testing-library/react';
import Home from '../../pages/home';

describe('Testa a Home da Aplicação', ()=>{
    it('testando a Home tem esse Texto', async () => {
        render(<Home gitUser={{}}/>);
        const linkElement = screen.getByText(/Meu nome é Gustavo Quintans/i);
        expect(linkElement).toBeInTheDocument;
    });
})
