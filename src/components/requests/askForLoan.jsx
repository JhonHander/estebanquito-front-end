import { currrentAccount, getToken } from './jwtManage';

export const askForLoan = async (amount, term) => {
    try {
        const token = getToken();
        // console.log("Token:", token);

        const response = await fetch('http://localhost:3000/api/askForLoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                accountNumber: currrentAccount(),
                amount: amount,
                term: term
            }),
        });

        if (response.ok) {
            const data = await response.json();
            // console.log('data: ', data);
            return data;
        } else {
            console.log("Error al solicitar el préstamo");
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}