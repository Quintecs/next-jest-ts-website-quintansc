import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components"

const InfosContainer = styled.section`
  text-align: center;
  width: 85%;
  background-color: 'transparent';

  border-radius: 15px;
  padding: 25px;
  margin: 10px 0px;
`

const GridContainer =  styled(Grid)`
  flex-direction: column;
 @media (min-width: 800px) {
  flex-direction: initial;
  padding: 0 50px;
  margin-top: 80px;
 }

 .MuiGrid-item .MuiGrid-grid-xs-6 div {
    @media (min-width: 800px) {
      display: flex;
      align-items: center;
    }
 }
`

const ContainerCustom = styled(Container)`
  overflow: hidden;
  flex-direction: column; 
  align-items: center;
  box-shadow: 2px 2px 2px 3px rgba(5, 10, 15, 0.2);
  @media (min-width: 800px) {
    display: flex;
  }
`

const ImageConteiner = styled.div`
  margin-top: 180px;
  display: flex;
  align-items: center;
`

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  
`

const ButtonTextImageContainer = styled(Button)`
  border-left: 1px solid #10BB83; 
  color: white; 
  background: transparent; 
   
  bottom: 0;
  @media (min-width: none) {
    position: absolute;
  }
`

const BtnSeeMore = styled(Button)`
  border-left: 1px solid #10BB83;
  color: white; 
  background: transparent; 
  top: 325px;
  @media (min-width: 800px) {
    top: 80px;
  }
`

const TitleH2 = styled.h1`
  font-family: 'Public Sans ';
  font-size: 42px;
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 64px;
  }
`

const GridHeadPageContent = styled(Grid)`
  @media (max-width: 800px) {
    position: relative; 
    min-width: 100%;
  }
`

const ImageGrid = styled(Grid)`
  justify-content: center;
  display: flex;
  @media (max-width: 800px) {
    display: flex; 
    align-items: center;
    justify-content: flex-end; 
    min-width: 100%;
    img{
      width: 100%;
    } 
  }
`



export {
  BtnSeeMore, TitleH2, GridHeadPageContent,
  InfosContainer, GridContainer, ContainerCustom, ImageConteiner, 
  TextImageContainer, ButtonTextImageContainer, ImageGrid
}