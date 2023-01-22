import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled, { keyframes } from "styled-components"

const InfosContainer = styled.section`
  text-align: center;
  width: 85%;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 15px;
  padding: 25px;
  margin: 10px 0px;
`

const SkillsContainer = styled.aside`
  background-color: ${props => props.color ? props.color : "rgba(255, 230, 200, .25)"};
  border-radius: 15px;
  padding: 25px;
  display:  flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const pisca = keyframes`
  from {
    border-right: 0px solid transparent
  }

  to {
    border-right: 1px solid black
  }
`;


const escrever = keyframes`
  from {
    max-width: 0%;
  }

  to {
    max-width: 100%;
  }
`;

const HeadingAnimado = styled.h1`
  display: inline-block; 
  overflow: hidden;
  white-space: nowrap;
  animation: ${pisca} linear infinite 1s, ${escrever} normal 5s steps(55) both;

  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`
const Panimado = styled.p`
  display: inline-block; 
  overflow: hidden;
  white-space: nowrap;
  animation: ${pisca} linear infinite 1s, ${escrever} normal 10s steps(85) both;

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
  @media (min-width: none;) {
    position: absolute;
  }
`


export {
  Panimado,
  SkillsContainer,
  HeadingAnimado,
  InfosContainer, GridContainer, ContainerCustom, ImageConteiner, TextImageContainer, ButtonTextImageContainer
}