import { Grid } from '@mui/material';
import styled from 'styled-components';

const StyledDiv = styled.div`
    @media (max-width: 800px) {
        background-color: #1D1D1F;
    }
`

const ContentUserComponent = styled.div`
    display: flex;
    flex-direction: row; 
    max-height: 250px;
    background-color: #1D1D1F;
    margin-top: 60px;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

const ImageUserComponent = styled.img`
    max-width: 275px;
    
    @media (min-width: 800px) {
        max-height: 240px;
    }
    @media (max-width: 800px) {
        max-width: 92vw;
    }
   
`

const TextUserComponent = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        display: none;
    }

`

const DescriptionUserComponent = styled(Grid)`
    display: flex; 
    justify-content: space-between;
    width: 95%;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

export {
    ContentUserComponent,
    TextUserComponent,
    DescriptionUserComponent,
    ImageUserComponent,
    StyledDiv
}