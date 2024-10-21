import React from 'react';
import './ManageViewBalance.css';
import { NavLink } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";

function ManageViewBalance() {
    const data = [
        { tipo: 'Cuenta Corriente', numero: '123-456-789', saldo: 1500 },
        { tipo: 'Ahorros', numero: '987-654-321', saldo: 3000 },
    ];

    return (
        <div className='saldo-container'>
            <h1>Hola 'Hander', este es tu saldo de tu cuenta</h1>

            <table className="saldo-table">
                <caption>Saldo de cuentas</caption>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Número</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((cuenta, index) => (
                        <tr key={index}>
                            <td>{cuenta.tipo}</td>
                            <td>{cuenta.numero}</td>
                            {/* <td>${cuenta.saldo.toFixed(2)}</td> */}
                            <td>${cuenta.saldo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='saldo-transaction'>
                <p>Deseas ver los movimientos?</p>
                <NavLink to='/gestionar/movimientos' className="to-button">
                    <GrTransaction />Ver Movimientos
                </NavLink>
            </div>

        </div>
    );
}

export default ManageViewBalance;