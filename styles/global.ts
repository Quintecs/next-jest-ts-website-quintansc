import { Grid, Container } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

const ContainerCustom = styled(Container)`
  overflow: hidden;
  flex-direction: column; 
  align-items: center;
  box-shadow: 2px 2px 2px 3px rgba(5, 10, 15, 0.2);
  @media (min-width: 800px) {
    display: flex;
    
  }
  @media (max-width: 800px) {
    padding: 0 !important;
  } 
`

const GridContainer = styled(Grid)`
  margin-bottom: 100px;
  flex-direction: column;
 @media (min-width: 800px) {
  flex-direction: initial;
  align-items: center;
  padding: 0 50px;
  margin-top: 80px;
 }
`

export {
    GridContainer, ContainerCustom
}