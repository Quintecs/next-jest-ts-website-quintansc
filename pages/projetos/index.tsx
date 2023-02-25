import { ContainerCustom, GridContainer } from "../../styles/global";
import { Grid } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import CardProject from "src/components/cardProject";

const Projetos = () => {
    return (
        <>
            <Head>
                <title>Projetos | Quintec</title>
                <link rel="icon" href="/desenvolvedor1.ico" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Um portifólio vasto com diversas referências para quem é Desenvolvedor Front-End" />
                <meta name="keywords" content="Desenvolvedor,Programador,frontend,Front-end,JS,Portifólio,desenvolvimento,referencias,design" />
                <meta name="robots" content="index, follow" />
            </Head>

            <ContainerCustom maxWidth={false}>
                <GridContainer style={{ textAlign: 'center' }}>
                    <Image src='/contactIcon.png' alt="" width={62} height={62} />
                    <h1>Entre em contato</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                    <Grid container style={{ flexDirection: "row" }}>
                       <CardProject 
                            name= "Aplicativo de Sistemas WebMais"
                            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...' 
                            flag="front"
                        />
                       <CardProject
                            name= "API de Finanças"
                            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...' 
                            flag="back"
                        />
                       <CardProject 
                            name= "Blog para Digital Influencer"
                            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...' 
                            flag="front"
                       />
                    </Grid>
                </GridContainer>
            </ContainerCustom>
        </>
    )
}

export default Projetos;