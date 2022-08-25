import React, { useState } from "react";
import Menu from "./Basic Structure/Menu";
import '../index.css'

function Platform({ user, Logout }) {
    

    return (
        <div className="Plataform">
            <Menu />
            <div className="welcome">
                    <h2>Olá, <span>{user.login}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
        </div>
    )
}

export default Platform