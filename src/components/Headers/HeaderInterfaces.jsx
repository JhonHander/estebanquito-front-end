import React, { useState } from 'react'
import './HeaderInterfaces.css'
import logo from '../../assets/logo-header-interfaces.png'
import Menu from '../MainComponents/Menu'
import { MdOutlineLogout } from "react-icons/md";
import { Navigate } from "react-router-dom";



function HeaderInterfaces() {
    return (
        <header className="header">

            <div className="header-left">
                <img src={logo} alt="Estebanquito" className="logo" />
            </div>
            <div className="header-center">
                <h3> Hola, 'Hander'</h3>
            </div>
            <div className="header-right">
                <button className="logout-button">
                    Salir <span role="img" aria-label="logout"> <MdOutlineLogout /></span>
                </button>
            </div>
        </header>
    );
}

export default HeaderInterfaces;