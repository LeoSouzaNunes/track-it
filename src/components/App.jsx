import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Habits";
import History from "./History";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-circular-progressbar/dist/styles.css';
import UserDataContext from "./tools/UserDataContext";
import CheckBoxContext from "./tools/CheckBoxContext"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function App() {
    const [userData, setUserData] = useState(null)
    const [dailyProgress, setDailyProgress] = useState(0)

    return (
        <BrowserRouter>
            <CheckBoxContext.Provider value={{ dailyProgress, setDailyProgress }}>
                <UserDataContext.Provider value={{ userData, setUserData }}>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/cadastro" element={<SignUp />}></Route>
                        <Route path="/habitos" element={<Habits />}></Route>
                        <Route path="/hoje" element={<Today />}></Route>
                        <Route path="/historico" element={<History />}></Route>
                    </Routes>
                </UserDataContext.Provider>
            </CheckBoxContext.Provider>
        </BrowserRouter>
    )
}
