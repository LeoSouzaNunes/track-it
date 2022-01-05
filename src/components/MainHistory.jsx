import styled from "styled-components";

export default function MainHistory() {

    return (
        <MainContainer>
            <Top>
                <span>Histórico</span>
            </Top>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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