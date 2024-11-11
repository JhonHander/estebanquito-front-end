import { currrentAccount, getToken } from './jwtManage';

export const depositMoney = async (data) => {
    try {
        const token = getToken();
        const response = await fetch('http://localhost:3000/api/depositMoney', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(
                {
                    accountNumber: currrentAccount(),
                    amount: data.amount,
                }
            ),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Dinero depositado con éxito", data);
            return { success: true, data };
        } else {
            const errorData = await response.json();
            console.log("Error al depositar el dinero:", errorData.message);
            return { success: false, message: errorData.message };
        }
    } catch (error) {
        console.log('Error:', error.message);
        return { success: false, message: 'Error en el servidor' };
    }
}