import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getUserById } from '../api/user';

export const UserPage = () => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Configura axios para usar el token en todas las solicitudes
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                // Hace una solicitud GET a tu API
                const response = await axios.get(getUserById);
                setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, [token]);


    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

