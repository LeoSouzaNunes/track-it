import styled from "styled-components";

export default function Footer() {

    return (
        <FooterContainer>

            <Text>Hábitos</Text>
            <TodayButton>
                Hoje
            </TodayButton>
            <Text>Histórico</Text>

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
    border-radius:50%;

    background-color:#52B6FF;
    box-shadow: inset #FFFFFF,
    solid 6px #52B6FF;

`

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;

    width: 100%;
    height: 70px;

    background-color: #FFFFFF;
`