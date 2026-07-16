import axios from 'axios';
const API="http://localhost:3000";



export function getTask() {
    const token=localStorage.getItem("token");


    return axios.get(`${API}/task`,{
        headers:{
            Authorization:`Bearer ${token}`
        },
    });
}
