import Logo from "../../assents/CloudTasksLogo.png"

function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={Logo} alt="" />
        <h1 className="labelLogo">CloudTasks</h1>
      </div>

    </>
  )
}

export default Header
