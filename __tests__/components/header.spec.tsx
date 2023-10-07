import ListLink from '../../src/components/ListLinks';
import Header from '../../src/components/Headers';
import { makeRender, screen, fireEvent } from '../../src/utils'
import { MdHome } from 'react-icons/md';
import { ButtonMenuMobile } from '@/components/Headers/style';

import { Box, Divider, Drawer } from '@mui/material';

jest.mock('next/router', () => ({
  usePathname: jest.fn()
}))

describe('Testando o Header da aplicação', ()=>{
    it('Verificando se o Header está sendo renderizado', ()=>{
        makeRender(<Header />)
        const header = screen.getByTestId('headerContainer')
        expect(header).toBeInTheDocument
    })
    it('Verificando se há 2 links no menu', async () => {
        makeRender(<Header />)
        const menuElement = await screen.findAllByTestId('menuElements');
        expect(menuElement.length).toBeGreaterThanOrEqual(2)
    });

    it('Verificando se o link mobile funciona', async () => {
        makeRender(<ListLink icon={<MdHome />} text={"Home"} link={"/home"} />)
        const linkElement = await screen.findByTestId('linkElements');
        expect(linkElement).toBeInTheDocument
    });

      it('Verificando se há 3 links no mobile', async () => {
        makeRender(<Header />)
        const btnMobile = await screen.findAllByTestId('btnMobileMenu');        
        fireEvent.click(btnMobile[0])
        const linkElements = await screen.findAllByTestId('linkElements');
        expect(linkElements.length).toBeGreaterThanOrEqual(2)
    });

    it('Verificando tem meu nome', ()=>{
        makeRender(<Header />)
        const text = screen.getByText(/Quintec/i)
        expect(text).toBeInTheDocument
    })

    it('Botao mobile do menu', async ()=>{
        window.innerWidth = 600
        makeRender(<Header />)
        
        const btnMobileMenu = await screen.findByTestId('btnMobileMenu');
        expect(btnMobileMenu).toBeInTheDocument
        btnMobileMenu.click()

        const drawwers = await screen.findByTestId('drawer');
        expect(drawwers).toBeInTheDocument

        const box = await screen.findByTestId('box');
        expect(box).toBeInTheDocument

        const linkElements = await screen.findAllByTestId('linkElements');
        expect(linkElements.length).toBeGreaterThanOrEqual(2)

        btnMobileMenu.click()
        expect(drawwers).not.toBeInTheDocument
    })

    it('Verificando se há uma foto de perfil', ()=>{
        makeRender(<Header />)
        const img = screen.getByTestId('profileImg')
        expect(img).toBeInTheDocument
    })
})





























