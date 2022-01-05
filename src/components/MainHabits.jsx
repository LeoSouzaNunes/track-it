import styled from "styled-components";
import addIcon from "../assets/addicon.svg"

export default function MainContent() {

    return (
        <MainContainer>
            <Top>
                <span>Meus hábitos</span>
                <div>
                    <img src={addIcon} alt="Add button icon" />
                </div>
            </Top>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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