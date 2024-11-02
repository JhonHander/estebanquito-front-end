import React, { useState } from 'react'
import './HeaderInterfaces.css'
import logo from '../../assets/3.png'
import { MdOutlineLogout } from "react-icons/md";
import { useEffect } from 'react';
import { getUserInfo } from '../requests/getUserInfo';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../requests/jwtManage';


function HeaderInterfaces() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const getData = await getUserInfo();
            const name = await getData.nombre;
            // console.log(name);
            if (name) {
                setUserName(name);
            }
        };
        fetchUser();
    }, []);


    const handleLogOut = () => {
        // alert('Hasta luego');
        removeToken();
        navigate('/login');

    }
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Estebanquito" className="logo" />
            </div>
            <div className="header-center">
                <h3> Hola, {userName}</h3>
            </div>
            <div className="header-right">
                <button className="logout-button" onClick={handleLogOut}>
                    Salir <span role="img" aria-label="logout"> <MdOutlineLogout /></span>
                </button>
            </div>
        </header>
    );
}

export default HeaderInterfaces;