import Container from '@mui/material/Container';
import { useRouter } from 'next/router';

const Projeto = () => {
    const router = useRouter()
    return (
        <Container>
            <p>
                Rota é {router.query.name}
            </p>            
        </Container>
    )
}

export default Projeto;