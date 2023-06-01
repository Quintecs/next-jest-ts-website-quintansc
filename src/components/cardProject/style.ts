import styled from "styled-components"

const FlagsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    margin: 0;
  }
`

const CardProjectContainer = styled.a`
  max-width: 375px;
  margin: 0 10px;

  p{ color: #49494D; }
`

export {
  FlagsContainer,
  CardProjectContainer,
}