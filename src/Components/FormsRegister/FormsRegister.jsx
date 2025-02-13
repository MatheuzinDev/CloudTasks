import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsRegister/FormsRegister.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createData } from '../../Services/usuariosService';

function FormsRegister() {

  const [usuarios, setUsuarios] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const navigate = useNavigate()

  const handleCreateData = async (e) => {
    e.preventDefault()

    console.log("Enviando os dados:", usuarios);
    try {
      await createData(usuarios)
      alert('Usuário cadastrado com sucesso!')
      navigate('/login')
    } catch (error) {
      alert(`Erro ao cadastrar usuário: ${error}`)
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
              type="name"
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

    </>
  );
}

export default FormsRegister;