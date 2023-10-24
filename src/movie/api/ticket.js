import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/ticket/";

export const createTicket = async (movie, seat) => {
    console.log(movie);
    try {
      const { taskSave } = await axios.post(`${URL}post`, {
        movie: movie.movie,
        seat: movie.seat
      });
      return true;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo agregar el ticket",
      });
    }
  };

  export const DeleteTicket = async (id) => {
    try {
      const { data } = await axios.delete(`${URL}delete/${id}`);
  
      return true;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      if (message === "Ticket Delet") {
        window.location.href = "/user";
      }
      if (message) {
        return message;
      }
    }
  };