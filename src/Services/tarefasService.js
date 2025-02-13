import axios from 'axios'

const API_URL = "http://localhost:3000"

export const getData = async (token) => {
    console.log("Enviando requisição com token:", token)
    return await axios.get(`${API_URL}/usuarios/tarefas`, {
        headers: {
            Autorizar: `Token ${token}`
        }
    });
}