import React from 'react';
import logoImg from '../../assets/logo.svg';
import {FiLogIn,FiMail,FiLock } from 'react-icons/fi';
import { Container,Content,Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" width={230} />
        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input icon={FiLock}  name="senha" placeholder="Senha" type="password" />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
   
  );
}

export default SignIn;