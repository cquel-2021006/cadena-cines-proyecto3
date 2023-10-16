import React from "react";
import Swal from "sweetalert2";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styleMovie.css'

export const MoviePage = () => {

  const handleClick = () => {
    window.location.href = '/user'
  }

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


    return (
        <>
            <div className="movieContainer">
                <div className="title-container">
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Cadena de cine</h2>
                </div>
                <div className="navbar-container">
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

            <div className="columns" style={{ display: 'flex' }}>

                <Card style={{ width: '18rem', marginRight: '10px' }}>
                    <Card.Img variant="top" src="https://static.wikia.nocookie.net/doblaje/images/0/08/Volver_al_Futuro_Poster.jpg/revision/latest?cb=20201122071805&path-prefix=es" />
                    <Card.Body>
                        <Card.Title>Volver al Futuro</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
<br />
                <Card style={{ width: '18rem', marginLeft: '10px' }}>
                    <Card.Img variant="top" src="https://static.wikia.nocookie.net/doblaje/images/0/08/Volver_al_Futuro_Poster.jpg/revision/latest?cb=20201122071805&path-prefix=es" />
                    <Card.Body>
                        <Card.Title>Saw x</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}