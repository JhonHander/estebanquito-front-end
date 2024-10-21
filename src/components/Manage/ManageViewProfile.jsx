import React from "react";
import { useState } from "react";
import "./ManageViewProfile.css";

function manageViewProfile() {
    // Estado para los datos del perfil
    const [profileData, setProfileData] = useState({
        name: "Nombre del usuario",
        email: "correo@ejemplo.com",
        accountNumber: "123456789",
        accountType: "Cuenta de ahorro",
    });

    const [isEditing, setIsEditing] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleUpdate = () => {
        if (!validate()) return;
        const confirmUpdate = window.confirm('¿Estás seguro de actualizar los datos?');
        if (confirmUpdate) {
            setIsEditing(true);

            setTimeout(() => {
                setIsEditing(false);
                console.log("Datos actualizados:", profileData);
            }, 1500);

        }
    };

    const validate = () => {
        if (profileData.name === '' || profileData.email === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }
        return true
    }

    return (
        <div className="profile-container">
            <h1>Detalle perfil</h1>
            <div className="profile-details">
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Correo asociado:
                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Número de cuenta:
                    <input
                        type="text"
                        name="accountNumber"
                        value={profileData.accountNumber}
                        onChange={handleChange}
                        disabled={true}
                    />
                </label>
                <label>
                    Tipo de cuenta:
                    <input
                        type="text"
                        name="accountType"
                        value={profileData.accountType}
                        onChange={handleChange}
                        disabled={true}
                    />
                </label>
            </div>

            <button
                className="edit-button"
                onClick={() => {
                    if (!validate()) {
                        return;
                    }
                    else setIsEditing(!isEditing);
                }}
            >
                {isEditing ? "Cancelar" : "Editar"}
            </button>

            {isEditing && (
                <button className="update-button" onClick={handleUpdate}>
                    Actualizar datos
                </button>
            )}
        </div>
    )
}

export default manageViewProfile;