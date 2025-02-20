import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsRegister/FormsRegister.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createData } from '../../Services/usuariosService';
import { Snackbar, Alert } from '@mui/material';

function FormsRegister() {

  const [usuarios, setUsuarios] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState("success");

  const navigate = useNavigate()

  const handleCreateData = async (e) => {
    e.preventDefault()

    try {
      await createData(usuarios)
      setToastMessage("Usuário cadastrado com sucesso!")
      setToastSeverity("success")
      setToastOpen(true)
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setToastMessage("Erro ao cadastrar usuário.");
      setToastSeverity("error");
      setToastOpen(true);
    }
  }
  
  return (
    <>
      <Form className='childDivInputEmail1'>
        <h1 className='labelLogin1'>Registrar</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='divInputEmail1'>
            <Form.Label className='label1'>Nome de usuário:</Form.Label>
            <Input
              width="34vw"
              type="text"
              placeholder="Digite seu nome"
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              font-size="55px"
              value={usuarios.nome}
              onChange={(event) => setUsuarios({...usuarios, nome:event.target.value})}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='divInputEmail1'>
            <Form.Label className='label1'>Email:</Form.Label>
            <Input
              width="34vw"
              type="email"
              placeholder="Digite seu email"
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
          <div className='divInputEmail1'>
            <Form.Label className='label1'>Senha:</Form.Label>
            <Input
              width="34vw"
              type="password"
              placeholder="Digite sua senha"
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              value={usuarios.senha}
              onChange={(event) => setUsuarios({...usuarios, senha:event.target.value})}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className='divInputEmail1'>
            <Form.Label className='label1'>Confirmar senha:</Form.Label>
            <Input
              width="34vw"
              type="password"
              placeholder="Digite sua senha novamente"
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
            />
          </div>
        </Form.Group>
        <div className='divButtons1'>
          <Button
            text="Registrar"
            width="14vw"
            height="6vh"
            fontSize="18px"
            onClick={handleCreateData}
          />

          <p>Já tem uma conta?</p>

          <Link style={{ textDecoration: "none" }} to="/login"><Button
            text="Faça login"
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

export default FormsRegister;