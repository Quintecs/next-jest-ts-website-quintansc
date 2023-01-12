import { useState } from 'react'
import { MdMenu } from '../../utils/icons';

import  Link  from 'next/link'
import { MyName, ProfileImage, UserContainer, Menu, ButtonMenuMobile } from './style'
import { Box, Divider, Drawer } from '@mui/material';
import ListLink from '../ListLink';

const headerStyles = {
    display: 'flex', 
    justifyContent: 'space-between', 
    margin: '10px 20px', 
    alignItems: 'center',
    marginTop: '20px',
    boxShadow: "2px 2px 2px 3px rgba(202, 202, 202, 0.127)",
    border: "1px solid transparent",
    borderRadius: "10px"
}



const Header = ()=>{
    const [menuActive, setMenuActive] = useState(false)
    return (
        <header style={headerStyles} data-testid="headerContainer">
            <UserContainer>
                <ProfileImage 
                    src="https://avatars.githubusercontent.com/u/68349886?s=400&u=4ae864a122f475f09238d05c9ffbe9822bb57954&v=4" 
                    alt="My profile on Github" 
                    data-testid="profileImg"
                />
                <MyName>Gustavo Quintans</MyName>
            </UserContainer>
            <ButtonMenuMobile onClick={()=>setMenuActive(true)}> 
                <MdMenu size={30} color={'black'}/>
            </ButtonMenuMobile>

            <Drawer anchor={"right"} open={menuActive} onClose={()=>setMenuActive(false)}>
                <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={()=>setMenuActive(false)}
                onKeyDown={()=>setMenuActive(false)}
                >
                    <ListLink icon={<MdMenu/>} text={"Home"} link={"/home"}></ListLink>
                    <ListLink icon={<MdMenu/>} text={"Sobre"} link={"/sobre"}></ListLink>
                    <ListLink icon={<MdMenu/>} text={"Projetos"} link={"/projetos"}></ListLink>
                    <ListLink icon={<MdMenu/>} text={"Contato"} link={"/contato"}></ListLink>
                    <Divider />
                </Box>
            </Drawer>

            <Menu>
                <Link href={'/'} data-testid="menuElements">Home</Link>
                <Link href={'/sobre'} data-testid="menuElements">Sobre</Link>
                <Link href={'/projetos'} data-testid="menuElements">Projetos</Link>
                <Link href={'/contato'} data-testid="menuElements">Contato</Link>
            </Menu>
        </header>
    )
}

export default Header