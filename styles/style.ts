import styled from "styled-components"

const RowContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export {
  RowContainer
}