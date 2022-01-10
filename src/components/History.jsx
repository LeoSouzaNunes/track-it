import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import MainHistory from "./MainHistory"
import { useContext } from "react"
import UserDataContext from "./tools/UserDataContext"
import CheckBoxContext from "./tools/CheckBoxContext"

export default function History() {
    const { dailyProgress } = useContext(CheckBoxContext)
    const { userData } = useContext(UserDataContext)

    return (
        <Main>
            <Header userData={userData} />
            <MainHistory userData={userData} />
            <Footer dailyProgress={dailyProgress} />
        </Main>
    )

}

const Main = styled.div`
    min-height: 100vh;
    
    display:flex;
    flex-direction: column;
    align-items:center;
`