import axios from "axios";

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/user/"

export const apiUserById = async () => {
    try {
        const listUser = await axios.get(`${URL}getById/:`, {headers: {'x-token': token}});
        console.log(listUser);
        return listUser.data.user;
    } catch (error) {
        console.error(error);
    }
};

export const apiUpdate = async (id, userData) => {
    try {
        const updatedUser = await axios.put(`${URL}put/${id}`, userData, {headers: {'x-token': token}});
        console.log(updatedUser);
        return updatedUser.data.user;
    } catch (error) {
        console.error(error);
    }
};


