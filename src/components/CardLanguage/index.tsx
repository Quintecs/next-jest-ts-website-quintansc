import { Button, Container, Grid } from "@mui/material";
import { SkillsContainer } from "./styles";

const CardLanguage = ({ icon, link, infos, theme }: CardLanguageType) => {
  return (
    <SkillsContainer
      item
      xs={3.5}
      style={{ backgroundColor: theme.cardBackgroundColor }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: theme.colorBackgroundIcon,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: theme.cardBackroundTitleColor,
          }}
        >
          <h2
            style={{
              margin: "15px  0px 3px 5px",
              color: theme?.textTitleColor,
            }}
          >
            {infos.title}
          </h2>
          <p
            style={{ margin: "3px 0px 15px 5px", color: theme?.textTitleColor }}
          >
            {infos.subtitle}
          </p>
        </Grid>
      </Grid>
      <Container maxWidth={false} style={{ margin: "16px 0px" }}>
        <p style={{ color: theme.colorBackgroundIcon }}>{infos.textContent}</p>
        <Button
          variant="contained"
          style={{ backgroundColor: theme.colorBackgroundIcon, color: "black" }}
          href={link.link}
        >
          {" "}
          Abrir Documentação{" "}
        </Button>
      </Container>
    </SkillsContainer>
  );
};

export default CardLanguage;
