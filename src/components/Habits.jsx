import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainHabits from "./MainHabits"


export default function Habits() {

    return (
        <Main>
            <Header />
            <MainHabits />
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