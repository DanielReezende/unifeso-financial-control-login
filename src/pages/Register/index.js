import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form } from '@unform/web';
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api';
import Input from '../../components/Input';

import './styles.css';

import logo from "../../assets/logo.png";
import imagem from "../../assets/02.svg";

function Register() {
  const formRef = useRef()
  const { goBack } = useHistory()

  const handleSubmit = useCallback(async (data) => {
    await api.post('/users', data)

    alert('Usuário criado com sucesso.')

    goBack()
  }, [goBack])

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={imagem} alt="finance" className="finance"/>
        </section>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <img src={logo} alt="finance" className="logo"/>
          <h1>Faça seu cadastro</h1>
          <Input type="text" placeholder="Usuário"  name="username" required/>
          <Input type="password" placeholder="Senha" name="password" required/>

          <button type="submit" className="button">Cadastrar</button>
          <Link to="/" className="link">
            <FiArrowLeft size={16} color="#216d61"/>
            Voltar para o login!
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;