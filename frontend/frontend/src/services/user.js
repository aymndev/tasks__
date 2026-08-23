import axios from 'axios';

const API="http://localhost:3000";

export function createUser(){
    return axios.post(
        `${API},/user`
    )

}