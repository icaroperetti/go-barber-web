import React, { useCallback } from "react";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import * as Yup from "yup";

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Mínimo de 6 caracteres"),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt='GoBarber' width={230} />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name='name' placeholder='E-mail' />
          <Input icon={FiMail} name='email' placeholder='E-mail' />
          <Input
            icon={FiLock}
            name='senha'
            placeholder='Senha'
            type='password'
          />
          <Button type='submit'>Cadastrar</Button>
        </Form>
        <a href='login'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
