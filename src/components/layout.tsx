import { useEffect, useState } from 'react';
import Footer from './footer';
import FooterDesktop from './footer/desktop';
import Header from './header';

import { useRouter } from 'next/router'

export default function Layout ({children}: any){
    const [mobile, setMobile] = useState<boolean>(false)
    const { asPath } = useRouter();
    useEffect(()=>{
        if(window.innerWidth < 800){
            setMobile(true)
        }
    }, [])
    return (
        <>
            <Header path={asPath} />
            <main style={{ overflow: "hidden"}} data-testid={'layout'}>{children}</main>
            {mobile? <Footer/>: <FooterDesktop/>}
        </>
    )
}