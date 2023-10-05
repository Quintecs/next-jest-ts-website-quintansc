import Image from "next/image";
import styled from "styled-components";

const ImageComponent = styled(Image).attrs((props: ImageComponentType) => ({
    widt: "",
    heit: "",
  })
)`
  max-width: ${(props) => props.widt};
  max-height:  ${(props) => props.heit};
  width: auto;
  height: auto;
`

export { ImageComponent }