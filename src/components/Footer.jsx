import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <FooterContainer>
            <Link to="/habitos">
                <Text>Hábitos</Text>
            </Link>

            <Link to="/hoje">
                <TodayButton>
                    Hoje
                </TodayButton>
            </Link>

            <Link to="/historico">
                <Text>Histórico</Text>
            </Link>
        </FooterContainer>
    )
}

const Text = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
`

const TodayButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    width:90px;
    height:90px;

    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    color: #FFFFFF;

    z-index:1;
    margin-bottom: 50px;
    border-radius:50%;

    background-color:#52B6FF;
`

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    width: 100%;
    height: 70px;

    background-color: #FFFFFF;
`