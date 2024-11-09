import { getToken } from "./jwtManage";
import { currrentAccount } from "./jwtManage";

export const withdrawMoney = async (data) => {
    try {
        const token = getToken();
        const accountNumber = currrentAccount();

        const response = await fetch('http://localhost:3000/api/withdrawMoney', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                accountNumber: accountNumber,
                amount: data
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error al retirar dineroo");
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}
