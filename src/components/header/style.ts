import styled from 'styled-components';

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`

const MyName = styled.span`
    font-size: 20px;
    color: #000;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px;
`

const Menu = styled.nav`
    display: flex;
    width: 300px;
    justify-content: space-evenly;
    a{
        color: #000;
        text-decoration: none;
    } 
    @media (max-width: 600px){
        display: none;
    }
`
   


const ButtonMenuMobile = styled.button`
    width: auto;
    height: auto;
    padding: 0;
    background-color: transparent;
    border: 0;
    @media (min-width: 600px) {
        display: none;
    }
`

export {
    ProfileImage,
    MyName,
    UserContainer,
    Menu,
    ButtonMenuMobile
}