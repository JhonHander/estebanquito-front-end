import React, { useEffect } from "react";
import { useState } from "react";
import { GrLinkDown } from "react-icons/gr";
import "./TransactionsWithdraw.css";

function TransactionsWithdraw() {
    const [pin, setPin] = useState('');
    const [amount, setAmount] = useState('');
    const [Loading, setLoading] = useState(false);

    // Generar PIN aleatorio al cargar el componente
    useEffect(() => {
        const generateRandomPin = () => Math.floor(1000 + Math.random() * 9000);
        setPin(generateRandomPin());
    }, []);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleWithdraw = () => {

        if ((!amount || amount <= 0)) {
            window.alert('Por favor, ingresa un valor a retirar.');
            setAmount('');
            return;
        }
        const confirmWithDraw = window.confirm('¿Estás seguro de realizar la transferencia?');
        if (confirmWithDraw) {
            setLoading(true);
            alert(`Has solicitado retirar $${amount}. No olvides recoger tu dinero.`);

            setTimeout(() => {
                setLoading(false);
                setAmount('');
            }
                , 1500);
        }
    };

    return (
        <div className="withdraw-container">
            <h1>Retirar dinero</h1>

            <div className="pin-container">
                <label htmlFor="pin">PIN:</label>
                <input
                    type="text"
                    id="pin"
                    value={pin}
                    className="pin-input"
                    readOnly
                />
            </div>

            <input
                type="number"
                placeholder="Ingresa el valor a retirar"
                value={amount}
                className="withdraw-input"
                onChange={handleAmountChange}
            />

            <button onClick={handleWithdraw}>
                {Loading ? 'Cargando...' : 'Retirar'}
            </button>

            <p className="info-text">
                <GrLinkDown /> Con este pin puedes retirar tu dinero en alguna de las sucursales físicas.
            </p>
        </div>
    )
}

export default TransactionsWithdraw;