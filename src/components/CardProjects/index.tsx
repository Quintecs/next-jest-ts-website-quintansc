import Flag from "../Flag"
import { CardProjectContainer, FlagsContainer } from "./style";
import ImageCustom from "../ImageComponent";

const CardProject = (props: CardProjectProps) => {
    const data = new Date(props.project.created_at)
    return (
         <CardProjectContainer href={`/projetos/${props.project.name}`}>
            <ImageCustom src={props.src} style={{ width: '375px', height: '375px'}} alt="" widh={375} heigt={375}/>
            <h2> {props.project.name} </h2>
            <p>{props.project.description}</p>
            <FlagsContainer> 
                <Flag type={props.flag} /> 
                <p>{data.toLocaleDateString()}</p>
            </FlagsContainer>
        </CardProjectContainer>
    )
}

export default CardProject;