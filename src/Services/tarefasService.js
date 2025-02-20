import axios from 'axios'

const API_URL = "https://cloudtasks-backend.onrender.com"
//const API_URL = "http://localhost:10000"

export const getData = async (token) => {
    return await axios.get(`${API_URL}/usuarios/tarefas`, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const createData = async (tarefa) => {
    const token = localStorage.getItem("token")
    return await axios.post(`${API_URL}/tarefas`, tarefa, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const updateData = async (tarefa) => {
    const token = localStorage.getItem("token")
    return await axios.put(`${API_URL}/tarefas/${tarefa.id}`, tarefa, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}

export const deleteData = async (id) => {
    const token = localStorage.getItem("token")
    return await axios.delete(`${API_URL}/tarefas/${id}`, {
        headers: {
            Autorizar: `Token ${token}`
        }
    })
}