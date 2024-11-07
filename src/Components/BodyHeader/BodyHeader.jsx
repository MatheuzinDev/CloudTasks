import Button from "../Button/Button"
import "../BodyHeader/BodyHeader.css"
import { Link } from "react-router-dom"

function BodyHeader() {
  return (
    <>
      <div className="childBodyHeader">
        <div className="bodyHeader">
          <h2>Organize suas tarefas de forma simples e eficiente. Comece agora com o CloudTasks!</h2>
          <Link to="/login"><Button text="Vamos começar!"></Button></Link>
        </div>
      </div>
    </>
  )
}

export default BodyHeader
