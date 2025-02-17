import axios from 'axios'

const API_URL = "http://localhost:3000"

export const getData = async (token) => {
    console.log("Enviando requisição com token:", token)
    return await axios.get(`${API_URL}/usuarios/tarefas`, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const createData = async (tarefa) => {
    const token = localStorage.getItem("token")
    console.log("Enviando requisição com token:", token)
    return await axios.post(`${API_URL}/tarefas`, tarefa, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const updateData = async (tarefa) => {
    const token = localStorage.getItem("token")
    console.log("Enviando requisição com token:", token)
    return await axios.put(`${API_URL}/tarefas/${tarefa.id}`, tarefa, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const deleteData = async (id) => {
    const token = localStorage.getItem("token")
    console.log("Enviando requisição com token:", token)
    return await axios.delete(`${API_URL}/tarefas/${id}`, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}