// Objective: request to transfer money from one account to another.
import { getToken } from './jwtManage';

export const tranferMoney = async (data) => {
    try {
        const token = getToken();
        const response = await fetch('http://localhost:3000/api/transferMoney', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Dinero transferido con éxito", data);
            return { success: true, data };
        } else {
            const errorData = await response.json();
            console.log("Error al transferir el dinero:", errorData.message);
            return { success: false, message: errorData.message };
        }
    } catch (error) {
        console.log('Error:', error.message);
        return { success: false, message: 'Error en el servidor' };
    }
};

