import Head from "next/head";
import { InfosContainer, HeadingAnimado, SkillsContainer } from "../../styles/home";
import { RowContainer } from '../../styles/style';
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Quintec</title>
        <link rel="icon" href="/desenvolvedor1.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Um portifólio vasto com diversas referências para quem é Desenvolvedor Front-End" />
        <meta name="keywords" content="Desenvolvedor,Programador,frontend,Front-end,JS,Portifólio,desenvolvimento,referencias,design" />
        <meta name="robots" content="index, follow" />
      </Head>
    
      <Container maxWidth={false} style={{ 
        overflow: "hidden", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        boxShadow: "2px 2px 2px 3px rgba(5, 10, 15, 0.2)"
      }}>
        <Grid container xs={12} style={{ padding: '0 50px', marginTop: '80px'}}>
          <Grid xs={6}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={'/iconCode.png'} height={40} alt={"imagem content"}  /> 
              <Grid style={{ marginLeft: '25px', lineHeight: '9px'}}> 
                <h3 style={{ fontFamily: 'Public Sans ', color: '#999ED7'}}>Hello World /> </h3>
                <p> Meu nome é Gustavo Quintans 👋</p>
              </Grid>
            </div>

            <div>
              <h1 style={{ fontFamily: 'Public Sans ', fontSize: '64px', fontWeight: '300'}}>Front-end DEV</h1>
              <p style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '14px'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <a href="#" style={{ color: '#999ED7'}}> classical Latin literature </a> from 45 BC, making it over 2000 years old.</p>
            </div>
          </Grid>
          <Grid xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}><img src={'/homeContent.png'} alt={"imagem content"}  /></Grid>
        </Grid>
        <HeadingAnimado>Frontend Developer - Design - Typescript Developer.</HeadingAnimado>
        <InfosContainer>
          <h2>Hello World</h2>
          <p>You're welcome to my profile. my name is Gustavo Quintans, I'm Javascript and Typescript Developer.</p>
          <p>Specialist in ReactJS and NodeJs</p>
        </InfosContainer>
        <InfosContainer>
          <h2>My skills</h2>
          <RowContainer>
            <SkillsContainer>
              <h3>NodeJS</h3>
              <FaNodeJs size={65} color={'#3c873a'} />
              <Link href={"https://nodejs.org/en/"}>Node Documentation</Link>
            </SkillsContainer>

            <SkillsContainer>
              <h3>ReactJS</h3>
              <FaReact size={65} color={'#61DBFB'} />
              <Link href={"https://pt-br.reactjs.org/"}>React Documentation</Link>
            </SkillsContainer>

            <SkillsContainer>
              <h3>NextJS</h3>
              <SiNextdotjs size={65} color={'black'} />
              <Link href={"https://nextjs.org/"}> Documentation</Link>
            </SkillsContainer>
          </RowContainer>
        </InfosContainer>
      </Container>
    </>
  )
}

export default Home;