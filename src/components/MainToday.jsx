import styled from "styled-components";
import Habit from "./Habit";

export default function MainToday() {

    return (
        <MainContainer>
            <Top>
                <span>Segunda, 17/05</span>
                <p>Nenhum hábito concluído ainda</p>
            </Top>
            <Habit />
            <Habit />
            <Habit />
        </MainContainer>
    )
}


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y:auto;
    
    padding: 70px 18px;
    
    background-color:#E5E5E5;
`
const Top = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 30px 0px;

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;

        color: #BABABA;
    }
`