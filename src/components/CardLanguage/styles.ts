import { Container, Grid } from "@mui/material";
import styled from "styled-components"

const SkillsContainer = styled(Grid)`
  background-color: #555;
  height: 270px;

  .MuiGrid-root.MuiGrid-item{
    display: flex;
    flex-direction: row;
  }
`

const ContainerCardLanguage = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 63%;
  text-align: center;
  align-items: center;
`

export {
  SkillsContainer,
  ContainerCardLanguage
}