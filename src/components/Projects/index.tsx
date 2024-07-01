import { Container, Grid } from '@mui/material'
import { HiOutlineArrowSmRight } from '../../utils/icons'
import { ButtonFlag, ButtonLink, FragContainer, GridContainerLinks, Title, PStyled } from './style'
import Link from 'next/link'
import { ImageComponent } from '../ImageComponent/style'
import SkeletonProject from './SkeletonProjects'

const Project = (props: ProjectComponent)=>{
    if(!props) {
        return <SkeletonProject/>
    }
    const { title, description, urlImage, flags = [], projectUrl } = props;
    return (
        <FragContainer>
            <ImageComponent src={urlImage} width={1600} height={375} alt={'project'}/>
            <Container>
                <Grid  container>
                    <Grid item lg={6}>
                        <Title>{title}</Title>
                        <PStyled>{description}</PStyled>
                    </Grid>
                    <GridContainerLinks item lg={6}>
                        <Grid item>
                            {flags.map((flag, index)=>{
                                return <ButtonFlag key={index} variant='outlined'>{flag}</ButtonFlag>
                            })}
                        </Grid>
                        <Grid item>
                            <ButtonLink endIcon={<HiOutlineArrowSmRight/>}> <Link href={projectUrl}>Acessar projeto completo  </Link></ButtonLink>
                        </Grid>
                    </GridContainerLinks>           
                </Grid>
             </Container> 
        </FragContainer>
    )
}

export default Project