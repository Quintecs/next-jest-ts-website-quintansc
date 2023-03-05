import { useEffect, useState } from 'react';
import Footer from './footer';
import FooterDesktop from './footer/desktop';
import Header from './header';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Layout ({children}: any){
    const [mobile, setMobile] = useState<boolean>(false)
    useEffect(()=>{
        if(window.innerWidth < 800){
            setMobile(true)
        }
    }, [])

    const theme = createTheme({
        palette: {
            primary: {
                main: '#999ED7',
                contrastText: '#F4F4F4',
                dark: '#FFFFFF',
                light: '#FFFFFF'
            },
            secondary: {
                main: '#10BB83',
                contrastText: '#F4F4F4',
            },
            info: {
                main: '#F4F4F4',
                contrastText: '#F4F4F4',
            },
        }
        
    });
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <main style={{ overflow: "hidden"}} data-testid={'layout'}>{children}</main>
            {mobile? <Footer/>: <FooterDesktop/>}
        </ThemeProvider>
    )
}