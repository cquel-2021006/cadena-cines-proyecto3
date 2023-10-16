import axios from "axios";

const URL = "http://localhost:8080/api/movie/"

export const getMovie = async () => {
    try {
        const movieList = await axios.get(`${URL}get`);
        console.log(movieList.data);
        return movieList.data
    } catch (error) {
        console.log(error);
    }
}