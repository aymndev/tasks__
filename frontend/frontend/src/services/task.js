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

export function createTask(){
    const token =localStorage.hetItem("token");
    return axios.post(`${API}/task`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
}
export function completeTask(id) {
    const token = localStorage.getItem("token");

    return axios.put(
        `${API}/task/${id}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}

export function searchTask(q) {
    const token = localStorage.getItem("token");

    return axios.get(`${API}/task/search`, {
        params: { q },
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}