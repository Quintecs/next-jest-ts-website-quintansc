import { useEffect, useState } from 'react';
import Footer from './footer';
import FooterDesktop from './footer/desktop';
import Header from './header';

export default function Layout ({children}: any){
    const [mobile, setMobile] = useState<boolean>(false)
    useEffect(()=>{
        if(window.innerWidth < 800){
            setMobile(true)
        }
    }, [])
    return (
        <>
            <Header />
            <main style={{ overflow: "hidden"}}>{children}</main>
            {mobile? <Footer/>: <FooterDesktop/>}
        </>
    )
}