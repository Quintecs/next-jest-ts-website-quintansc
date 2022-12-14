import styled, { keyframes } from "styled-components"
const HomeContainer = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
  height: 100%;
`

const InfosContainer = styled.section`
  text-align: center;
  width: 70%;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 15px;
  padding: 25px;
`

const SkillsContainer = styled.aside`
  background-color: ${props => props.color ? props.color : "rgba(255, 230, 200, .25)"};
  border-radius: 15px;
  padding: 25px;
  display:  flex;
  flex-direction: column;
  width: 260px;
  justify-content: center;
  align-items: center;
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
`
const Panimado = styled.p`
  display: inline-block; 
  overflow: hidden;
  white-space: nowrap;
  animation: ${pisca} linear infinite 1s, ${escrever} normal 10s steps(85) both;

`


export {
  Panimado,
  SkillsContainer,
  HeadingAnimado,
  HomeContainer,
  InfosContainer
}