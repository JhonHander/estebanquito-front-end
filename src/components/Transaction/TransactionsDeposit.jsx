import React, { useEffect, useState } from "react";
import "./TransactionsDeposit.css";
import { NavLink } from "react-router-dom";
import { tranferMoney } from "../requests/transferMoney";
import { depositMoney } from "../requests/transaction.depositMoney";


function TransactionsDeposit() {

    const [DepositData, setDepositData] = useState({
        amount: '',
    });

    const [Loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setDepositData({
            ...DepositData, [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        if (DepositData.amount === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }
        if (DepositData.amount <= 0) {
            alert('Por favor, ingrese un monto válido');
            return false;
        }
        return true
    }

    const handleDeposit = async () => {
        if (!validate()) return;

        const confirmDeposit = window.confirm('¿Estás seguro de realizar el depósito?');
        if (confirmDeposit) {
            setLoading(true);


            const result = await depositMoney(DepositData);
            setLoading(false);
            if (result.success) {
                alert("Depósito realizado con éxito");
                setDepositData({ amount: '' });
            } else {
                alert(`Error al depositar el dinero: ${result.message}`);
            }
        }
    };


    return (
        <div className="deposit-container">
            <h1>Depositar dinero</h1>
            <input
                type="number"
                name="amount"
                placeholder="Ingresa el valor a Depositar"
                value={DepositData.amount || ''}
                onChange={handleChange}
                className="deposit-input"
                disabled={Loading}
            />

            <button
                className="deposit-button"
                onClick={handleDeposit}
                disabled={Loading}
            >
                {Loading ? 'Cargando...' : 'Depositar'}
            </button>

            <div className='deposit-transaction'>
                <p>Deseas ver los movimientos?</p>
                <NavLink to='/gestionar/movimientos' className="to-button" disabled={Loading}>
                    Ver Movimientos
                </NavLink>
            </div>

        </div>
    )
}

export default TransactionsDeposit;