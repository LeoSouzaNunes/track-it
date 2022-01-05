import styled from "styled-components"
import logo from "../assets/logo.svg"

import { Form, Input, Button, TextUnderForm } from './styles'
import { Link } from "react-router-dom"


export default function Login() {

    return (
        <LoginContainer>
            <img src={logo} alt="TrackIt log" />

            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to="/cadastro">
                <TextUnderForm>Não tem uma conta? Cadastre-se!</TextUnderForm>
            </Link>
        </LoginContainer>
    )

}

const LoginContainer = styled.div`
    min-height: 100vh;

    display:flex;
    flex-direction: column;
    align-items:center;

    padding-top: 80px;

    gap:30px;
`