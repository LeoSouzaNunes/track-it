import styled from "styled-components";
import checkIcon from "../assets/checkicon.svg"

export default function Habit() {

    return (
        <HabitCard>
            <Text>
                <h3>Ler 1 capítulo de livro</h3>
                <p>
                    Sequência atual: 3 dias<br />
                    Seu recorde: 5 dias
                </p>
            </Text>
            <CheckBox>
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
    background: #EBEBEB;
`