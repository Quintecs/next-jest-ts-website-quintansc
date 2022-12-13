import Head from "next/head";
import { HomeContainer } from "./style";

const Container = ()=>{
    return (
        <>
        <Head>
            <title>Home | Quintec</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HomeContainer>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Homes Gustavinho
            </a>
        </HomeContainer>
        </>
    )
}

export default Container;