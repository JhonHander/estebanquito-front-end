import { jwtDecode } from 'jwt-decode';

const jwtDecoded = () => {
    const token = sessionStorage.getItem('token');
    const decoded = jwtDecode(token);
    return decoded;
}

const savedToken = (token) => {
    sessionStorage.setItem('token', token);
}

const getToken = () => {
    return sessionStorage.getItem('token');
}

export { jwtDecoded, savedToken, getToken };
