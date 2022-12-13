import Header from './header';
import LateralComponent from './lateral';

export default function Layout ({children}: any){
    return (
        <>
            <Header />
            <LateralComponent />
            <main>{children}</main>
        </>
    )
}