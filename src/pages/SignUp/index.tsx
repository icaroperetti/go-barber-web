import React, { useCallback, useRef } from "react";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Mínimo de 6 caracteres"),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (err: any) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt='GoBarber' width={230} />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name='name' placeholder='Nome' />
          <Input icon={FiMail} name='email' placeholder='E-mail' />
          <Input
            icon={FiLock}
            name='password'
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
