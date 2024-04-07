import { Grid } from "@mui/material";
import Link from "next/link";
import SocialIconsComponent from "../Laterals";
import { GridNormal } from "./style";

const Footer = (): React.ReactElement => {
  return (
    <footer data-testid="footerContainerMobile">
      <Grid container spacing={4} margin={"0 0 0 -30px"} padding={"20px"}>
        <GridNormal container xs={10} key={Math.random()}>
          <Grid item={true} xs={3}><Link href={'/home'}>Inicio</Link></Grid>
          <Grid item={true} xs={3}><Link href={'/projetos'}>Projetos</Link></Grid>
          <Grid item={true} xs={3}><Link href={'/contato'} >Contato</Link></Grid>          
        </GridNormal>
        <Grid item={true} xs={12}><SocialIconsComponent theme={{ backgroundColor: '#1D1D1F', color: '#999ED7'}} /></Grid>
        <Grid item={true} xs={12}><strong style={{ overflowWrap: "break-word", width: "250px", textAlign: "center" }}>All Rights Reserved to Gustavo Quintans - 2023.</strong></Grid>
        <Grid item={true} xs={12}><p style={{ color: "#49494D" }}> Explore nosso portfólio diversificado, onde cada projeto é uma expressão única de criatividade e expertise. De residências elegantes a espaços comerciais inovadores, cada empreendimento é cuidadosamente concebido para atender às necessidades e superar as expectativas dos nossos clientes. Nossa dedicação ao design excepcional e à excelência em execução é evidente em cada detalhe. Explore nossos projetos e descubra como podemos transformar sua visão em realidade. </p></Grid>
      </Grid>
    </footer>
  )
}

export default Footer;