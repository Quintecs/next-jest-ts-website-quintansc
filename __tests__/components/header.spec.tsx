import Header from '../../src/components/header';
import { makeRender, screen } from '../../src/utils'
describe('Testando o Header da aplicação', ()=>{
    it('Verificando se o Header está sendo renderizado', ()=>{
        makeRender(<Header path={'/home'} />)
        const header = screen.getByTestId('headerContainer')
        expect(header).toBeInTheDocument
    })
    it('Verificando se há 2 links', async () => {
        makeRender(<Header path={'/home'}/>)
        const linkElement = await screen.findAllByTestId('menuElements');
        expect(linkElement.length).toBeGreaterThanOrEqual(2)
    });

    it('Verificando tem meu nome', ()=>{
        makeRender(<Header path={'/home'}/>)
        const text = screen.getByText(/Gustavo Quintans/i)
        expect(text).toBeInTheDocument
    })

    it('Verificando se há uma foto de perfil', ()=>{
        makeRender(<Header path={'/home'}/>)
        const img = screen.getByTestId('profileImg')
        expect(img).toBeInTheDocument
    })
})





























