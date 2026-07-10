import axios from 'axios';
const API="http://localhost:3000";

export function login(data){
    return axios.post(`${API}/api/auth/login`,data)
}


export function getStatistics() {
    return axios.get(`${API}/admin/statistics`);
}