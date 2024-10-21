import React, { useState } from 'react';
import './Register.css';
import HeaderLogSign from '../Headers/HeaderLogSign'

function Register() {
    // Estados para manejar los inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [accountType, setAccountType] = useState('Ahorros');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Nombre:', name);
        console.log('Correo:', email);
        console.log('Contraseña:', password);
        console.log('Número de celular:', phone);
        console.log('Tipo de cuenta:', accountType);
    };

    return (
        <div className="register-container">
            <HeaderLogSign />
            <h2>Registro</h2>
            <p>¡Es muy fácil!</p>
            <form onSubmit={handleRegister}>
                <div className="input-container">
                    <input className='input-register'
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <input className='input-register'
                        type="email"
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <input className='input-register'
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <input className='input-register'
                        type="text"
                        placeholder="Ingrese su número de celular"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="account-type">
                    <p>Tipo de cuenta:</p>
                    <input
                        type="radio"
                        value={accountType}
                        checked={accountType === 'Ahorros'}
                        onChange={() => setAccountType('Ahorros')}
                    />
                    Ahorros
                    <label>
                        <input
                            type="radio"
                            value={accountType}
                            checked={accountType === 'Corriente'}
                            onChange={() => setAccountType('Corriente')}
                        />
                        Corriente
                    </label>
                </div>

                <button type="submit" className="register-button">Registrarse</button>
            </form>
            <p>Ya estás registrado? <a href="/login">Iniciar Sesión</a></p>
        </div>
    );
};

export default Register;