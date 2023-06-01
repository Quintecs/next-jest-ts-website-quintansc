import Image from "next/image"
import Flag from "../flags"
import { CardProjectContainer, FlagsContainer } from "./style";

const CardProject = (props: CardProjectProps) => {
    const data = new Date(props.project.created_at)
    return (
         <CardProjectContainer href={`/projetos/${props.project.name}`}>
            <Image src={props.src} alt="" width={375} height={375}></Image>
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