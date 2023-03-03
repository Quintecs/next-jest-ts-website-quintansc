import { Grid } from "@mui/material";
import Link from "next/link";
import SocialIconsComponent from "../lateral";
import { GridNormal } from "./style";

const Footer = (): React.ReactElement => {
  return (
    <footer data-testid="footerContainer">
      <Grid container spacing={4} margin={"0 0 0 -30px"} padding={"20px"}>
        <GridNormal container xs={10} key={Math.random()}>
          <Grid item={true} xs={3}><Link href={'/home'}>Inicio</Link></Grid>
          <Grid item={true} xs={3}><Link href={'/projetos'}>Projetos</Link></Grid>
          <Grid item={true} xs={3}><Link href={'/contato'} >Contato</Link></Grid>          
        </GridNormal>
        <Grid item={true} xs={12}><SocialIconsComponent theme={{ backgroundColor: '#1D1D1F', color: '#999ED7'}} /></Grid>
        <Grid item={true} xs={12}><strong style={{ overflowWrap: "break-word", width: "250px", textAlign: "center" }}>All Rights Reserved to Gustavo Quintans - 2023.</strong></Grid>
        <Grid item={true} xs={12}><p style={{ color: "#49494D" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</p></Grid>
      </Grid>
    </footer>
  )
}

export default Footer;