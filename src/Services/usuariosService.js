import axios from 'axios'

const API_URL = "http://localhost:3000"

export const createData = async (usuario) => {
    return await axios.post(`${API_URL}/usuarios/register`, usuario)
}

export const loginData = async (usuario) => {
    const response = await axios.post(`${API_URL}/usuarios/login`, usuario)
    const token = response.data.token
    localStorage.setItem("token", token)

    return response
}