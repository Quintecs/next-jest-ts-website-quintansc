import { Grid } from '@mui/material';
import styled from 'styled-components';

const ContentUserComponent = styled.div`
    display: flex;
    flex-direction: row; 
    max-height: 250px;
    background-color: #1D1D1F;
    margin-top: 60px;
`

const TextUserComponent = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center;

`

const DescriptionUserComponent = styled(Grid)`
    display: flex; 
    justify-content: space-between;
    width: 95%;
`

export {
    ContentUserComponent,
    TextUserComponent,
    DescriptionUserComponent
}