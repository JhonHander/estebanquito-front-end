import React from 'react';
import './ManageMovements.css';
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import { getTransactions } from '../requests/getTransactions';
import { getToken } from '../requests/jwtManage';
import { useNavigate } from 'react-router-dom';

function manageViewTransactions() {

    const navigate = useNavigate();
    const [movementData, setMovementData] = useState([]);


    useEffect(() => {

        if (!getToken()) {
            navigate('/login');
        }

        const fetchMovements = async () => {
            const data = await getTransactions();
            if (data) {
                const formattedData = data.map(transaction => ({
                    type: transaction.tipo,
                    date: transaction.fecha,
                    amount: transaction.monto,
                    currentAccount: transaction.cuenta_principal_id,
                    secondaryAccount: transaction.cuenta_destino_id,
                }));
                setMovementData(formattedData); // Guardar las transacciones procesadas en el estado

            }
        };
        fetchMovements();
    }, []);

    const getRowClassName = (movement) => {

        if (movement.type === 'Retiro') {
            return 'movement-red'; // Color rojo para retiros
        } else if (movement.type === 'Deposito') {
            return 'movement-green'; // Color verde para depósitos
        } else if (movement.type === 'Transferencia') {
            return movement.secondaryAccount === movement.currrentAccount ? 'movement-blue' : 'movement-yellow';
            /* Color azul claro para transferencias recibidas */
            /* Color amarillo claro para transferencias enviadas */

        }
        return '';
    };


    return (
        <div className="movements-container">
            <h1>Bienvenido a sus movimientos</h1>
            <table className="movements-table">
                <caption>Movimientos</caption>
                <thead>
                    <tr>
                        <th>Tipo transferencia</th>
                        <th>Fecha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {movementData.map((movement, index) => (
                        <tr key={index} className={getRowClassName(movement)}>
                            {/* <td>{movement.type}</td> */}
                            {/* <td>{getRowClassName(movement)}</td> */}
                            <td>{movement.type}</td>
                            <td>{movement.date}</td>
                            <td>${movement.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='saldo-transaction'>
                <p>Quizas buscababas el saldo?</p>
                <NavLink to='/gestionar/ver-saldo' className="to-button">
                    <IoMdEye /> Ver Saldo
                </NavLink>
            </div>
        </div>
    );
}

export default manageViewTransactions;