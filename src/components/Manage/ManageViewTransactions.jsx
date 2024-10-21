import React from 'react';
import './ManageViewTransactions.css';
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

function manageViewTransactions() {

    const movementData = [
        { date: "17/10/2024", amount: 500 },
        { date: "15/10/2024", amount: 300 },
        { date: "12/10/2024", amount: 200 },
    ];


    return (
        <div className="movements-container">
            <h1>Movimientos</h1>
            <table className="movements-table">
                <caption>Movimientos</caption>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Dinero transferido</th>
                    </tr>
                </thead>
                <tbody>
                    {movementData.map((movement, index) => (
                        <tr key={index}>
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

    // return (
    //     <div className="movements-container">
    //         <h1>Movimientos</h1>
    //         <table className="movements-table">
    //             <caption>Movimientos</caption>
    //             <thead>
    //                 <tr>
    //                     <th>Fecha</th>+
    //                     <th>Dinero transferido</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>17/10/2024</td>
    //                     <td>$500</td>
    //                 </tr>
    //                 <tr>
    //                     <td>15/10/2024</td>
    //                     <td>$300</td>
    //                 </tr>
    //                 <tr>
    //                     <td>12/10/2024</td>
    //                     <td>$200</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    // );
}

export default manageViewTransactions;