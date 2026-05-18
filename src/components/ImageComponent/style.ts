import Image from "next/image";
import styled from "styled-components";

const ImageComponent = styled(Image as any)`
  max-width: ${(props) => props.width};
  max-height:  ${(props) => props.height};
  width: auto;
  height: auto;
`

export { ImageComponent }
