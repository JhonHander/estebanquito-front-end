import React from 'react';
import './HeaderLogSign.css';

// import decoracion from '../../assets/decoracion-logsign-superior.png'; // Importa la imagen decorativa
// import completo from '../../assets/logo-header-logsign-prueba.png'; // Importa la imagen del icono del banco

function HeaderLogSign() {
    return (
        <header className="header-container">
            <div>
                <img src={completo} alt="Logo" className='logo' />
            </div>
            <div className="decoration-container">
                <img src={decoracion} alt="Decoración" className="decoration" />
            </div>
        </header>
    );
}

export default HeaderLogSign;

