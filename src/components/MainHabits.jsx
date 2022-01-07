import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import addIcon from "../assets/addicon.svg"

export default function MainHabits({ userData }) {
    const [addHabit, setAddHabit] = useState(false);
    const [title, setTitle] = useState('')
    const [pickedDays, setPickedDays] = useState([])
    console.log(pickedDays)

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function handlePickedDays(e) {
        const day = e.target.id

        if (pickedDays.includes(Number(day))) {
            setPickedDays(pickedDays.filter((index) => (index !== Number(day))))
            return;
        }
        setPickedDays([...pickedDays, Number(day)]);
    }

    function handleAddHabit(event) {
        event.preventDefault()

        const promise = axios.post(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            {
                name: title,
                days: pickedDays
            },
            {
                headers: { Authorization: `Bearer ${userData.token}` }
            }
        )

        setTimeout(() => (promise.then(
            (response) => console.log(response)
        )
        ))

        promise.catch((error) => console.log(error))

    }

    return (
        <MainContainer>
            <Top>
                <span>Meus hábitos</span>
                <div onClick={() => setAddHabit(true)} >
                    <img src={addIcon} alt="Add button icon" />
                </div>
            </Top>
            {addHabit === true &&
                <SetHabit onSubmit={handleAddHabit}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Título do seu hábito"
                        required
                    />

                    <DaysContainer>
                        {days.map(
                            (day, index) =>
                            (<Day
                                picked={pickedDays.includes(index)}
                                onClick={(e) => handlePickedDays(e)}
                                id={index}
                                key={index}>
                                {day}
                            </Day>)
                        )}
                    </DaysContainer>

                    <ButtonsContainer>
                        <span onClick={() => setAddHabit(false)}>Cancelar</span>
                        <button type="submit">Salvar</button>
                    </ButtonsContainer>
                </SetHabit>
            }

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </MainContainer>
    )

}

const Day = styled.div`

    width:30px;
    height: 30px;

    display:flex;
    align-items:center;
    justify-content: center;

    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    color: ${props => props.picked ? '#FFFFFF' : '#DBDBDB'};
    
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    background-color: ${props => props.picked ? '#CFCFCF' : '#FFFFFF'};
    
`

const ButtonsContainer = styled.div`
    display:flex;
    justify-content: right;
    align-items:center;
    padding-top:25px;
    gap: 25px;

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        text-align: center;

        color: #52B6FF;
    }

    button{
        border-style: none;

        font-style: normal;
        font-weight: normal;
        font-size: 15.976px;
        text-align: center;
        color: #FFFFFF;

        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        background: #52B6FF;
    }
    
`

const DaysContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

`

const SetHabit = styled.form`
    width: 340px;
    min-height: 170px;

    display:flex;
    flex-direction: column;
    gap:5px;

    padding:20px;
    margin-bottom: 29px;

    background-color: #FFFFFF;
    border-radius: 5px;

    input{
        width: 303px;
        min-height: 45px;
        padding-left: 10px;

        font-style: normal;
        font-weight: normal;
        font-size: 19.976px;
        color: #666666;

        border-radius: 5px;
        border: 1px solid #D5D5D5;
        background: #FFFFFF;
    }

`

const MainContainer = styled.div`
    min-height:100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 70px 18px;
    
    background-color:#E5E5E5;

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`
const Top = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 25px 0px;

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }

    div{
        width: 40px;
        height: 35px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        background: #52B6FF;
        border-radius: 4.63636px;
        }
`