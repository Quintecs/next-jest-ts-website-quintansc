import { useState } from 'react'
import { MdMenu } from '../../utils/icons';

import  Link  from 'next/link'
import { MyName, ProfileImage, UserContainer, Menu, MenuMobile, ButtonMenuMobile } from './style'

const headerStyles = {
    display: 'flex', 
    justifyContent: 'space-between', 
    margin: '10px 20px', 
    alignItems: 'center'
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
            <MenuMobile aria-checked={menuActive}>
                <Link href={'/'} onClick={()=>setMenuActive(false)} data-testid="menuElements">Home</Link>
                <Link href={'/sobre'} onClick={()=>setMenuActive(false)} data-testid="menuElements">Sobre</Link>
                <Link href={'/projetos'} onClick={()=>setMenuActive(false)} data-testid="menuElements">Projetos</Link>
                <Link href={'/contato'} onClick={()=>setMenuActive(false)} data-testid="menuElements">Contato</Link>
            </MenuMobile>

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