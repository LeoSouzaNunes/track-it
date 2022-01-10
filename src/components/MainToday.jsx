import styled from "styled-components";
import dayjs from "dayjs"
import ptBr from "dayjs/locale/pt-br"
import { useEffect, useState, useContext } from "react";
import checkIcon from "../assets/checkicon.svg"
import CheckBoxContext from "./tools/CheckBoxContext";
import axios from "axios";

export default function MainToday({ userData }) {
    const { setDailyProgress, dailyProgress } = useContext(CheckBoxContext)
    const [today, setToday] = useState('')
    const [todaysHabits, setTodaysHabits] = useState([])
    const [check, setCheck] = useState([])

    if (todaysHabits.length !== 0) {
        todaysHabits.forEach((habit) => {
            if (habit.done === true && check.includes(habit.id) === false) {
                setCheck([...check, habit.id])
            }
        }
        )
        setDailyProgress((check.length * 100) / todaysHabits.length)
    }
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

        }, []
    )

    function handleDone(e) {
        const item = e.target.id

        if (check.includes(Number(item))) {

            const promiseUncheck = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item}/uncheck`,
                {},
                {
                    headers: { Authorization: `Bearer ${userData.token}` }
                }
            )

            promiseUncheck.then(
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
                            setCheck([])
                        }
                    )

                }
            )
            return;
        }

        const promiseCheck = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item}/check`,
            {},
            {
                headers: { 'Authorization': `Bearer ${userData.token}` }
            }
        )
        promiseCheck.then(
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
            }
        )
    }

    return (
        <MainContainer>
            <Top>
                <span>{today}</span>
                <ProgressText progress={dailyProgress > 0}>
                    {dailyProgress !== 0 ?
                        (`${dailyProgress.toFixed()}% dos hábitos concluídos`)
                        :
                        ("Nenhum hábito concluído ainda")
                    }

                </ProgressText>
            </Top>
            {todaysHabits.length === 0 ?
                ('')
                :
                (
                    todaysHabits.map(
                        (habit, index) => (
                            <HabitCard key={index}>
                                <Text>
                                    <h3>{habit.name}</h3>
                                    <div>
                                        <SequenceText green={habit.currentSequence !== 0}>
                                            Sequência atual: <strong>{habit.currentSequence} {habit.currentSequence === 1 ? ('dia') : ('dias')}</strong>
                                        </SequenceText>
                                        <SequenceText green={habit.currentSequence === habit.highestSequence && habit.highestSequence > 0}>
                                            Seu recorde: <strong>{habit.highestSequence} {habit.highestSequence === 1 ? ('dia') : ('dias')}</strong>
                                        </SequenceText>
                                    </div>
                                </Text>
                                <CheckBox id={habit.id} onClick={(e) => handleDone(e)} done={habit.done}>
                                    <img id={habit.id} src={checkIcon} alt="Check icon" />
                                </CheckBox>
                            </HabitCard>
                        )
                    )

                )

            }
        </MainContainer>
    )
}

const ProgressText = styled.p`
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;

        color:${props => props.progress ? ('#8FC549') : ('#BABABA')} ;

`

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

`
const HabitCard = styled.div`
    width: 340px;
    min-height: 95px;

    padding: 15px 15px;
    margin-bottom: 10px;
  
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;
    background: #FFFFFF;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;
        padding-bottom:10px;

        color: #666666;
    }

    p{
        
    }
`
const SequenceText = styled.p`
        font-style: normal;
        font-weight: normal;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666 ;

        strong{
            font-style: normal;
            font-weight: normal;
            font-size: 12.976px;
            line-height: 16px;

            color:${props => props.green ? ('#8FC549') : ('#666666')}
        }
`
const CheckBox = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

    width: 70px;
    height: 70px;

    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${props => props.done === true ? ("#8FC549") : ("#EBEBEB")};
`