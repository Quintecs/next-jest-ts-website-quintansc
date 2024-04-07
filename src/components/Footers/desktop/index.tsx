import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import SocialIconsComponent from "@/components/Laterals";
import { GridNormal } from "../style";

const DesktopFooter = (): React.ReactElement => {
  return (
    <footer data-testid='footerContainerDesktop'>
      <Container maxWidth={false}>
        <Grid container spacing={4} margin={"0 0 0 -30px"} style={{ justifyContent: "center"}} padding={"20px"}>
          <Grid item={true} xs={9.5} style={{ alignItems: 'center', display: 'flex'}}><strong>Quintec</strong></Grid>
          <Grid item={true} xs={2}><SocialIconsComponent theme={{ backgroundColor: '#1D1D1F', color: '#999ED7'}} /></Grid> <br></br>
          <Grid item={true} xs={12}><br/></Grid>
          <Grid item={true} xs={8} style={{ paddingTop: "0px"}}><strong>All Rights Reserved to Gustavo Quintans - 2023.</strong></Grid>
          <GridNormal item xs={4}>
            <Grid item={true} xs={1}><Link href={'/home'}>Inicio</Link></Grid>
            <Grid item={true} xs={1}><Link href={'/projetos'}>Projetos</Link></Grid>
            <Grid item={true} xs={1}><Link href={'/contato'} >Contato</Link></Grid>          
          </GridNormal>
          <Grid item={true} xs={12}><p style={{ color: "#49494D" }}>Explore nosso portfólio diversificado, onde cada projeto é uma expressão única de criatividade e expertise. De residências elegantes a espaços comerciais inovadores, cada empreendimento é cuidadosamente concebido para atender às necessidades e superar as expectativas dos nossos clientes. Nossa dedicação ao design excepcional e à excelência em execução é evidente em cada detalhe. Explore nossos projetos e descubra como podemos transformar sua visão em realidade. </p></Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default DesktopFooter;