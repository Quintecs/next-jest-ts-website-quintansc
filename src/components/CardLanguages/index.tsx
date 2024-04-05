import { Button, Grid } from "@mui/material";
import { ContainerCardLanguage, SkillsContainer } from "./styles";

const CardLanguage = ({ icon, link, infos, theme }: any) => {
  return (
    <SkillsContainer
      item
      sm={12}
      md={12}
      lg={2.9}
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
      <ContainerCardLanguage maxWidth={false}>
        <p style={{ color: theme.colorBackgroundIcon }}>{infos.textContent}</p>
        <Button
          variant="contained"
          style={{ backgroundColor: theme.colorBackgroundIcon, color: "black" }}
          href={link.link}
        >
          {" "}
          Abrir Documentação{" "}
        </Button>
      </ContainerCardLanguage>
    </SkillsContainer>
  );
};

export default CardLanguage;
