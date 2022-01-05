import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainToday from "./MainToday"

export default function Today() {

    return (
        <Main>
            <Header />
            <MainToday />
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