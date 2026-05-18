import Link from "next/link"
import styled from "styled-components"

const FlagsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    margin: 0;
  }
`

const CardProjectContainer = styled(Link as any)`
  max-width: 430px;
  margin: 0 10px;

  p{ color: #49494D; }
`

export {
  FlagsContainer,
  CardProjectContainer,
}
