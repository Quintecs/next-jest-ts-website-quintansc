import styled from 'styled-components';

const NavElements = styled.nav`
    display: flex;
    justify-content: space-around;
    @media (max-width: 600px){
        margin-left: -20px;
        padding: 10px;
        width: 250px;
    }

    a{
        background-color: #18181A;
        box-shadow: 2px 2px 2px 1px #1D1D1F;
        padding: 8px;
        border-radius: 8px;
    }
`

export {
    NavElements
}