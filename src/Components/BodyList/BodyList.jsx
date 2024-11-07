import "../BodyList/BodyList.css"
import IconAdd from "../../assents/addIcon.png"
import EditIcon from "../../assents/editIcon.png"
import Checkbox from '@mui/material/Checkbox';
function BodyList() {
    return (
        <>
            <div className="bodyList">
                <div className="buttonAdd">
                    <img className="iconAdd" src={IconAdd} alt="" />
                </div>

                <div className="divTasks">
                    <div className="task">
                        <div className="infoTask">
                            <Checkbox
                                defaultChecked
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="primary" />
                            <h3>Task</h3>
                        </div>
                        <div>
                            <img className="editIcon" src={EditIcon} alt="" />
                        </div>
                    </div>

                    <div className="task">
                        <div className="infoTask">
                            <Checkbox
                                defaultChecked
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="primary" />
                            <h3>Task</h3>
                        </div>
                        <div>
                            <img className="editIcon" src={EditIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BodyList
