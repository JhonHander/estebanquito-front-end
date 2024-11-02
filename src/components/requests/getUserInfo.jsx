// Objective: Get the name of the user logged in
import { currrentAccount, getToken } from './jwtManage';

export const getUserInfo = async () => {
    try {
        const token = getToken();
        // console.log("Token:", token);

        const response = await fetch('http://localhost:3000/api/getUserByAccountNumber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ accountNumber: currrentAccount() }),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error al obtener el nombre del usuario");
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
};