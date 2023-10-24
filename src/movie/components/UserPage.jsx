import React, { useEffect, useState } from "react";
import { apiUserById } from "../api/user";
import '../styleMovie.css'

export const UserPage = () => {
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState(null);

    const back = (event) => {
        event.preventDefault();
        window.location.href = '/home'
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const id = await apiUserById();
                console.log("User ID:", id);
                setUserId(id);
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(error);
            }
        };

        fetchUser();
    }, []);

    if (error) {
        return <h1>Ha ocurrido un error: {error.message}</h1>;
    }

    return (
        <>
        <button onClick={back}>Regresar</button>
            <div className="profile-page">
                {userId ? (
                    <div>
                        <p>Bienvenido: <strong>{userId.name} </strong></p>
                        <p>Apellido: <strong>{userId.lastname}</strong></p>
                        <p>Teléfono: {userId.phone}</p>
                        <p>Email: {userId.email}</p>
                        <p>Ticket: {userId.ticket}</p>
                    </div>
                ) : (
                    <h1>Cargando...</h1>
                )}
            </div>
        </>
    );
};
