import styled from "styled-components";
import Habit from "./Habit";
import dayjs from "dayjs"
import ptBr from "dayjs/locale/pt-br"
import { useEffect, useState } from "react";
import axios from "axios";
import CheckBoxContext from "./tools/CheckBoxContext";

export default function MainToday({ userData }) {
    const [today, setToday] = useState('')
    const [todaysHabits, setTodaysHabits] = useState([])
    console.log(todaysHabits)
    const [check, setCheck] = useState([])
    console.log(check)
    useEffect(() => {
        dayjs.locale(ptBr)
        let todayIndex = dayjs().day();
        const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        setToday(`${weekdays[todayIndex]}, ${dayjs().format('DD/MM')}`)
    }, []
    )

    useEffect(
        () => {
            const promise = axios.get(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
                {
                    headers: { Authorization: `Bearer ${userData.token}` }
                }
            )

            promise.then(
                (response) => {
                    setTodaysHabits(response.data)
                }
            )

        }, [userData.token]
    )

    return (
        <MainContainer>
            <Top>
                <span>{today}</span>
                <p>Nenhum hábito concluído ainda</p>
            </Top>
            {todaysHabits.length === 0 ?
                ('')
                :
                (
                    <CheckBoxContext.Provider value={{ check, setCheck }}>
                        {todaysHabits.map
                            (
                                (habit, index) => (
                                    <Habit setTodaysHabits={setTodaysHabits} userData={userData} key={index} habit={habit} />
                                )
                            )
                        }
                    </CheckBoxContext.Provider>
                )

            }
        </MainContainer>
    )
}


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:100%;
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