import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Habits";
import History from "./History";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";

export default function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<SignUp />}></Route>
                <Route path="/habitos" element={<Habits />}></Route>
                <Route path="/hoje" element={<Today />}></Route>
                <Route path="/historico" element={<History />}></Route>
            </Routes>

        </BrowserRouter>
    )
}
