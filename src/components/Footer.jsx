import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Footer({ dailyProgress }) {

    return (
        <FooterContainer>
            <Link to="/habitos">
                <Text>Hábitos</Text>
            </Link>

            <Link to="/hoje">
                <TodayButton >
                    <CircularProgressbar
                        value={dailyProgress}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent"
                        })}
                        text="Hoje"
                    />
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

    z-index:1;
    margin-bottom: 50px;
    border-radius:50%;
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