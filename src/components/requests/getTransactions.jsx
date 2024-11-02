import { currrentAccount, getToken } from './jwtManage';

export const getTransactions = async () => {
    try {
        const token = getToken();
        // console.log("Token:", token);

        const response = await fetch('http://localhost:3000/api/getTransactionsByUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ accountNumber: currrentAccount() }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.log("Error al obtener el nombre del usuario");
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}