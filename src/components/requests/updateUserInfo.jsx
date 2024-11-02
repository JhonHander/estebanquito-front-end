import { getToken } from './jwtManage';

export const updateUserInfo = async (data) => {
    try {
        const token = getToken();
        const url = `http://localhost:3000/api/updateUserByAccountNumber`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error al actualizar datos:");
        }
    } catch (error) {
        console.log("Error al actualizar datos:", error.message);
    }
}