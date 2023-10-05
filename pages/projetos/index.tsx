import { ContainerCustom, GridContainer } from "../../styles/global";
import { GridProject } from '@/styles/projetos';
import Head from "next/head";
import CardProject from "@/components/CardProject";
import { getRepository } from "src/api";
import ImageCustom from "@/components/ImageComponent";

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

      <ContainerCustom maxWidth={false}>
        <GridContainer style={{ textAlign: 'center' }}>
          <ImageCustom src='/contactIcon.png' alt="" width={62} height={62} />
          <h1>Entre em contato</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          <GridProject container>
            <CardProject
              src='/trello.webp'
              project={dragAndDrop}
              flag="front"
            />
            <CardProject
              src='/node.png'
              project={apiDragAndDrop}
              flag="back"
            />
            <CardProject
              src={'/tsnode.png'}
              project={cleanApi}
              flag="back"
            />
          </GridProject>
        </GridContainer>
      </ContainerCustom>
    </>
  )
}

export default Projetos;