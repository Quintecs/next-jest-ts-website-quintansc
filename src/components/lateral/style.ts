import styled from 'styled-components';

const NavElements = styled.nav`
    position: fixed;
    background-color: #FFF;
    padding: 12px;
    display: flex;
    flex-direction: column;
    top: 35%;
    height: 230px;
    justify-content: space-around;
    @media (max-width: 600px){
        top: 25%;
        padding: 10px;
        height: 215px;
    }
`

export {
    NavElements
}