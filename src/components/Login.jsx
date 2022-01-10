import styled from "styled-components"
import logo from "../assets/logo.svg"

import { Form, Input, Button, TextUnderForm } from './tools/styles'
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import Loader from "react-loader-spinner"
import UserDataContext from "./tools/UserDataContext"

export default function Login() {

    const navigate = useNavigate()
    const { setUserData } = useContext(UserDataContext)
    const [disable, setDisable] = useState(false)
    const [inputsData, SetInputsData] = useState(
        {
            email: "",
            password: ""
        })

    function handleInputs(e) {
        const inputName = e.target.name
        const inputValue = e.target.value

        SetInputsData({ ...inputsData, [inputName]: inputValue })
    }

    function handleSubmit(event) {
        setDisable(true)
        event.preventDefault()

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', inputsData)

        setTimeout(() => {
            promise.then(
                (response) => {
                    setUserData(
                        {
                            id: response.data.id,
                            image: response.data.image,
                            name: response.data.name,
                            token: response.data.token
                        }
                    )
                    navigate("/hoje")
                }
            )
        }, 2000)

        promise.catch(() => {
            alert('Por favor preencha os dados de cadastro corretamente.')
            setDisable(false)
        })
    }

    return (
        <LoginContainer>
            <img src={logo} alt="TrackIt log" />

            <Form onSubmit={handleSubmit}>
                <Input
                    disabled={disable}
                    value={inputsData.email}
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={(e) => handleInputs(e)}
                    required
                />

                <Input
                    disabled={disable}
                    value={inputsData.password}
                    name="password"
                    type="password"
                    placeholder="senha"
                    onChange={(e) => handleInputs(e)}
                    required
                />

                <Button
                    disabled={disable}
                    type="submit"
                >
                    {disable === true ?
                        <Loader
                            type="ThreeDots"
                            color="#FFFFFF"
                            height={80}
                            width={80}
                        />
                        :
                        "Entrar"
                    }

                </Button>
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