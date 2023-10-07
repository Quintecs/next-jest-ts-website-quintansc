import { useState } from 'react'
import { Box, Divider, Drawer } from '@mui/material';
import { Container } from '@mui/system';
import ListLink from '../ListLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu, MdHome, MdGridView, MdContactSupport } from '../../utils/icons';
import { MyName, ProfileImage, UserContainer, Menu, ButtonMenuMobile, ButtonHeader, SelectedLinkMenu, Headers } from './style'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const pathname = usePathname()
  return (
    <Headers data-testid="headerContainer">
      <Container maxWidth={false} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <UserContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/68349886?s=400&u=4ae864a122f475f09238d05c9ffbe9822bb57954&v=4"
          alt="My profile on Github"
          data-testid="profileImg"
        />
        <MyName>Quintec</MyName>
      </UserContainer>
      <ButtonMenuMobile data-testid="btnMobileMenu" onClick={() => setMenuActive(true)}>
        <MdMenu size={30} color={'white'} />
      </ButtonMenuMobile>

      <Drawer data-testid='drawer' anchor={"right"} open={menuActive} onClose={() => setMenuActive(false)}>
        <Box data-testid="box"
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setMenuActive(false)}
          onKeyDown={() => setMenuActive(false)}
        >
          <ListLink icon={<MdHome />} text={"Home"} link={"/home"} ></ListLink>
          <ListLink icon={<MdGridView />} text={"Projetos"} link={"/projetos"}></ListLink>
          <ListLink icon={<MdContactSupport />} text={"Contato"} link={"/contato"}></ListLink>
          <Divider />
        </Box>
      </Drawer>

      <Menu>
        <SelectedLinkMenu color={pathname == '/home'? "#999ED7": "#18181A"} href={'/'} data-testid="menuElements">Inicio</SelectedLinkMenu>
        <SelectedLinkMenu color={pathname == '/projetos'? "#999ED7": "#18181A"} href={'/projetos'} data-testid="menuElements">Projetos</SelectedLinkMenu>
        <Divider orientation='vertical' style={{ width: '2px', background: '#252527', height: '48px', margin: '0 50px' }}/>
        
        <Link  href='/contato' passHref><ButtonHeader variant="contained"> Mentoria Gratuita </ButtonHeader></Link>
      </Menu>
      </Container>
    </Headers>
  )
}

export default Header