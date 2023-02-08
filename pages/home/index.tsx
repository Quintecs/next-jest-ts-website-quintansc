import Head from "next/head";
import { InfosContainer, ContainerCustom, GridContainer, BtnSeeMore, TitleH2, GridHeadPageContent, ImageGrid } from "../../styles/home";
import { Grid } from "@mui/material";
import { HiOutlineArrowDown, FaReact, FaNodeJs, SiNextdotjs } from "../../src/utils/icons";
import { useState } from 'react';
import axios from 'axios';
import UserComponent from "src/components/userComponent";
import CardLanguage from "src/components/CardLanguage";

export async function getStaticProps() {
  const result = await axios.get('https://api.github.com/users/quintansc').then(res => res)
  const gitUser = await result.data;

  return {
    props: {
      gitUser,
    },
  }
}

const Home = ({ gitUser }: any) => {
  const [user] = useState(gitUser);
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

      <ContainerCustom maxWidth={false}>
        <GridContainer container>
          <GridHeadPageContent item={true} xs={6}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={'/iconCode.png'} height={40} alt={"imagem content"} />
              <Grid item={true} style={{ marginLeft: '25px', lineHeight: '9px' }}>
                <h3 style={{ fontFamily: 'Public Sans ', color: '#999ED7' }}>Hello World /&gt; </h3>
                <p> Meu nome é Gustavo Quintans 👋</p>
              </Grid>
            </div>

            <div>
              <TitleH2>Front-end DEV</TitleH2>
              <p style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '14px' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <a href="#" style={{ color: '#999ED7' }}> classical Latin literature </a> from 45 BC, making it over 2000 years old.</p>
              <BtnSeeMore variant="text" endIcon={<HiOutlineArrowDown color="#10BB83" />}>
                Veja mais
              </BtnSeeMore>
            </div>
          </GridHeadPageContent>
          <ImageGrid item={true} xs={6}>
            <img src={'/homeContent.png'} alt={"imagem content"} />
          </ImageGrid>
          <Grid item={true} xs={12}> <UserComponent user={user} /></Grid>
        </GridContainer>
        <InfosContainer>
          <h2>Hello World</h2>
          <p>You're welcome to my profile. my name is Gustavo Quintans, I'm Javascript and Typescript Developer.</p>
          <p>Specialist in ReactJS and NodeJs</p>
        </InfosContainer>
        <InfosContainer>
          <img src="/skills.png" alt="My skills"></img>
          <h2>Minhas Habilidades</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          <Grid container style={{ justifyContent: 'space-between' }}>
            <CardLanguage
              theme={{ colorBackgroundIcon: '#10BB83', cardBackgroundColor: '#162825', cardBackroundTitleColor: '#3E6E66' }}
              infos={{
                title: 'NodeJS',
                subtitle: 'Back-end Framework',
                subscription: 'Node Documentation',
                textContent: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC45 BC'
              }}
              icon={<FaNodeJs size={65} color={'#3c873a'} />}
              link={{ link: 'https://nodejs.org/en/' }} 
              key={null} type={""} props={undefined} 
            />
            <CardLanguage
              theme={{ colorBackgroundIcon: '#17A2DE', cardBackgroundColor: '#1A3846', cardBackroundTitleColor: '#285676' }}
              infos={{
                title: 'ReactJs',
                subtitle: 'Front-end Framework',
                subscription: 'React Documentation',
                textContent: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC45 BC'
              }}
              icon={<FaReact size={65} color={'#61DBFB'} />}
              link={{ link: 'https://pt-br.reactjs.org/' }}
              key={null} type={""} props={undefined}
            />
            <CardLanguage
              theme={{ colorBackgroundIcon: '#F4F4F4', cardBackgroundColor: '#1D1D1F', cardBackroundTitleColor: '#DAD9DE', textTitleColor: '#18181A' }}
              infos={{
                title: 'NextJs',
                subtitle: 'Front-end Framework',
                subscription: 'Next Documentation',
                textContent: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC45 BC'
              }}
              icon={<SiNextdotjs size={65} color={'black'} />}
              link={{ link: 'https://nextjs.org/' }}
              key={null} type={""} props={undefined} />
          </Grid>
        </InfosContainer>
      </ContainerCustom>
    </>
  )
}

export default Home;