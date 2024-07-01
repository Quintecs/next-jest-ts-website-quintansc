import Head from "next/head";
import { InfosContainer, BtnSeeMore, TitleH2, GridHeadPageContent, ImageGrid, ContactContainer, ContactContainerImage, TitleH3, GridInfos, TitleP } from "../../styles/home";
import { GridContainer } from "../../styles/global";
import { Button, Grid, Skeleton } from "@mui/material";
import { HiOutlineArrowDown, FaReact, FaNodeJs, SiNextdotjs, BsChat, SiAngularjs} from "../../src/utils/icons";
import { useState } from 'react';
import UserComponent from "@/components/UserComponents";
import CardLanguage from "@/components/CardLanguages";
import { getRepositories, userRoute } from "../../src/api";
import { HomeContent, IconCode, PngcontactImage, Pngprojects, Pngskills } from "../../src/images";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Project = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" color="grey" style={{ height: "calc(375px*2)", width: "1600px" }}></Skeleton>
});

const Home = ({ gitUser, repositories }: any) => {
  const [user] = useState(gitUser? gitUser : {
    created_at: '',
    avatar_url: '',
    name: 'string',
    company: 'string',
    bio: 'string',
    location: 'any'
  });

  const [repos] = useState(repositories)

  const repositorys = {
    repo1: isRepoCorrect(338077631),
    repo2: isRepoCorrect(359374320),
    repo3: isRepoCorrect(742617230),
  }

  function isRepoCorrect(other: any) {
    // Verifica se repos é undefined ou null e retorna false ou realiza alguma outra ação adequada
    if (!repos) {
      return false; // ou qualquer outra ação apropriada
    }
    // Continua com a lógica original, agora que sabemos que repos não é undefined ou null
    return repos.find((e: any) => e.id == other);
  }
  
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

      <GridContainer container>
        <GridHeadPageContent item={true} xs={6}>
          <div>
            {IconCode? 
              <Image src={IconCode} width={40} height={40} alt={"imagem content"} priority />: 
              <Skeleton variant="circular" animation="wave" width={40} height={40} />
            }
            <GridInfos item={true}>
              <TitleH3>Hello World /&gt; </TitleH3>
              <p> Meu nome é Gustavo Quintans 👋</p>
            </GridInfos>
          </div>
          <div>
            <TitleH2>Front-end DEV</TitleH2>
            <p style={{ fontWeight: '600', fontSize: '16px' }}>Desenvolvimento de Front-end ágil e <TitleP> inovador</TitleP> para cativar seus usuários e <TitleP> impulsionar </TitleP> sua presença online.</p>
            
          </div>

        </GridHeadPageContent>
         <ImageGrid item={true} xs={6}>
          <picture>
            {HomeContent ? 
              <Image src={HomeContent} loading="eager" fetchPriority="high" alt={"imagem content"} width={489} height={404}/> :
              <Skeleton color="red" variant="rectangular" width={489} height={404}></Skeleton>
            }
          </picture>
          
        </ImageGrid>
      

          <BtnSeeMore variant="text" endIcon={<HiOutlineArrowDown color="#10BB83" />}>
            Veja mais
          </BtnSeeMore>
        <Grid item={true} lg={12}> <UserComponent user={user} /></Grid>
      </GridContainer>
      <InfosContainer>
        <h2>Hello World</h2>
        <p>O primeiro passo para explorar o universo da programação web. Deixe-nos guiá-lo em sua jornada de desenvolvimento com base no Meu conhecimento.</p>
        <p>Sou Especialista em Javascript e Typescript</p>
      </InfosContainer>
      <InfosContainer>
        <Image src={Pngskills} alt="My skills"/>
        <h2>Minhas Habilidades</h2>
        <p>Conheça minhas habilidades técnicas e minha experiência em desenvolvimento de front-end e outras áreas da tecnologia da informação.</p>
        <Grid container style={{ justifyContent: 'space-between' }} >
          <CardLanguage
            theme={{ colorBackgroundIcon: '#10BB83', cardBackgroundColor: '#162825', cardBackroundTitleColor: '#3E6E66' }}
            infos={{
              title: 'NodeJS',
              subtitle: 'Back-end Framework',
              subscription: 'Node Documentation',
              textContent: 'Node.js® é um ambiente de execução de JavaScript de código aberto e multiplataforma.'
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
              textContent: 'Next.js é um framework React para criar aplicativos web full-stack, fornecendo recursos e otimizações extras.'
            }}
            icon={<SiNextdotjs size={65} color={'black'} />}
            link={{ link: 'https://nextjs.org/' }}
            key={Math.random()} />

          <CardLanguage
            theme={{ colorBackgroundIcon: '#ff2929', cardBackgroundColor: '#641c1c', cardBackroundTitleColor: '#721818', textTitleColor: '#18181A' }}
            infos={{
              title: 'AngularJS',
              subtitle: 'Front-end Framework',
              subscription: 'Angular Documentation',
              textContent: 'AngularJS é um framework JavaScript da Google(OpenSource) para criação de aplicativos web dinâmicos e interativos.'
            }}
            icon={<SiAngularjs size={65} color={'black'} />}
            link={{ link: 'https://nextjs.org/' }}
            key={Math.random()} />
        </Grid>
      </InfosContainer>
      <InfosContainer>
        <Image src={Pngprojects} width={625} height={60} alt="My projects"/>
        <h2>Projetos Selecionados</h2>
        <p>Explore alguns dos projetos que desenvolvi, demonstrando minha criatividade, habilidades técnicas e experiência em desenvolvimento front-end.</p>
      </InfosContainer>

      <Project 
        title={repositorys.repo1.name} 
        description={repositorys.repo1.description} 
        urlImage="/1project.png"
        flags={['Frontend', 'API', 'ReactJS']}
        projectUrl={`/projetos/${repositorys.repo1.name}`}
      />
      <Project 
        title={repositorys.repo2.name} 
        description={repositorys.repo2.description} 
        urlImage="/project2.png"
        flags={['Backend', 'API', 'Node']}
        projectUrl={`/projetos/${repositorys.repo2.name}`}
      />

      <ContactContainer>
          <ContactContainerImage src={'/background.png'} width={625} height={95} alt="Contact me"/>
          <Image src={PngcontactImage} width={625} height={95} alt="Contact me"/>
          <h2>Entre em contato</h2>
          <p>Vamos transformar suas ideias em realidade! Entre em contato para discutir seu projeto ou apenas para dizer olá. Aguardo ansiosamente para ouvir de você!</p>
          <Button variant="outlined" color="inherit" startIcon={<BsChat />} style={{ marginTop: '20px', padding: '15px 90px'} }> <Link href={'/contato'}>Entre em Contato</Link> </Button>
      </ContactContainer>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const gitUser = await userRoute()
  const repositories = await getRepositories()
  return {
    props: {
      gitUser,
      repositories
    },
    revalidate: 100000,
  }
}
