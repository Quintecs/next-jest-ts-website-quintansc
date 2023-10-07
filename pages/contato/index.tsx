import { ContainerCustom, GridContainer } from "../../styles/global";
import { GridItemContact } from "../../styles/contato";
import { Button, FormGroup, Grid } from "@mui/material";
import Head from "next/head";
import { AiOutlineUser, BsTelephone, HiOutlineMail, RiSendPlaneFill } from "../../src/utils/icons";
import { IconTextField } from "@/components/IconTextFields";
import ImageCustom from "@/components/ImageComponent";
import { ContactIcon } from "../../src/images";

const Contato = () => {
    return (
        <>
            <Head>
                <title>Contato | Quintec</title>
                <link rel="icon" href="/desenvolvedor1.ico" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Um portifólio vasto com diversas referências para quem é Desenvolvedor Front-End" />
                <meta name="keywords" content="Desenvolvedor,Programador,frontend,Front-end,JS,Portifólio,desenvolvimento,referencias,design" />
                <meta name="robots" content="index, follow" />
            </Head>

            <ContainerCustom maxWidth={false}>
                <GridContainer style={{ textAlign: 'center' }}>
                    <ImageCustom src={ContactIcon} alt="" width={62} height={62} />
                    <h1>Entre em contato</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                    <Grid container style={{ textAlign: "center", justifyContent: 'space-between', marginBottom: '100px', alignItems: 'flex-start' }}>
                        <GridItemContact item lg={5}>
                            <h2>Preencha o formulário</h2>
                            <p>Iremos entrar em contato assim que possível.</p>
                            <FormGroup>
                                <IconTextField color="info" variant="outlined" label="Seu nome" iconEnd={<AiOutlineUser color="#F4F4F4"/>} />
                                <IconTextField color="info" label="Digite seu e-mail" iconEnd={<HiOutlineMail color="#F4F4F4"/>} />
                                <IconTextField color="info" label="Número com DDD" iconEnd={<BsTelephone color="#F4F4F4"/>} />
                                <Button startIcon={<RiSendPlaneFill />} variant="contained"> Enviar solicitação</Button>
                            </FormGroup>
                        </GridItemContact>
                        <GridItemContact item lg={5}>
                            <h2>Contato via Whatsapp</h2>
                            <p>Entre em contato diretamente comigo via Whatsapp</p>
                            <Button fullWidth startIcon={<RiSendPlaneFill/>} color="secondary" variant="contained"> Enviar Mensagem </Button>
                            <p>Horário de Atendimento:</p>
                            <p>Segunda a sexta das 8:00 às 19:00</p>
                            <p>Sábado e domigo das 10:00 às 16:00</p>
                        </GridItemContact>
                    </Grid>
                </GridContainer>
            </ContainerCustom>
        </>
    )
}

export default Contato;