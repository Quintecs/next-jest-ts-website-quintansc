import Head from "next/head";
import { InfosContainer, BtnSeeMore, TitleH2, GridHeadPageContent, ImageGrid, ContactContainer } from "../../styles/home";
import { ContainerCustom, GridContainer } from "../../styles/global";
import { Button, Grid } from "@mui/material";
import { HiOutlineArrowDown, FaReact, FaNodeJs, SiNextdotjs, BsChat } from "../../src/utils/icons";
import { useState } from 'react';
import UserComponent from "@/components/UserComponent";
import CardLanguage from "@/components/CardLanguage";
import ImageCustom from "@/components/ImageComponent";
import Project from "@/components/Project";
import { userRoute } from "src/api";
import { HomeContent, IconCode, PngcontactImage, Pngprojects, Pngskills } from "src/images";

const Home = ({ gitUser }: any) => {
  const [user] = useState(gitUser? gitUser : {
    created_at: '',
    avatar_url: '',
    name: 'string',
    company: 'string',
    bio: 'string',
    location: 'any'
  });
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
            <div>
              <ImageCustom src={IconCode} widh={40} heigt={40} alt={"imagem content"} priority />
              <Grid item={true} style={{ marginLeft: '25px', lineHeight: '9px' }}>
                <h3 style={{ fontFamily: 'Public Sans ', color: '#999ED7' }}>Hello World /&gt; </h3>
                <p> Meu nome é Gustavo Quintans 👋</p>
              </Grid>
            </div>

            <div>
              <TitleH2>Front-end DEV</TitleH2>
              <p style={{ fontFamily: 'Inter', fontWeight: '600', fontSize: '14px' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of <a href="#" style={{ color: '#999ED7' }}> classical Latin literature </a> from 45 BC, making it over 2000 years old.</p>
             
            </div>

          </GridHeadPageContent>
          <ImageGrid item={true} xs={6}>
            <ImageCustom src={HomeContent} alt={"imagem content"}/>
          </ImageGrid>

           <BtnSeeMore variant="text" endIcon={<HiOutlineArrowDown color="#10BB83" />}>
                Veja mais
              </BtnSeeMore>
          <Grid item={true} lg={12}> <UserComponent user={user} /></Grid>
        </GridContainer>
        <InfosContainer>
          <h2>Hello World</h2>
          <p>You're welcome to my profile. my name is Gustavo Quintans, I'm Javascript and Typescript Developer.</p>
          <p>Specialist in ReactJS and NodeJs</p>
        </InfosContainer>
        <InfosContainer>
          <ImageCustom src={Pngskills} alt="My skills"/>
          <h2>Minhas Habilidades</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          <Grid container style={{ justifyContent: 'space-between' }} >
            <CardLanguage
              theme={{ colorBackgroundIcon: '#10BB83', cardBackgroundColor: '#162825', cardBackroundTitleColor: '#3E6E66' }}
              infos={{
                title: 'NodeJS',
                subtitle: 'Back-end Framework',
                subscription: 'Node Documentation',
                textContent: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.'
              }}
              icon={<FaNodeJs size={65} color={'#3c873a'} />}
              link={{ link: 'https://nodejs.org/en/' }}
              key={Math.random()}
            />
            <CardLanguage
              theme={{ colorBackgroundIcon: '#17A2DE', cardBackgroundColor: '#1A3846', cardBackroundTitleColor: '#285676' }}
              infos={{
                title: 'ReactJs',
                subtitle: 'Front-end Framework',
                subscription: 'React Documentation',
                textContent: 'A biblioteca para web e interfaces de usuário nativas baseada em Javascript e Typescript'
              }}
              icon={<FaReact size={65} color={'#61DBFB'} />}
              link={{ link: 'https://pt-br.react.dev' }}
              key={Math.random()}
            />
            <CardLanguage
              theme={{ colorBackgroundIcon: '#F4F4F4', cardBackgroundColor: '#1D1D1F', cardBackroundTitleColor: '#DAD9DE', textTitleColor: '#18181A' }}
              infos={{
                title: 'NextJs',
                subtitle: 'Front-end Framework',
                subscription: 'Next Documentation',
                textContent: 'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.'
              }}
              icon={<SiNextdotjs size={65} color={'black'} />}
              link={{ link: 'https://nextjs.org/' }}
              key={Math.random()} />
          </Grid>
        </InfosContainer>
        <InfosContainer>
          <ImageCustom src={Pngprojects} width={625} height={60} alt="My projects"/>
          <h2>Projetos Selecionados</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
        </InfosContainer>

        <Project 
          title={'API de finanças'} 
          description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`} 
          urlImage="/project1.png"
          flags={['Frontend', 'API', 'ReactJS']}
          projectUrl='/projetos'
        />
        <Project 
          title={'Aplicativo de Sistemas'} 
          description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`} 
          urlImage="/project2.png"
          flags={['Backend', 'API', 'Node']}
          projectUrl='/projetos'
        />

        <ContactContainer>
           <ImageCustom src={PngcontactImage} width={625} height={95} alt="Contact me"/>
           <h2>Entre em contato</h2>
           <p>🤟 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
           <Button variant="outlined" color="inherit" startIcon={<BsChat />} style={{ marginTop: '20px', padding: '15px 90px'} }> Get In Touch</Button>
        </ContactContainer>
      </ContainerCustom>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const gitUser = await userRoute()
  return {
    props: {
      gitUser,
    },
  }
}
