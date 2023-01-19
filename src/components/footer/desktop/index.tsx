import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import SocialIconsComponent from "src/components/lateral";
import { GridNormal } from "../style";

const DesktopFooter = () => {
  return (
    <footer>
      <Container maxWidth={false}>
        <Grid container spacing={4} margin={"0 0 0 -30px"} style={{ justifyContent: "center"}} padding={"20px"}>
          <Grid xs={9.5} style={{ alignItems: 'center', display: 'flex'}}><strong>Quintec</strong></Grid>
          <Grid item={true} xs={2}><SocialIconsComponent /></Grid> <br></br>
          <Grid xs={12}><br/></Grid>
          <Grid item={true} xs={8} style={{ paddingTop: "0px"}}><strong>All Rights Reserved to Gustavo Quintans - 2023.</strong></Grid>
          <GridNormal container xs={4}>
            <Grid item={true} xs={1}><Link href={'/home'}>Inicio</Link></Grid>
            <Grid item={true} xs={1}><Link href={'/'}>Projetos</Link></Grid>
            <Grid item={true} xs={1}><Link href={'/'} >Contato</Link></Grid>          
          </GridNormal>
          <Grid item={true} xs={12}><p style={{ color: "#49494D" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</p></Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default DesktopFooter;