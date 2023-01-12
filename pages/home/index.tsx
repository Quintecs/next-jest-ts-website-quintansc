import Head from "next/head";
import { InfosContainer, HeadingAnimado, SkillsContainer } from "../../styles/home";
import { RowContainer } from '../../styles/style';
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

import Container from '@mui/material/Container';

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

      <Container style={{ 
        overflow: "hidden", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        boxShadow: "2px 2px 2px 3px rgba(5, 10, 15, 0.2)",
        padding: "50px", 
        margin: "50px"
      }}>
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