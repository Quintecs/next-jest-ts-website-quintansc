import { Grid } from "@mui/material"
import styled from "styled-components"

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
`

const GridProject = styled(Grid)`
 flex-direction: row;

 @media (max-width: 800px) {
    justify-content: space-between; 
    height: 245vh; 
 }
`

export {
  GridProject,
  HomeContainer
}