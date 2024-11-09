import React, { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { GrLinkDown } from "react-icons/gr";
import "./TransactionsWithdraw.css";
import { getUserInfo } from "../requests/getUserInfo";
import { withdrawMoney } from "../requests/withdrawMoney";

function TransactionsWithdraw() {
    const [pin, setPin] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);


    // Generar PIN aleatorio al cargar el componente
    // useEffect(() => {
    //     setPin(generateRandomPin());

    //     const fetchUser = async () => {
    //         const getData = await getUserInfo();
    //         setTransferData(prevData => ({
    //             ...prevData,
    //             accountNumber: getData.numero_cuenta || ''
    //         }));
    //     }
    //     fetchUser();
    // }, []);

    useEffect(() => {
        setPin(generateRandomPin());
    }, []);


    const generateRandomPin = () => Math.floor(1000 + Math.random() * 9000);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleWithdraw = async () => {

        if ((!amount || amount <= 0)) {
            window.alert('Por favor, ingresa un valor a retirar.');
            setAmount('');
            return;
        }
        const confirmWithDraw = window.confirm('¿Estás seguro de realizar la transferencia?');
        if (confirmWithDraw) {

            // const result = await withdrawMoney(amount);
            await withdrawMoney(amount);
            // console.log(result.message);

            setLoading(true);


            setTimeout(() => {
                alert(`Has solicitado retirar $${amount}. No olvides recoger tu dinero.`);
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
                {loading ? 'Cargando...' : 'Retirar'}
            </button>

            <p className="info-text">
                <GrLinkDown /> Con este pin puedes retirar tu dinero en alguna de las sucursales físicas.
            </p>
        </div>
    )
}

export default TransactionsWithdraw;