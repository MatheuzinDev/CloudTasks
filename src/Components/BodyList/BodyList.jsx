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
import { Snackbar, Alert } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
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
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastSeverity, setToastSeverity] = useState("success");

    const handleCreateData = async (e) => {
        e.preventDefault()

        if (!novaTarefa.descricao.trim()) {
            setToastMessage("A tarefa não pode estar vazia!");
            setToastSeverity("error");
            setToastOpen(true);
            return
        }

        try {
            await createData(novaTarefa);
            setToastMessage("Tarefa criada com sucesso!")
            setToastSeverity("success")
            setToastOpen(true)
            setNovaTarefa({ descricao: "" })
            handleClose()

            fetchData()
        } catch (error) {
            setToastMessage("Erro ao cadastrar tarefa!");
            setToastSeverity("error");
            setToastOpen(true);
        }
    }

    const handleUpdateData = async (e) => {
        e.preventDefault()

        if (!tarefaEditada.descricao.trim()) {
            setToastMessage("A tarefa não pode estar vazia!");
            setToastSeverity("error");
            setToastOpen(true);
            return
        }

        try {
            await updateData(tarefaEditada)
            setToastMessage("Tarefa atualizada com sucesso!")
            setToastSeverity("success")
            setToastOpen(true)
            setTarefaEditada({ id: '', descricao: '' })
            handleCloseEdit()
            fetchData()
        } catch (error) {
            setToastMessage("Erro ao atualizar tarefa!")
            setToastSeverity("error")
            setToastOpen(true)
        }
    }

    const handleDeleteData = async () => {
        if (!selectedId) return

        try {
            await deleteData(selectedId)
            setToastMessage("Tarefa deletada com sucesso!")
            setToastSeverity("success")
            setToastOpen(true)
            fetchData()
        } catch (error) {
            setToastMessage("Erro ao deletar tarefa!")
            setToastSeverity("error")
            setToastOpen(true)
        }

        handleDialogClose()
    }

    const handleToggleStatus = async (tarefa) => {
        const novoStatus = tarefa.status === "pendente" ? "concluida" : "pendente"
        try {
            await updateData({ ...tarefa, status: novoStatus })
            fetchData()
        } catch (error) {
            alert(`Erro ao atualizar status: ${error.response?.data?.message || error.message}`);
        }
    }

    const handleDialogOpen = (id) => {
        setSelectedId(id);
        setOpenDeleteDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDeleteDialog(false);
        setSelectedId(null);
    };

    const fetchData = async () => {
        const token = localStorage.getItem("token")
        const resultado = await getData(token)
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
                                    checked={tarefa.status === "concluida"}
                                    onChange={() => handleToggleStatus(tarefa)}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                                    color="primary"
                                />
                                <h3>{tarefa.descricao}</h3>
                            </div>
                            <div className="divIcons">
                                <img onClick={() => handleOpenEdit(tarefa)} className="editIcon" src={EditIcon} alt="Editar" />
                                <img onClick={() => handleDialogOpen(tarefa.id)} className="iconDelete" src={IconDelete} alt="Deletar" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setToastOpen(false)} severity={toastSeverity} sx={{ width: '100%' }}>
                    {toastMessage}
                </Alert>
            </Snackbar>

            <Dialog open={openDeleteDialog} onClose={handleDialogClose}>
                <DialogTitle>Confirmar exclusão</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Tem certeza que deseja excluir esta tarefa? Essa ação não pode ser desfeita.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        text="Cancelar"
                        onClick={handleDialogClose}
                        width="10vw"
                        height="6vh"
                        fontSize="18px"
                        backgroundColor="#ccc"
                        color="#000"
                        borderRadius="5px">
                    </Button>
                    <Button
                        text="Excluir"
                        onClick={handleDeleteData}
                        width="10vw"
                        height="6vh"
                        fontSize="18px"
                        backgroundColor="#d32f2f"
                        color="#fff"
                        borderRadius="5px">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default BodyList
