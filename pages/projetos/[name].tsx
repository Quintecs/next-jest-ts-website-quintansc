import { useRouter } from 'next/router';
import { getRepository } from 'src/api';

import { Container } from '@mui/material';
import { Carousels } from '@/styles/projetos';
import ImageCustom from '@/components/ImageComponent';
import { obj as newProject } from 'src/mock/git';

export async function getStaticProps({ params }: any) {
    const project = await getRepository(`${params.name}`)
    return {
        props: {
            project: project ? project : newProject
        }
    }
}

export async function getStaticPaths() {
  return {
    paths: [
        '/projetos/drag-and-drop',
        '/projetos/Api-Simples',
        '/projetos/Clean-API'
    ],
    fallback: false,
  }
}

const Projeto = (props: any) => {
    const router = useRouter();
    const criado = new Date(props.project.created_at)
        if (router.isFallback) {
        return (<h1>Data is loading</h1>)
    }

    return (
        <>
            <Container>
                <h2> {router.query.name} </h2> 
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC </p>        
            </Container>

            <Carousels>
                <ImageCustom src={'/project1.png'} alt='' width={1980} height={500} priority/>
                <ImageCustom src={'/project2.png'} alt='' width={1980} height={500} priority/>
            </Carousels>
            
            <Container>
                <h2> Processo de Desenvolvimento </h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <p>
                    {props.project?.description}
                </p>
                <p>
                   ~ Desenvolvido por Gustavo Quintans <br></br>
                </p>
                <p style={{ color: "#49494D" }}>{criado.toLocaleDateString()}</p>
            </Container>
        </>
        
    )
}

export default Projeto;