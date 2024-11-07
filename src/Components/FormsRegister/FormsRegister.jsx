import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsRegister/FormsRegister.css"
import { Link } from 'react-router-dom';

function FormsRegister() {
  return (
    <>
      <Form className='childDivInputEmail1'>
        <h1 className='labelLogin1'>Registrar</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='divInputEmail1'>
            <Form.Label className='label1'>Nome de usuário:</Form.Label>
            <Input
              width="34vw"
              type="email"
              placeholder="Digite seu nome"
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              font-size="55px"
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
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
              font-size="55px"
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
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
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
            width="15vw"
            height="6vh"
          />

          <p>Já tem uma conta?</p>

          <Link to="/login"><Button
            text="Faça login"
            width="15vw"
            height="6vh"
          /></Link>
        </div>
      </Form>

    </>
  );
}

export default FormsRegister;