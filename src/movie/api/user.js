import axios from "axios";

export const getUserById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/user/get/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

