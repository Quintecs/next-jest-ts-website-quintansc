import { ImageComponent } from "./style";

const ImageCustom = (props: any) => {
    return( props.widh && props.heigt ? <ImageComponent {...props} /> : <img src={props.src.src}  width={props.src.width} height={props.src.height} alt={props.alt} /> )
}

export default ImageCustom;