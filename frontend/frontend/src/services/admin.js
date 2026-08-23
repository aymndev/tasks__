// src/services/admin.js
import axios from "axios";

const API = "http://localhost:3000";

export function addUser(data) {
    return axios.post(`${API}/admin/users`, data);
}
export function getAllUsers() {
    return axios.get(`${API}/admin/users`);
}
export function deleteUser(id) {
    return axios.delete(`http://localhost:3000/admin/users/${id}`);
}

