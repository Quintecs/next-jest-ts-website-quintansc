import Container from '@mui/material/Container';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getRepository } from 'src/api';

export async function getStaticProps({ params }: any) {
    const project = await getRepository(`${params.name}`)
    return {
        props: {
            project
        },
    }
}

export async function getStaticPaths() {
  return {
    paths: [
        '/projetos/drag-and-drop',
        '/projetos/Clean-api',
        '/projetos/Api-Simples'
    ],
    fallback: true,
  }
}

const Projeto = (props: any) => {
    const router = useRouter();

    console.log(props.project)
    return (
        <>
            <Container>
                <h2> {router.query.name} </h2>            
            </Container>
            <Image src={"/project1.png"} width={1600} height={375} alt={'project'}/>
            <Container>
                <h2> Processo de Desenvolvimento </h2>
                <p>
                    {props.project?.description}
                </p>
                <p>
                   ~ Desenvolvido por Gustavo Quintans <br></br>
                </p>
            </Container>
        </>
        
    )
}

export default Projeto;