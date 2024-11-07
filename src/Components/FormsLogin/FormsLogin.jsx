import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../FormsLogin/FormsLogin.css"
import { Link } from 'react-router-dom';
function FormsLogin() {
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
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className='divInputEmail'>
            <Form.Label className='label'>Senha:</Form.Label>
            <Input
              width="34vw"
              type="email"
              placeholder="Digite sua senha"
              required
              height="4vh"
              border="none"
              backgroundColor="#AEE3F8"
            />
          </div>
        </Form.Group>
        <div className='divButtons'>
          <Button
            text="Login"
            width="15vw"
            height="6vh"
          />

          <p>Não tem uma conta?</p>

          <Link to="/register"><Button
            text="Criar conta"
            width="15vw"
            height="6vh"
          /></Link>
        </div>
      </Form>

    </>
  );
}

export default FormsLogin;