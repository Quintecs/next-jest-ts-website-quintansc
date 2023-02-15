import { render, screen } from '@testing-library/react';
import Contato from '../../pages/contato';

describe('Testa a Home da Aplicação', ()=>{
    it('testando a Home tem esse Texto', async () => {
        render(<Contato />);
        const linkElement = screen.getByText(/Contato Gustavinho/i);
        expect(linkElement).toBeInTheDocument;
    });
})
