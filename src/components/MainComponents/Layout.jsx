import React from 'react';
import HeaderInterfaces from '../Headers/HeaderInterfaces';
import Menu from '../MainComponents/Menu';
import { Outlet } from 'react-router-dom'; // Outlet para renderizar las rutas hijas

function Layout() {
    return (
        <>
            <HeaderInterfaces />
            <Menu />
            <main>
                <Outlet /> {/* Aquí se renderizan las diferentes rutas */}
            </main>
        </>
    );
}

export default Layout;