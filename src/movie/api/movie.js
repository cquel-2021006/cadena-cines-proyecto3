import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/movie/"

const URL2 = "http://localhost:8080/api/function/";

export const getMovie = async () => {
    try {
        const movieList = await axios.get(`${URL}get`);
        console.log(movieList.data);
        return movieList.data
    } catch (error) {
        console.log(error);
    }
}

//----------------------------------------

export const getDateFunc = async (idFunc) => {
    try {
        const response = await axios.post(`${URL2}getDate`, {
            id: idFunc
        });

        console.log('Response from server:', response);
        if (response.data && response.data.date) {
            setFunc({ ...func, date: response.data.date });
        } else {
            console.log('date not found in response');
        }
    } catch (error) {
        console.log('Error fetching date:', error);
    }
};


//------------------------------------------

export const getFuncById = async (id) => {
    try {
        const listFunc = await axios.get(`${URL2}getById/${id}`);
        console.log(listFunc);
        console.log(listFunc.data._id);
        return listFunc.data._id;
    } catch (error) {
        console.error('Error al obtener los datos:', error.response ? error.response.data : error.message);
    }
}


//------------------------------------------

export const getMovieById = async (id) => {
    try {
        const listMovie = await axios.get(`${URL}getById/${id}`);
        console.log(listMovie);
        console.log(listMovie.data);
        return listMovie.data;
    } catch (error) {
        console.error(error);
    }
}
