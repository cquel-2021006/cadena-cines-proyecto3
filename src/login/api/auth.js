export const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      const userId = response.data.user.id; // Asegúrate de que esto coincide con la estructura de tus datos
  
      localStorage.setItem("x-token", token);
      localStorage.setItem("user-id", userId);
  
      return token;
    } catch (error) {
      // manejo de errores
    }
  };
  
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
      // manejo de errores
    }
  };
  