import { Button, Grid } from '@mui/material';
import styled from 'styled-components';

const FragContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 32px;
    .MuiContainer-root {
        @media (min-width: 1300px) {
            max-width: 1450px;
        }
    }
`

const Title = styled.h2`
`

const PStyled = styled.p`
    line-break: anywhere;
    max-width: 100%;
`;


const ButtonFlag = styled(Button)`
    border-color: #DAD9DE;
    color: #DAD9DE;
`

const ButtonLink = styled(Button)`
    color: #10BB83;
    &:hover{
        background-color: transparent;
        text-decoration: underline;
    }
`

const GridContainerLinks = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 16px 0;
    gap: 16px;
`

export {
    ButtonFlag,
    Title,
    ButtonLink,
    FragContainer,
    GridContainerLinks,
    PStyled
}