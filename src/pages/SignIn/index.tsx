import React from 'react';
import logoImg from '../../assets/logo.svg';
import {FiLogIn } from 'react-icons/fi';
import { Container,Content,Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" width={230} />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="E-mail" />

          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>
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