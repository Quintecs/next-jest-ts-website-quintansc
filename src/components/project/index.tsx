import { Container, Grid } from '@mui/material'
import Image from 'next/image'
import { HiOutlineArrowSmRight } from '../../utils/icons'
import { ButtonFlag, ButtonLink, FragContainer, GridContainerLinks, Title } from './style'

const Project = (props: ProjectComponent)=>{
    const { title, description, urlImage, flags } = props;
    return (
        <FragContainer>
            <Image src={urlImage} width={1600} height={375} alt={'project'}/>
            <Container>
                <Grid  container>
                    <Grid item lg={6}>
                        <Title>{title}</Title>
                        <p>{description}</p>
                    </Grid>
                    <GridContainerLinks item lg={6}>
                        <Grid item>
                            {flags.map((flag, index)=>{
                                return <ButtonFlag key={index} variant='outlined'>{flag}</ButtonFlag>
                            })}
                        </Grid>
                        <Grid item>
                            <ButtonLink endIcon={<HiOutlineArrowSmRight/>}> Acessar projeto completo </ButtonLink>
                        </Grid>
                    </GridContainerLinks>           
                </Grid>
             </Container> 
        </FragContainer>
    )
}

export default Project