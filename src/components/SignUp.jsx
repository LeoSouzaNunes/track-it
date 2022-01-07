import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import styled from "styled-components"
import { Form, Input, Button, TextUnderForm } from "./tools/styles"
import { useState } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"


export default function SignUp() {
    const navigate = useNavigate()

    const [disable, setDisable] = useState(false)
    const [signUpData, setSignUpData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    }
    )


    function handleInputs(e) {
        const inputValue = e.target.value
        const inputName = e.target.name

        setSignUpData({ ...signUpData, [inputName]: inputValue })
    }

    function handleSubmit(event) {
        event.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', signUpData)

        setTimeout(() => {
            promise.then(
                () => navigate('/')
            )
        }, 2000
        )

        promise.catch(
            () => {
                alert('Por favor, preencha os campos de cadastro corretamente.')
                setDisable(false)
            }

        )
    }

    return (
        <SignUpContainer>
            <img src={logo} alt="TrackIt log" />
            <Form onSubmit={handleSubmit}>
                <Input
                    disabled={disable}
                    value={signUpData.email}
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={(e) => handleInputs(e)}
                />

                <Input
                    disabled={disable}
                    value={signUpData.password}
                    name="password"
                    type="password"
                    placeholder="senha"
                    onChange={(e) => handleInputs(e)}
                />

                <Input
                    disabled={disable}
                    value={signUpData.name}
                    name="name"
                    type="text"
                    placeholder="nome"
                    onChange={(e) => handleInputs(e)}
                />

                <Input
                    disabled={disable}
                    value={signUpData.image}
                    name="image"
                    type="url"
                    placeholder="foto"
                    onChange={(e) => handleInputs(e)}
                />
                <Button
                    disabled={disable}
                    onClick={() => setDisable(true)}
                    type="submit"
                >
                    {disable === true ?
                        <Loader
                            type="ThreeDots"
                            color="#FFFFFF"
                            height={80}
                            width={80} />
                        :
                        "Cadastrar"}
                </Button>
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