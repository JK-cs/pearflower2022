import { Link } from "react-router-dom";
import React from 'react'
import logo from "../../../img/renewalLogo.png";
import exit from "../../../img/exit.png";
import './Header.css'


export default function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="ewhaian" />
            <Link to="/" className="exitBT">
                <img src={exit} alt="나가기" />
            </Link>
        </div>
    )
}
