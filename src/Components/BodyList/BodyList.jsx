import "../BodyList/BodyList.css"
import IconAdd from "../../assents/addIcon.png"
import EditIcon from "../../assents/editIcon.png"
import IconClose from "../../assents/close.png"
import IconDelete from "../../assents/close (1).png"
import Checkbox from '@mui/material/Checkbox';
import Modal from "@mui/material/Modal";
import Button from "../Button/Button"
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import { getData, updateData, createData, deleteData } from "../../Services/tarefasService"
function BodyList() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50vw",
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        borderRadius: "10px",
        p: 4,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "2vh",
    };

    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState({
        descricao: '',
    })
    const [tarefaEditada, setTarefaEditada] = useState({
        descricao: ''
    })

    const handleCreateData = async (e) => {
        e.preventDefault()
        
        if (!novaTarefa.descricao.trim()) {
            alert("A tarefa não pode estar vazia!")
            return
        }

        console.log(novaTarefa)
    
        try {
            await createData(novaTarefa);
            alert('Tarefa cadastrada com sucesso!')
            setNovaTarefa({ descricao: "" })
            handleClose()
            fetchData()
        } catch (error) {
            alert(`Erro ao criar tarefa: ${error.response?.data?.message || error.message}`)
        }
    }

    const handleUpdateData = async (e) => {
        e.preventDefault()
        console.log(tarefaEditada.id)
        
        if (!tarefaEditada.descricao.trim()) {
            alert("A tarefa não pode estar vazia!")
            return
        }

        try {
            await updateData(tarefaEditada)
            alert('Tarefa atualizada com sucesso')
            setTarefaEditada({ id: '', descricao: '' })
            handleCloseEdit()
            fetchData()
        } catch(error){
            alert(`Erro ao atualizar tarefa: ${error.response?.data?.message || error.message}`)
        }
    }   
    
    const handleDeleteData = async (id) => {
        const confirmarDelete = window.confirm("Tem certeza que deseja excluir esta tarefa?")
        if(!confirmarDelete) return

        try {
            await deleteData(id)
            alert('Tarefa deletada com sucesso')
            fetchData()
        } catch(error) {
            alert(`Erro ao deletar tarefa: ${error.response?.data?.message || error.message}`)
        }
    }

    const fetchData = async () => {
        const token = localStorage.getItem("token")
        const resultado = await getData(token)
        console.log("Tarefas do usuário: ", resultado.data)
        setTarefas(resultado.data)
    }

    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const handleOpenEdit = (tarefa) => {
        setTarefaEditada(tarefa)
        setOpenModalEdit(true);
    }

    const handleCloseEdit = () => {
        setOpenModalEdit(false);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className="bodyList">
                <div onClick={handleOpen} className="buttonAdd">
                    <img className="iconAdd" src={IconAdd} alt="" />
                </div>

                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="divTaskModal">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Tarefa
                            </Typography>

                            <img onClick={handleClose} className="iconClose" src={IconClose} alt="" />


                        </div>
                        <div className="divBottomModal">
                            <Input
                                width="48vw"
                                type="email"
                                placeholder="Digite sua tarefa:"
                                required
                                height="4vh"
                                border="none"
                                backgroundColor="#AEE3F8"
                                font-size="55px"
                                onChange={(event) => setNovaTarefa({ ...novaTarefa, descricao: event.target.value })}
                            />

                            <Button
                                text="Criar tarefa"
                                width="10vw"
                                fontSize="18px"
                                height="6vh"
                                marginLeft="39.6vw"
                                onClick={handleCreateData}
                            />
                        </div>

                    </Box>
                </Modal>

                <Modal
                    open={openModalEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="divTaskModal">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Editar Tarefa
                            </Typography>

                            <img onClick={handleCloseEdit} className="iconClose" src={IconClose} alt="" />


                        </div>
                        <div className="divBottomModal">
                            <Input
                                width="48vw"
                                type="email"
                                placeholder="Edite sua tarefa:"
                                required
                                height="4vh"
                                border="none"
                                backgroundColor="#AEE3F8"
                                font-size="55px"
                                value={tarefaEditada.descricao}
                                onChange={(event) => setTarefaEditada({ ...tarefaEditada, descricao: event.target.value })}
                            />

                            <Button
                                text="Atualizar tarefa"
                                width="10vw"
                                fontSize="18px"
                                height="6vh"
                                marginLeft="39.6vw"
                                onClick={handleUpdateData}
                            />
                        </div>

                    </Box>
                </Modal>

                <div className="divTasks">
                    {tarefas.map((tarefa) => (
                        <div key={tarefa.id} className="task">
                            <div className="infoTask">
                                <Checkbox
                                    defaultChecked
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                                    color="primary"
                                />
                                <h3>{tarefa.descricao}</h3>
                            </div>
                            <div className="divIcons">
                                <img onClick={() => handleOpenEdit(tarefa)} className="editIcon" src={EditIcon} alt="Editar" />
                                <img onClick={() => handleDeleteData(tarefa.id)} className="iconDelete" src={IconDelete} alt="Deletar" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default BodyList
