import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import Input from '../Input/Input';
import "../Forms/Forms.css"
function Forms() {
  return (
    <>
      <Form className='childDivInputEmail'>
      <h1 className='labelLogin'>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className='divInputEmail'>
            <Form.Label className='label'>Email:</Form.Label>
            <Input
              width="80vw"
              type="email"
              placeholder="Digite seu email"
              required
              height="2vh"
              border="none"
              backgroundColor="rgb(204, 238, 251)"
              font-size="55px"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className='divInputEmail'>
            <Form.Label className='label'>Senha:</Form.Label>
            <Input
              width="80vw"
              type="email"
              placeholder="Digite sua senha"
              required
              height="2vh"
              border="none"
              backgroundColor="rgb(204, 238, 251)"
            />
          </div>
        </Form.Group>
        <Button
          text="Login"
          width="50vw"
          height="5vh"

        />
      </Form>
    </>
  );
}

export default Forms;