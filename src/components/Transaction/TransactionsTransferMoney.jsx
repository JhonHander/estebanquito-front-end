import React, { useState } from "react";
import "./TransactionsTransferMoney.css";
import { NavLink } from "react-router-dom";

function transactionsTransferMoney() {
    const [transferData, setTransferData] = useState({
        amount: '',
        accountNumber: '',
    });

    const [Loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransferData({ ...transferData, [name]: value });
    };

    const handleTransfer = () => {
        if (!validate()) return;

        const confirmTransfer = window.confirm('¿Estás seguro de realizar la transferencia?');
        if (confirmTransfer) {
            //mostrar indicador de carga
            setLoading(true);

            //esto hace que la transferencia se realice después de 1 segundo y se setee todo
            setTimeout(() => {
                setLoading(false);
                console.log('Transferencia enviada:', transferData);
                setTransferData({ amount: '', accountNumber: '' });
            }
                , 1500);
        }
    };

    const validate = () => {
        if (transferData.amount === '' || transferData.accountNumber === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }
        if (transferData.amount < 0) {
            alert('Por favor, ingrese un monto válido');
            return false;
        }
        return true
    }

    return (
        <div className="transfer-container">
            <h1>Transferir dinero</h1>
            <input
                type="number"
                name="amount"
                placeholder="Ingresa el valor a transferir"
                value={transferData.amount}
                onChange={handleChange}
                className="transfer-input"
                disabled={Loading}
            />
            <input
                type="text"
                name="accountNumber"
                placeholder="Ingrese el número de la cuenta"
                value={transferData.accountNumber}
                onChange={handleChange}
                className="transfer-input"
                disabled={Loading}
            />
            <button
                className="transfer-button"
                onClick={handleTransfer}
                disabled={Loading}
            >
                {Loading ? 'Cargando...' : 'Transferir'}
            </button>

            <div className='transfer-transaction'>
                <p>Deseas ver los movimientos?</p>
                <NavLink to='/gestionar/movimientos' className="to-button" disabled={Loading}>
                    Ver Movimientos
                </NavLink>
            </div>

        </div>
    );
}

export default transactionsTransferMoney;
