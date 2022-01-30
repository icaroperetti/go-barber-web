import React, { useCallback, useRef, useContext } from "react";
import logoImg from "../../assets/logo.svg";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../context/AuthContext";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });
        await schema.validate(data, { abortEarly: false });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err: any) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt='GoBarber' width={230} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name='email' placeholder='E-mail' />
          <Input
            icon={FiLock}
            name='password'
            placeholder='Senha'
            type='password'
          />
          <Button type='submit'>Entrar</Button>
          <a href='forgot'>Esqueci minha senha</a>
        </Form>
        <a href='login'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
