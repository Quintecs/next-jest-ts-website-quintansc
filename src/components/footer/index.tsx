import { Grid } from "@mui/material";
import { Container, textAlign } from "@mui/system";
import Link from "next/link";
import { GridColumn } from "./style";

const style = {
 display: "flex", 
 justifyContent: "center",
 textAlign: "center"
}

const Footer = () => {
  return (
    <footer style={{ borderColor: "rgba(255, 255, 255, 0.2)", height: "100%" }}>
      <Container style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid container xs={12} style={style}>
            <Grid item xs={3}>QuintansTec</Grid>
            <Grid item xs={3}>Newsletter</Grid>
            <Grid item xs={3}>Explore</Grid>
          </Grid>
          <GridColumn item xs={4}>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
          </GridColumn>
          <GridColumn item xs={4}>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
          </GridColumn>
          <GridColumn item xs={4}>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
            <Link href={"/"}>Teste</Link>
          </GridColumn>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;