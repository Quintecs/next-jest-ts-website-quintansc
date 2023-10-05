import styled from 'styled-components';

const NavElements = styled.nav`
    display: flex;
    justify-content: ${props => props.theme.justify ? props.theme.justify : 'space-between'};
    margin-left: ${props => props.theme.justify ? '20px' : '0'};

    @media (max-width: 600px){
        margin-left: -20px;
        padding: 10px;
        width: 250px;
    }

    a{
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: 2px 2px 2px 1px ${props => props.theme.backgroundColor};
        padding: 8px;
        border-radius: 8px;

        height: ${props => props.theme.size};
        width: ${props => props.theme.size};
        display: flex;
        justify-content: center;
        align-items: center;

    }
`

export {
    NavElements
}