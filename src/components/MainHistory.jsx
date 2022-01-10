import styled from "styled-components";
import Calendar from "react-calendar";
import { useState } from "react";
import dayjs from "dayjs";

export default function MainHistory() {
    const [value, onChange] = useState(new Date());

    return (
        <MainContainer>
            <Top>
                <span>Histórico</span>
            </Top>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Calendar
                formatDay={(locale, date) => dayjs(date).format("DD")}
                locale="pt-br"
                calendarType="US"
                onChange={onChange}
                value={value}
            />
        </MainContainer>
    )
}


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

    padding: 30px 0px;

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
    }
`