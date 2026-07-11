// src/services/admin.js
import axios from "axios";

const API = "http://localhost:3000";

export function addUser(data) {
    return axios.post(`${API}/admin/users`, data);
}