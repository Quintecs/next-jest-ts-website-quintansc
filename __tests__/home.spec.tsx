import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

describe('Testa a Home da Aplicação', ()=>{
    it('renders Site do Gustavinho react link', () => {
        render(<Home />);
        const linkElement = screen.getByText(/Homes Gustavinho/i);
        expect(linkElement).toBeInTheDocument;
    });
})
