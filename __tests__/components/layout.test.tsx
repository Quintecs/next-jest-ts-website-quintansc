import Layout from '../../src/components/layout';
import { makeRender, screen } from '../../src/utils'

describe('Testa o layout da aplicacao', ()=> {
    it('testando se tem componente de layout', async () => {
        makeRender(<Layout children={<></>}/>);
        const mainElement = screen.getAllByTestId('layout');
        expect(mainElement).toBeInTheDocument;
    });

    it('testando se o layout renderiza o header', async () => {
        makeRender(<Layout children={<></>}/>);
        const headerElement = await screen.findAllByTestId('headerContainer')
        expect(headerElement).toBeInTheDocument;
    });

    it('testando se o layout renderiza o footer', async () => {
        makeRender(<Layout children={<></>}/>);
        const footerElement = await screen.findAllByTestId('footerContainerDesktop')
        expect(footerElement).toBeInTheDocument;
    });

      it('testando se o layout renderiza o footer', async () => {
        window.innerWidth = 600
        makeRender(<Layout children={<></>}/>);
        const footerElement = await screen.findAllByTestId('footerContainerMobile')
        expect(footerElement).toBeInTheDocument;
    });
})
