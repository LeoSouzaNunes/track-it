import styled from "styled-components";
import checkIcon from "../assets/checkicon.svg"
import axios from "axios";
import { useEffect, useContext } from "react";
import CheckBoxContext from "./tools/CheckBoxContext";

export default function Habit({ habit, userData, setTodaysHabits }) {

    const { check, setCheck } = useContext(CheckBoxContext)
    console.log('Dentro do hábito' + check)

    if (habit.done === true && check.includes(habit.id) === false) {
        setCheck([...check, habit.id])
    }

    function handleDone(e) {
        const item = Number(e.target.id)

        if (check.includes(item)) {
            setCheck(check.filter((id) => id !== item))

            const promiseUncheck = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,
                {},
                {
                    headers: { Authorization: `Bearer ${userData.token}` }
                }
            )

            promiseUncheck.then(
                () => {
                    setTodaysHabits(check.filter((id) => id !== item))
                    console.log('uncheck')
                    console.log(habit)
                }
            )
            return;
        }

        const promiseCheck = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
            {},
            {
                headers: { Authorization: `Bearer ${userData.token}` }
            }
        )

        setCheck([...check, item])
        console.log(habit.id)

        promiseCheck.then(
            () => {
                setTodaysHabits([...check, item])
                console.log('check')
            }
        )

    }

    return (
        <HabitCard>
            <Text>
                <h3>{habit.name}</h3>
                <p>
                    Sequência atual: {habit.currentSequence} dias<br />
                    Seu recorde: {habit.highestSequence} dias
                </p>
            </Text>
            <CheckBox id={habit.id} onClick={(e) => handleDone(e)} done={check.includes(habit.id)}>
                <img src={checkIcon} alt="Check icon" />
            </CheckBox>
        </HabitCard>
    )
}

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
        font-style: normal;
        font-weight: normal;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
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