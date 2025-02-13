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
import { getData } from "../../Services/tarefasService"
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

    const handleOpenEdit = () => {
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

                            />

                            <Button
                                text="Criar tarefa"
                                width="10vw"
                                fontSize="18px"
                                height="6vh"
                                marginLeft="39.6vw"

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
                                <img onClick={handleOpenEdit} className="editIcon" src={EditIcon} alt="Editar" />
                                <img className="iconDelete" src={IconDelete} alt="Deletar" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default BodyList
