import React, { useState } from "react";
import { login, register } from '../api/auth'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../style.css'

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let token;

        if (isLogin) {
            token = await login(email, password);
            if (token) {
                Swal.fire({
                    title: '¡Inicio de sesión correcto!',
                    text: 'Has iniciado sesión correctamente.',
                    icon: 'success'
                })
            } else {
                Swal.fire({
                    title: 'Error al iniciar sesión',
                    text: 'Usuario o contraseña incorrectos',
                    icon: 'error',
                    timer: 5000
                })
            }
        } else {
            token = await register(email, password, name, lastName, phone);
            if (token) {
                setIsLogin(true);
                window.location.href = '/'

                Swal.fire({
                    title: '¡Registrado con éxito!',
                    text: 'Has iniciado sesión correctamente.',
                    icon: 'success',
                    timer: 5000
                })
            }
        }

        if (token) {
            localStorage.setItem('token', token)
            navigate('/home')
        }
    }


    return (
        <>
            <div className="loginPage-container">

                <div className="loginPage" style={{}}>
                    <h2 className="loginPage-title">{isLogin ? 'Inicia sesión' : 'Regístrate'}</h2>
                    <br />
                    <form className="loginPage-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)}
                            placeholder="Email"
                            autoComplete="off"
                        />
                        <br />
                        <br />
                        {!isLogin && (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)}
                                    placeholder="Nombre"
                                />
                                <br />
                                <br />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)}
                                    placeholder="Apellido"
                                />
                                <br />
                                <br />
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)}
                                    placeholder="Teléfono"
                                />
                                <br />
                                <br />
                            </>
                        )}
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)}
                            placeholder="Contraseña" />
                        <br />
                        <br />
                        <button type="submit">{isLogin ? 'Inicar Sesion' : 'Registrarse'}</button>
                    </form>
                    <br />
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
                    </button>
                </div>
            </div>
        </>
    )
}
