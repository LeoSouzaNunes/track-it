import styled from "styled-components";
import Habit from "./Habit";
import dayjs from "dayjs"
import ptBr from "dayjs/locale/pt-br"
import { useEffect, useState } from "react";

export default function MainToday() {
    const [today, setToday] = useState('')

    useEffect(() => {
        dayjs.locale(ptBr)
        let todayIndex = dayjs().day();
        const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        setToday(`${weekdays[todayIndex]}, ${dayjs().format('DD/MM')}`)
    }, []
    )
    return (
        <MainContainer>
            <Top>
                <span>{today}</span>
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

    min-height:100vh;
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