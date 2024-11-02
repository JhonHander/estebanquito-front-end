import React from 'react';
import './ManageViewBalance.css';
import { NavLink } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { getUserInfo } from '../requests/getUserInfo';
import { useState } from 'react';
import { useEffect } from 'react';

function ManageViewBalance() {

    const [userData, setData] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const getData = await getUserInfo();
            const type = await getData.tipo;
            const accountNumber = await getData.numero_cuenta;
            const amount = await getData.saldo;
            if (accountNumber && type) {
                setData([
                    { type: type, accountNumber: accountNumber, amount: amount },
                ]);
            }
        };
        fetchUser();
    }, []);


    return (
        <div className='saldo-container'>
            <h1>Saldo</h1>

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
                    {userData.map((cuenta, index) => (
                        <tr key={index}>
                            <td>{cuenta.type}</td>
                            <td>{cuenta.accountNumber}</td>
                            {/* <td>${cuenta.saldo.toFixed(2)}</td> */}
                            <td>${cuenta.amount}</td>
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



