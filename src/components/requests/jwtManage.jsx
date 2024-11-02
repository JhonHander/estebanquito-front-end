import { jwtDecode } from 'jwt-decode';

const currrentAccount = () => {
    const token = sessionStorage.getItem('token');
    const decoded = jwtDecode(token);
    return decoded.numero_cuenta;
}

const saveToken = (token) => {
    sessionStorage.setItem('token', token);
}

const getToken = () => {
    return sessionStorage.getItem('token');
}

const removeToken = () => {
    sessionStorage.removeItem('token');
}

export { currrentAccount, saveToken, getToken, removeToken };
