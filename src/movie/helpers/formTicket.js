import Swal from "sweetalert2";
import { createTicket } from "../api/ticket";
import { apiUpdate } from "../api/user";

export const sendData = async (state, option) => {
  let resultado;
  console.log(state.ticket);
  switch (option) {
    case 1:
      resultado = await createTicket({
        movie: state.ticket.movie,
        seat: state.ticket.seat,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Se agrego la tarea",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        })
      }

      break;
  }
};

export const UpdateData = async (state, option) => {
  let resultado;
  console.log(state.user);
  switch (option) {
    case 1:
      resultado = await apiUpdate(state.user.id, {
        ticket: state.user.ticket
      })

      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Se agrego la tarea",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        })
      }
      break;
  }
};

