import { Button, Grid } from "@mui/material";
import Image from "next/image";
import styled from "styled-components"

const InfosContainer = styled.section`
  text-align: center;
  background-color: 'transparent';
  border-radius: 15px;
  padding: 25px;
  margin: 10px 0px;
  @media (min-width: 800px) {
    width: 98%;
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
`

const TitleH2 = styled.h1`
  font-size: 42px;
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 64px;
  }
`

const GridHeadPageContent = styled(Grid)`
  div:first-child{
    display: flex;
    align-items: center;
  }
  div:last-child{
    margin-left: 25px;
    margin-right: 25px;
  }
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

const ContactContainerImage = styled(Image)`
  width: 100vw;
  height: 500px;
  position: absolute;
  order: 0;
`
const ContactContainer = styled(Grid)`
  h2, p, img:nth-child(2){
    position: relative;
  }
  display: flex;
  gap: 20px;
  width: 100vw;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding: 16px;
  }
`

export {
  BtnSeeMore, TitleH2, GridHeadPageContent,
  InfosContainer, ImageConteiner, 
  TextImageContainer, ButtonTextImageContainer, ImageGrid, ContactContainer, ContactContainerImage
}