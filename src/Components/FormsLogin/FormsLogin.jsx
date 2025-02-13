import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsLogin/FormsLogin.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../../Services/usuariosService';
function FormsLogin() {
  const [usuarios, setUsuarios] = useState({
    email: '',
    senha: ''
  })

  const navigate = useNavigate()

  const handleLoginData = async (e) => {
    e.preventDefault()

    try {
      await loginData(usuarios)
      alert("Logado com sucesso")
      navigate("/list")
    } catch(error) {
      alert(`Ocorre um erro ${error}`)
    }
  }

  return (
    <>
      <Form className='childDivInputEmail'>
        <h1 className='labelLogin'>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='divInputEmail'>
            <Form.Label className='label'>Email:</Form.Label>
            <Input
              width="34vw"
              type="email"
              placeholder="Digite seu email"
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              font-size="55px"
              value={usuarios.email}
              onChange={(event) => setUsuarios({...usuarios, email:event.target.value})}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className='divInputEmail'>
            <Form.Label className='label'>Senha:</Form.Label>
            <Input
              width="34vw"
              type="password"
              placeholder="Digite sua senha"
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              value={usuarios.senha}
              onChange={(event) => setUsuarios({...usuarios, senha:event.target.value})}
            />
          </div>
        </Form.Group>
        <div className='divButtons'>
          <Button
            text="Login"
            width="14vw"
            height="6vh"
            fontSize="18px"
            onClick={handleLoginData}
          />

          <p>Não tem uma conta?</p>

          <Link style={{textDecoration: "none"}} to="/register"><Button
            text="Criar conta"
            width="14vw"
            height="6vh"
            fontSize="18px"
          /></Link>
        </div>
      </Form>

    </>
  );
}

export default FormsLogin;