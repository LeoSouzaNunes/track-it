import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"


export default function Habits() {

    return (
        <Main>
            <Header />
            <Footer />
        </Main>
    )

}

const Main = styled.div`
    min-height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items:center;
    
    background-color: #E5E5E5 !important;
`