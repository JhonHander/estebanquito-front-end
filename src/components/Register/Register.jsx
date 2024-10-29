import React, { useState } from 'react';
import './Register.css';
import HeaderLogSign from '../Headers/HeaderLogSign'
import axios, { Axios } from 'axios';

function Register() {

    const [registerData, setRegisterData] = useState({
        accountNumber: '',
        name: '',
        email: '',
        password: '',
        type: 'Ahorros',
    });
    const [message, setMessage] = useState('');

    const [newInterface, setNewInterface] = useState(null);

    // axios.post('http://localhost:3000/api/register', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     data: JSON.stringify(registerData),
    // }).then((response) => {
    //     console.log('Respuesta:', response.data);
    //     setMessage('Registro exitoso');
    // }).catch((error) => {
    //     console.log('Error en el registro:', error);
    // }

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
        <div className="register-container">
            <HeaderLogSign />
            <h2>Registro</h2>
            <p>¡Es muy fácil!</p>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleRegister}>
                <div className="input-container">
                    <input
                        className="input-register"
                        type="text"
                        name="accountNumber"
                        placeholder="Ingrese su número de celular"
                        value={registerData.accountNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-register"
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        value={registerData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-register"
                        type="email"
                        name="email"
                        placeholder="Ingrese su email"
                        value={registerData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-register"
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={registerData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="account-type">
                    <p>Tipo de cuenta:</p>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="Ahorros"
                            checked={registerData.type === 'Ahorros'}
                            onChange={handleChange}
                        />
                        Ahorros
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="Corriente"
                            checked={registerData.type === 'Corriente'}
                            onChange={handleChange}
                        />
                        Corriente
                    </label>
                </div>

                <button type="submit" className="register-button">Registrarse</button>
            </form>
            <p>¿Ya estás registrado? <a href="/login">Iniciar Sesión</a></p>
        </div>


        // <div className="register-container">
        //     <HeaderLogSign />
        //     <h2>Registro</h2>
        //     <p>¡Es muy fácil!</p>
        //     {/* {message && <p className="message">{message}</p>} */}
        //     <form onSubmit={handleRegister}>
        //         <div className="input-container">
        //             <input className='input-register'
        //                 type="text"
        //                 name="name"
        //                 placeholder="Ingrese su nombre"
        //                 value={registerData.name}

        //             />
        //         </div>
        //         <div className="input-container">
        //             <input className='input-register'
        //                 type="email"
        //                 placeholder="Ingrese su correo"
        //                 value={registerData.email}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="input-container">
        //             <input className='input-register'
        //                 type="password"
        //                 placeholder="Ingrese su contraseña"
        //                 value={registerData.password}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="input-container">
        //             <input className='input-register'
        //                 type="text"
        //                 placeholder="Ingrese su número de celular"
        //                 value={registerData.phone}
        //                 onChange={handleChange}
        //             />
        //         </div>

        //         <div className="account-type">
        //             <p>Tipo de cuenta:</p>
        //             <input
        //                 type="radio"
        //                 value={registerData.accountType}
        //                 checked={accountType === 'Ahorros'}
        //                 onChange={handleChange}
        //             />
        //             Ahorros
        //             <label>
        //                 <input
        //                     type="radio"
        //                     value={registerData.accountType}
        //                     checked={accountType === 'Corriente'}
        //                     onChange={handleChange}
        //                 />
        //                 Corriente
        //             </label>
        //         </div>

        //         <button type="submit" className="register-button">Registrarse</button>
        //     </form>
        //     <p>Ya estás registrado? <a href="/login">Iniciar Sesión</a></p>
        // </div>
    );
};

export default Register;