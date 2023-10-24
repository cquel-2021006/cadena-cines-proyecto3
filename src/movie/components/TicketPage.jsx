import { useEffect } from "react";
import { useState } from "react";
import { getMovieById } from "../api/movie";
import { useParams } from 'react-router-dom';

export const TicketPage = () => {
    const [movieId, setMovieId] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const options = [];

    letters.forEach(letter => {
        numbers.forEach(number => {
            options.push(letter + number);
        });
    });

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await getMovieById(id);
                console.log("Movie details are:", movie);
                console.log(movieId);
                setMovieId(movie)
            } catch (error) {
                console.error('Error fetching movie', error);
                setError(error)
            }
        };
        fetchMovie();
    }, [id]);


    const back = (event) => {
        event.preventDefault();
        window.location.href = '/home'
    }

    if (error) {
        return <h1>Ha ocurrido un error: {error.message}</h1>
    }

    return (
        <>
            <button onClick={back}>Regresar</button>
            <div className="ticketMovie">
                <form >
                    {movieId ? (
                        <div style={{ backgroundColor: 'white', borderRadius: '18px', padding: '20px' }}>
                            <h4>Elige tu asiento para la funcion para:
                                <br />
                                {movieId.title}
                            </h4>
                            <br />
                            <select onChange={(event) => {
                                setUsePost({
                                    seat: {
                                        ...usePost.ticket,
                                        seat: event.target.value
                                    }
                                })
                            }} style={{ outline: 'none', borderRadius: '10px', width: '70px' }} >
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <br />
                            <button>Aceptar</button>
                        </div>
                    ) : (
                        <h1>Cargando...</h1>
                    )}
                </form>
            </div>
        </>
    )
}