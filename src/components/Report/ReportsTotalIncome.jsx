import './ReportsTotalIncome.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function ReportsTotalIncome() {

    const [total, setTotal] = useState('');
    return (
        <div className="total-income-container">
            <h1>Total ingresos</h1>
            <p>'Hander', en total ha ingresado a tu cuenta:</p>

            <div className="input-group">
                <label>Total</label>
                <input
                    type="text"
                    id="total"
                    value={total}
                    readOnly={true}
                />
            </div>
        </div>
    );
}

export default ReportsTotalIncome;