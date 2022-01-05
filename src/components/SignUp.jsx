import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import styled from "styled-components"
import { Form, Input, Button, TextUnderForm } from "./styles"


export default function SignUp() {

    return (
        <SignUpContainer>
            <img src={logo} alt="TrackIt log" />

            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
                <Input type="text" placeholder="nome" />
                <Input type="url" placeholder="foto" />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <Link to="/">
                <TextUnderForm>Já tem uma conta? Faça login!</TextUnderForm>
            </Link>
        </SignUpContainer>

    )

}


const SignUpContainer = styled.div`
    min-height: 100vh;

    display:flex;
    flex-direction: column;
    align-items:center;

    padding-top: 80px;

    gap:30px;
`