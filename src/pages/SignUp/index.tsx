import React from 'react';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft,FiMail,FiUser,FiLock } from 'react-icons/fi';
import { Container,Content,Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Form} from '@unform/web';


const SignUp: React.FC = () => {
  
  const handleSubmit = (data:object):void => {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" width={230} />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="E-mail" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock}  name="senha" placeholder="Senha" type="password" />
          <Button type="submit">Cadastrar</Button>   
       </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
      
    </Container>
   
  );
}

export default SignUp;