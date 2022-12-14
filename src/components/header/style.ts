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

const MenuMobile = styled.div`
    display: flex;
    width: 140px;
    flex-direction: column;  
    background-color: rgba(250, 250, 250, 0.96);
    position: fixed;
    top: 0px;
    right: ${(props)=>props['aria-checked']? 0 :'-150px'};
    height: 100%;
    transition: ease right .5s;   
    a{
        margin-top: 45px;
        text-align: center;
        color: black;
        text-decoration: none;
        :focus-within{
            background-color: transparent;
        }
    }

    @media (min-width: 600px){
        display: none;
    }
`

export {
    ProfileImage,
    MyName,
    UserContainer,
    Menu,
    ButtonMenuMobile,
    MenuMobile
}