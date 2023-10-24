import React from "react";
import Swal from "sweetalert2";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styleMovie.css'
import { useState } from "react";
import { getFuncById, getMovie } from "../api/movie";
import { useEffect } from "react";

import { useParams } from 'react-router-dom';

import axios from "axios";


export const MoviePage = ({ t }) => {
    const [movieList, setMovieList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [funcId, setFuncId] = useState(null)
    const [error, setError] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchFunc = async () => {
            try {
                const func = await getFuncById(id);
                console.log("Function details are:", func);
                console.log(funcId);
                setFuncId(func)
            } catch (error) {
                console.error('Error fetching function', error);
                setError(error)
            }
        };
        fetchFunc();
    }, [id]);


    const handleClick = () => {
        window.location.href = '/user'
    }

    const onlineTicket = (id) => {
        window.location.href = '/ticket/' + id;
    }

    const viewMovie = async () => {
        const listMovie = await getMovie();
        setMovieList(listMovie);
    }

    useEffect(() => {
        viewMovie();
    }, [showModal]);



    const handleLogout = async () => {
        Swal.fire({
            title: '¿Estás seguro de que quieres salir?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/'
            }
        })
    }

    if (error) {
        return <p>error: {error.message}</p>
    }


    return (
        <>
            <div className="movieContainer">

                <div className="title-container">
                    <br />
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Cadena de cine</h2>
                </div>
                <div className="navbar-container">
                    <br />
                    <Navbar bg="white" data-bs-theme="dark" style={{ borderRadius: '18px' }}>
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link onClick={handleClick}>
                                    <i className="fa-solid fa-user" style={{ fontSize: '30px', marginRight: '20px', color: 'black' }}></i>
                                </Nav.Link>

                                <Nav.Link>
                                    <i className="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: '30px', marginRight: '10px', color: 'black' }} onClick={handleLogout}></i>
                                </Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <br />

            <div className="columns" >
                {movieList?.map((t) => {
                    return (
                        <Card key={t._id} style={{ width: '18rem', marginRight: '10px' }}>
                            <Card.Img
                                variant="top"
                                src={t.img}
                                alt={t.title}
                                style={{ objectFit: 'cover', height: 'auto' }}
                            />

                            <Card.Body>
                                <Card.Title>{t.title}</Card.Title>
                                <Card.Text>
                                    {t.clas}
                                    <br />
                                    {funcId ? (
                                        <p>{funcId.date}</p>
                                    ): 
                                        <p>Error</p>
                                    }
                                </Card.Text>
                                <Button variant="primary" onClick={() => onlineTicket(t._id)}>
                                    Reservar Pelicula
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <br />

        </>
    )
}