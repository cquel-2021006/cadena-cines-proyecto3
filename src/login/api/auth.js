import axios from "axios";

export const login = async (email, password) => {
  try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
          email, password
      });
      const token = response.data.token

      return token
  } catch (error) {
      if (error.response) {
          console.log(error.response.data);
      } else if (error.request) {
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
  }
}


  
  export const register = async (email, password, name, lastname, phone) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password,
        name,
        lastname,
        phone,
      });
      const token = response.data.token;
      const userId = response.data.user.id; // Asegúrate de que esto coincide con la estructura de tus datos
  
      localStorage.setItem("x-token", token);
      localStorage.setItem("user-id", userId);
  
      return token;
    } catch (error) {
      console.error(error);
    }
  };
  