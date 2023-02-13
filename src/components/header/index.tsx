import { useState } from 'react'
import { MdMenu } from '../../utils/icons';

import { MyName, ProfileImage, UserContainer, Menu, ButtonMenuMobile, ButtonHeader, SelectedLinkMenu } from './style'
import { Box, Divider, Drawer } from '@mui/material';
import ListLink from '../ListLink';
import { Container } from '@mui/system';

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: "1px solid #252527",
}

const Header = ({ path }: HeaderType) => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <header style={headerStyles} data-testid="headerContainer">
      <Container maxWidth={false} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <UserContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/68349886?s=400&u=4ae864a122f475f09238d05c9ffbe9822bb57954&v=4"
          alt="My profile on Github"
          data-testid="profileImg"
        />
        <MyName>Gustavo Quintans</MyName>
      </UserContainer>
      <ButtonMenuMobile onClick={() => setMenuActive(true)}>
        <MdMenu size={30} color={'black'} />
      </ButtonMenuMobile>

      <Drawer anchor={"right"} open={menuActive} onClose={() => setMenuActive(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setMenuActive(false)}
          onKeyDown={() => setMenuActive(false)}
        >
          <ListLink icon={<MdMenu />} text={"Home"} link={"/home"} ></ListLink>
          <ListLink icon={<MdMenu />} text={"Projetos"} link={"/projetos"}></ListLink>

          {/* Button */}
          <ListLink icon={<MdMenu />} text={"Contato"} link={"/contato"}></ListLink>
          <Divider />
        </Box>
      </Drawer>

      <Menu>
        <SelectedLinkMenu color={path == '/home'? "#999ED7": "#18181A"} href={'/'} data-testid="menuElements">Inicio</SelectedLinkMenu>
        <SelectedLinkMenu color={path == '/projetos'? "#999ED7": "#18181A"} href={'/projetos'} data-testid="menuElements">Projetos</SelectedLinkMenu>
        <Divider orientation='vertical' style={{ width: '2px', background: '#252527', height: '48px', margin: '0 50px' }}/>
        <ButtonHeader variant="contained" href={'/contato'}> Solicitar Orçamento</ButtonHeader>
      </Menu>
      </Container>
    </header>
  )
}

export default Header