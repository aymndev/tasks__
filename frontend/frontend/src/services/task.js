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
export function removeTask(){
    const token =localStorage.getItem("token");
    return axios.delete(
        `${API}/task`,{

            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

}

export function createTask(data){
    const token =localStorage.getItem("token");
    return axios.post(
        `${API}/task`,
        data,
        {
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
export const getTaskStats = async () => {
    const token = localStorage.getItem("token");

    return axios.get("http://localhost:3000/task/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};