import { Grid } from "@mui/material"
import styled from "styled-components"

const GridItemContact = styled(Grid)`
  background-color: #1D1D1F ;
  padding: 50px;
  border-radius: 8px;
  border: 2px solid #252527;
  min-width: 475px;
  .MuiTextField-root, .MuiButton-contained{
    margin: 16px 0;
    color: #F4F4F4;
  }
  fieldset{
    border: 1px solid #F4F4F4;
  }
  .MuiOutlinedInput-root.MuiInputBase-colorInfo:hover{
    fieldset{
      border: 1px solid #F4F4F4;
    }
  }
  label{
    color: #F4F4F4
  }
  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #49494D;
  }

  button {
    padding: 13px;
  }

  @media (max-width: 800px) {
    min-width: 0;
  }
`

export {
  GridItemContact
}