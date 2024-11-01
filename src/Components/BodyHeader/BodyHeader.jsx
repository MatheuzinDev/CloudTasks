import Button from "../Button/Button"
import "../BodyHeader/BodyHeader.css"

function BodyHeader() {
  return (
    <>
      <div className="childBodyHeader">
        <div className="bodyHeader">
          <h2>Organize suas tarefas de forma simples e eficiente. Comece agora com o CloudTasks!</h2>
          <Button text="Vamos começar!"></Button>
        </div>
      </div>
    </>
  )
}

export default BodyHeader
