import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [registerData, setRegisterData] = useState({
        accountNumber: '',
        name: '',
        email: '',
        password: '',
        type: 'Corriente',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            const data = await response.json(); //convertir la respuesta a json

            // console.log('Respuesta:', data);
            if (response.ok) {
                setMessage(`Registro exitoso bienvenido ${data.name} a Estebanquito`);
            } else {
                setMessage(data.message || 'Error al registrarse. Intentalo de nuevo o más tarde');
            }
            setRegisterData({ accountNumber: '', name: '', email: '', password: '', type: 'Ahorros' });
        } catch (error) {
            // console.log('Error en el registro:', error.message);
            setMessage('Error al registrarse. Intentalo de nuevo o más tarde');
        }
    };

    const validate = () => {
        if (registerData.nombre === '' || registerData.email === '' || registerData.contraseña === '' || registerData.numero_cuenta === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }
        return true;
    }

    return (
        <div className='father-container-register'>
            <div className="register-container">
                <h2>Registro</h2>
                <p>¡Es muy fácil!</p>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleRegister}>
                    <div className="input-container">
                        {/* <label className='label-register'>Número de celular</label> */}
                        <input
                            className="input-login"
                            type="text"
                            label="Número de celular"
                            name="accountNumber"
                            placeholder="Ingrese su número de celular"
                            value={registerData.accountNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        {/* <label className='label-register'>Nombre</label> */}
                        <input
                            className="input-login"
                            type="text"
                            name="name"
                            placeholder="Ingrese su nombre"
                            value={registerData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        {/* <label className='label-register'>Correo</label> */}
                        <input
                            className="input-login"
                            type="email"
                            name="email"
                            placeholder="Ingrese su email"
                            value={registerData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        {/* <label className='label-register' >Contraseña</label> */}
                        <input
                            className="input-login"
                            type="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            value={registerData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className='label-register'>Tipo de cuenta</label>
                        <select
                            name="type"
                            value={registerData.type}
                            onChange={handleChange}
                            className="input-select"
                        >
                            <option value="Ahorros">Ahorros</option>
                            <option value="Corriente">Corriente</option>
                        </select>
                    </div>

                    <button type="submit" className="login-button">Registrarse</button>
                </form>
                <p>¿Ya estás registrado? <a href="/login">Iniciar Sesión</a></p>
            </div>
        </div>
    );
};

export default Register;