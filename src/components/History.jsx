import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainHistory from "./MainHistory"

export default function History() {

    return (
        <Main>
            <Header />
            <MainHistory />
            <Footer />
        </Main>
    )

}

const Main = styled.div`
    min-height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items:center;
`