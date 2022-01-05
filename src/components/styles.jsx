import styled from "styled-components";



const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;

`

const Input = styled.input`
    width: 303px;
    height: 45px;
    
    padding-left: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    line-height: 25px;

    ::placeholder{
        color: #DBDBDB;
    }

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;

    border-style:none;
    font-style: normal;
    font-weight: normal;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;

    :hover{
        cursor: pointer;
        background: #2c95e0;
    }

    background: #52B6FF;
    border-radius: 4.63636px;
`

const TextUnderForm = styled.span`

    font-style: normal;
    font-weight: normal;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    :hover{
        cursor: pointer;
        color: #2c95e0;
    }

    color: #52B6FF;

`

export {
    Form,
    Input,
    Button,
    TextUnderForm
}