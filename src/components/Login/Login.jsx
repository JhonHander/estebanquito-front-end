import React, { useState } from 'react'
import './Login.css'
import HeaderLogSign from '../Headers/HeaderLogSign'
import { Navigate } from "react-router-dom";


function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = (event) => {
        event.preventDefault()
        console.log('Usuario: ', user)
        console.log('Contraseña: ', password)
    }

    return (
        <div className="login-container">
            <HeaderLogSign />
            <h2>¡Hola!</h2>
            <p>Completa los campos requeridos</p>
            <form onSubmit={handleLogin}>
                <div className="input-container">
                    <label>Usuario</label>
                    <input className='input-login'
                        type="text"
                        id="username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Ingrese su usuario"
                    />
                </div>
                <div className="input-container">
                    <label>Contraseña</label>
                    <input className='input-login'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <button type="submit" className="login-button" >Iniciar</button>
            </form>

            <p>No eres cliente? <a href="/register">Registrarse</a></p>
        </div>
    );

};



// <div>
//     <h2>Login</h2>
//     <form onSubmit={handleSubmit}>
//         <label>User</label>
//         <input
//             type="text"
//             placeholder="User"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//         />
//         <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Iniciar</button>
//     </form>

// </div>
export default Login