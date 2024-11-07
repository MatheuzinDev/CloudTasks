import Header from "../Components/Header/Header"
import BodyRegister from "../Components/BodyRegister/BodyRegister"

function Login() {
  return (
    <>
      <Header></Header>
      <div style={{display: "flex", justifyContent: "center"}}>
        <BodyRegister></BodyRegister>
      </div>
      
    </>
  )
}

export default Login
