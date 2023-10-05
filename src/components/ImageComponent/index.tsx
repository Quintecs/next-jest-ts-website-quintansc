import { ImageComponent } from "./style";

const ImageCustom = (props: any) => {
    return( props.widh && props.heigt && props.src !as string ? 
        <ImageComponent {...props} /> : 
        <img 
            src={props.src.src}  
            width={props.width} 
            height={props.height} 
            alt={props.alt} 
        />
    )
}

export default ImageCustom;