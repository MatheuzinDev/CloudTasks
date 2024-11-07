import Header from "../Components/Header/Header"
import BodyLogin from "../Components/BodyLogin/BodyLogin"

function Login() {
  return (
    <>
      <Header></Header>
      <div style={{display: "flex", justifyContent: "center"}}>
        <BodyLogin></BodyLogin>
      </div>
      
    </>
  )
}

export default Login
