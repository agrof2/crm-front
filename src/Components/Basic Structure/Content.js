import React, { useState } from "react";
import {
    Route, 
    Routes, 
    useNavigate
} from 'react-router-dom'
import LoginForm from "../LoginForm";
import Platform from "../Platform";
import '../../index.css'

function Content() {
    let navigate = useNavigate()
    const adminUser = {
        login: 'admin@agrof2sistemas.com',
        password: 'sucessoEMerito'
    }

    const [user, setUser] = useState({ login: "", senha: "" })
    const [error, setError] = useState("")
    const Login = details => {
        console.log(details);

        if (details.login == adminUser.login && details.password == adminUser.password) {
            console.log("Logged in!");
            setUser({
                login: details.login,
                senha: details.password
            })
            setError("")
        } else {
            console.log("Details do not match!");
            setError("E-mail e/ou Senha inválidos!");
        }
    }

    const Logout = () => {
        console.log("Logout!");
        setUser({ login: "", senha: "" })
        navigate('/login')

    }
    return (
        <main className="Content">
            <Routes>
                <Route path="/login" element={<LoginForm Login={Login} error={error} />} />
                <Route path="/" exact element={<Platform user={user} />}>
                    <Route path="/pessoa" element={<Pessoa />}>
                        
                    </Route>
                </Route>
            </Routes>
        </main>
    )
}

export default Content