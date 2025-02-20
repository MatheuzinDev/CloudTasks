import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsLogin/FormsLogin.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../../Services/usuariosService';
import { Snackbar, Alert } from '@mui/material';
function FormsLogin() {
  const [usuarios, setUsuarios] = useState({
    email: '',
    senha: ''
  })

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState("success");

  const navigate = useNavigate()

  const handleLoginData = async (e) => {
    e.preventDefault()

    try {
      await loginData(usuarios)
      setToastMessage("Usuário logado com sucesso!")
      setToastSeverity("success")
      setToastOpen(true)
      setTimeout(() => {
        navigate('/list');
      }, 2000);
    } catch(error) {
      setToastMessage("Erro ao logar usuário.");
      setToastSeverity("error");
      setToastOpen(true);
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

    </>
  );
}

export default FormsLogin;