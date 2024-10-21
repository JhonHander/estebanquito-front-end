import React from "react";
import { useState } from "react";
import "./LoanRequest.css";

function loanRequest() {

    // const [amount, setAmount] = useState('');
    // const [term, setTerm] = useState('');

    // // Maneja el cambio del monto
    // const handleAmountChange = (e) => {
    //     setAmount(e.target.value);
    // };

    // // Maneja el cambio del plazo
    // const handleTermChange = (e) => {
    //     setTerm(e.target.value);
    // };

    // // Maneja la acción de confirmar el préstamo
    // const handleConfirm = () => {
    //     if (!amount || !term) {
    //         alert('Por favor, ingresa el monto y selecciona un plazo.');
    //         return;
    //     }
    //     alert(`Has solicitado un préstamo de $${amount} a pagar en ${term}.`);
    //     setAmount(''); // Resetear monto
    //     setTerm(''); // Resetear plazo
    // };

    // return (
    //     <div className="loan-request-container">
    //         <h1>Solicitar préstamo</h1>

    //         <input
    //             type="number"
    //             placeholder="Ingresa el valor a prestar"
    //             value={amount}
    //             onChange={handleAmountChange}
    //         />

    //         <label htmlFor="term">Plazo</label>
    //         <select id="term" value={term} onChange={handleTermChange}>
    //             <option value="" disabled>
    //                 Selecciona el plazo que necesites
    //             </option>
    //             <option value="1 semana">1 semana</option>
    //             <option value="2 semanas">2 semanas</option>
    //             <option value="1 mes">1 mes</option>
    //             <option value="2 meses">2 meses</option>
    //         </select>

    //         <button onClick={handleConfirm}>Confirmar</button>
    //     </div>
    // );

    const [loanData, setLoanData] = useState({
        amount: '',
        term: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoanData({ ...loanData, [name]: value });
    };

    const handleConfirm = () => {
        if (!validate()) return;

        const confirmLoan = window.confirm('¿Estás seguro de solicitar el préstamo?');
        if (confirmLoan) {
            //mostrar indicador de carga
            setLoading(true);

            alert(`Has solicitado un préstamo de $${amount} a pagar en ${term}.`);
            //esto hace que la transferencia se realice después de 1 segundo y se setee todo
            setTimeout(() => {
                setLoading(false);
                console.log('Préstamo solicitado:', loanData);
                setLoanData({ amount: '', term: '' });
            }
                , 1500);
        }
    }

    const validate = () => {
        if (loanData.amount === '' || loanData.term === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }
        if (loanData.amount < 0) {
            alert('Por favor, ingrese un monto válido');
            return false;
        }
        return true
    }

    return (
        <div className="loan-request-container">
            <h1>Solicitar préstamo</h1>

            <input
                type="number"
                name="amount"
                placeholder="Ingresa el valor a retirar"
                value={loanData.amount}
                className="withdraw-input"
                onChange={handleChange}
            />

            <label>Plazo</label>
            <select
                id="term"
                name="term"
                value={loanData.term}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Selecciona el plazo que necesites
                </option>
                <option value="1 semana">1 semana</option>
                <option value="2 semanas">2 semanas</option>
                <option value="1 mes">1 mes</option>
                <option value="2 meses">2 meses</option>
            </select>

            <button onClick={handleConfirm}>Confirmar</button>
        </div>
    )
}

export default loanRequest;
