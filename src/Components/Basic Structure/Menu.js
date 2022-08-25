import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Plataforma</Link>
                    </li>
                    <li>
                        <Link to="/Pesssoa">Pessoas</Link>
                    </li>
                </ul>
            </nav>
            <Link className="Sair" to="/login">Sair</Link>
        </aside>
    )
}

export default Menu