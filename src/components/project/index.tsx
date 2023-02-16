import { Button, Container, Grid } from '@mui/material'
import Image from 'next/image'

const Project = ()=>{
    return (
        <>
            <Image src="/project1.png" width={1600} height={375} alt={'project'}/>
            <Container>
                <Grid container>
                    <Grid item lg={6}>
                        <h2>API de Finanças</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                    </Grid>
                    <Grid item lg={6}>
                    <Grid>
                            <Button>backend</Button>
                            <Button>api</Button>
                            <Button>node</Button>
                    </Grid>
                    <Grid>
                        <Button>Acessar Projeto completo -- </Button>
                    </Grid>
                    </Grid>           
                </Grid>
             </Container> 
        </>
    )
}

export default Project