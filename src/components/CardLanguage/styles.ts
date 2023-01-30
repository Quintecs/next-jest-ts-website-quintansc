import { Grid } from "@mui/material";
import styled from "styled-components"

const SkillsContainer = styled(Grid)`
  background-color: #555;

  .MuiGrid-root.MuiGrid-item{
    display: flex;
    flex-direction: row;
  }
`

export {
    SkillsContainer,
}