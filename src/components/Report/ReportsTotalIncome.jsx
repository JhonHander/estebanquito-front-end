// import './ReportsTotalIncome.css';
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../context/userContext';
// import { getReportTotalIncome } from '../requests/getTotalIncome';
// import { useEffect } from 'react';

// function ReportsTotalIncome() {

//     const { user } = useContext(UserContext);

//     const [total, setTotal] = useState('');


//     useEffect(() => {

//         setTimeout(() => {
//             const result = async () => {
//                 const data = await getReportTotalIncome();
//                 setTotal(data.totalIncome);
//                 console.log(data.totalIncome);
//             }
//             result();
//         }, 1000);

//     }
//         , []);

//     return (
//         <div className="total-income-container">
//             <h1>Total Ingresos</h1>
//             <p>{user.nombre || 'Cargando...'}, en total ha ingresado a tu cuenta:</p>

//             <div className="input-group">
//                 <label>Total</label>
//                 <input
//                     type="text"
//                     id="total"
//                     value={total || 'Cargando...'}
//                     readOnly={true}
//                 />
//             </div>
//         </div>
//     );
// }

// export default ReportsTotalIncome;

import './ReportsTotalIncome.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { getReportTotalIncome } from '../requests/getTotalIncome';

function ReportsTotalIncome() {
    const { user } = useContext(UserContext);
    const [total, setTotal] = useState(null); // Usa null para indicar que el dato aún no se ha cargado.
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTotalIncome = async () => {
            try {
                const data = await getReportTotalIncome();
                if (data && data.totalIncome !== undefined) {
                    setTotal(data.totalIncome);
                } else {
                    console.log("Error: La respuesta no contiene el total de ingresos.");
                }
            } catch (error) {
                console.error("Error al obtener el total de ingresos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTotalIncome();
    }, []);

    return (
        <div className="total-income-container">
            <h1>Total Ingresos</h1>
            <p>
                {user?.nombre ? `${user.nombre}, en total ha ingresado a tu cuenta:` : 'Cargando...'}
            </p>

            <div className="input-group">
                <label>Total</label>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <input
                        type="text"
                        id="total"
                        value={total !== null ? total : 'No disponible'}
                        readOnly={true}
                    />
                )}
            </div>
        </div>
    );
}

export default ReportsTotalIncome;
