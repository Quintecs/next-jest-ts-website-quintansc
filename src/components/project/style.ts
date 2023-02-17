import { Button, Grid } from '@mui/material';
import styled from 'styled-components';

const FragContainer = styled.div`
    font-family: 'Inter';
    min-height: calc(375px*2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Title = styled.h2`
    font-family: 'Inter';
`
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
    justify-content: space-around;
`

export {
    ButtonFlag,
    Title,
    ButtonLink,
    FragContainer,
    GridContainerLinks
}