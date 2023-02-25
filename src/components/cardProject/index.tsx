import Image from "next/image"
import Flag from "../flags"
import { CardProjectContainer, FlagsContainer } from "./style";

const CardProject = (props: CardProjectProps) => {
    return (
         <CardProjectContainer>
            <Image src='/projectCard.png' alt="" width={375} height={375}></Image>
            <h2> {props.name} </h2>
            <p>{props.description}</p>
            <FlagsContainer> 
                <Flag type={props.flag} /> 
                <p>09/12/2022</p>
            </FlagsContainer>
        </CardProjectContainer>
    )
}

export default CardProject;