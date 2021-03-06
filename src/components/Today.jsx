import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainToday from "./MainToday"
import { useContext } from "react"
import UserDataContext from "./tools/UserDataContext"
import CheckBoxContext from "./tools/CheckBoxContext"



export default function Today() {
    const { userData } = useContext(UserDataContext)
    const { dailyProgress } = useContext(CheckBoxContext)

    return (
        <Main>

            <Header userData={userData} />
            <MainToday userData={userData} />
            <Footer dailyProgress={dailyProgress} />
        </Main>
    )

}

const Main = styled.div`
    width:100%;
    min-height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items:center;
`