import Head from "next/head";
import { getRepository } from "src/api";
import { GridProject } from '@/styles/projetos';
import CardProject from "@/components/CardProjects";
import ImageCustom from "@/components/ImageComponent";
import { GridContainer } from "../../styles/global";
import { PngcontactIcon, Webptrello, Pngnode, Pngtsnode } from '../../src/images'

export async function getStaticProps() {
  const dragAndDrop = await getRepository('drag-and-drop')
  const apiDragAndDrop = await getRepository('Api-Simples')
  const cleanApi = await getRepository('Clean-API')
  return {
    props: {
      dragAndDrop,
      apiDragAndDrop,
      cleanApi
    },
  }
}

const Projetos = ({dragAndDrop, apiDragAndDrop, cleanApi}: any) => {
  return (
    <>
      <Head>
        <title>Projetos | Quintec</title>
        <link rel="icon" href="/desenvolvedor1.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Um portifólio vasto com diversas referências para quem é Desenvolvedor Front-End" />
        <meta name="keywords" content="Desenvolvedor,Programador,frontend,Front-end,JS,Portifólio,desenvolvimento,referencias,design" />
        <meta name="robots" content="index, follow" />
      </Head>

      <GridContainer style={{ textAlign: 'center' }}>
        <ImageCustom src={PngcontactIcon} alt="" width={62} height={62} />
        <h1>Nossos Projetos</h1>
        <p>Explore nossa galeria de projetos e mergulhe em uma variedade de trabalhos que abrangem desde residências particulares até projetos comerciais de grande escala. Cada empreendimento é cuidadosamente concebido para atender às necessidades específicas de nossos clientes, combinando criatividade, funcionalidade e inovação. De espaços contemporâneos a designs tradicionais, nossa equipe de profissionais talentosos se dedica a transformar visões em realidade. Deslize através das imagens e descubra como nossa paixão pelo design se manifesta em cada detalhe.</p>
        <GridProject container>
          <CardProject
            src={Webptrello}
            project={dragAndDrop}
            flag="front"
          />
          <CardProject
            src={Pngnode}
            project={apiDragAndDrop}
            flag="back"
          />
          <CardProject
            src={Pngtsnode}
            project={cleanApi}
            flag="back"
          />
          <CardProject
            src={Pngtsnode}
            project={cleanApi}
            flag="back"
          />
        </GridProject>
      </GridContainer>
    </>
  )
}

export default Projetos;