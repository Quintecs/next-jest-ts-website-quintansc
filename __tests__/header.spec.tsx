import Header from '../src/components/header';

import { makeRender, screen } from '../src/utils'
describe('Testando o Header da aplicação', ()=>{
    it('Verificando se o Header está sendo renderizado', ()=>{
        makeRender(<Header/>)
        const header = screen.getByTestId('headerContainer')
    })
    it('Verificando se há 4 links', async () => {
        makeRender(<Header/>)
        const linkElement = await screen.findAllByTestId('menuElements');
        expect(linkElement.length).toBeGreaterThanOrEqual(4)
    });

    it('Verificando tem meu nome', ()=>{
        makeRender(<Header/>)
        const text = screen.getByText(/Gustavo Quintans/i)
        expect(text).toBeInTheDocument
    })

    it('Verificando se há uma foto de perfil', ()=>{
        makeRender(<Header/>)
        const img = screen.getByTestId('profileImg')
        expect(img).toBeInTheDocument
    })
})
