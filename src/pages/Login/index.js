import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import Input from '../../components/Input';

import finance from "../../assets/01.svg";
import logo from "../../assets/logo.png";

function Login() {
  const formRef = useRef();

  return (
    <div className="login-container">
      <div className="content">
        <section className="form">
          <img src={logo} alt="Unifeso Finance" className="logo"/>
          <Form ref={formRef}>
            <h1>Faça seu login</h1>
            <Input type="text" placeholder="Seu usuário" name="username"/>
            <Input type="password" placeholder="Sua senha" name="password"/>

            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="link" to="/register">
              <FiLogIn size={16} color="#216d61" />
              Não tenho cadastro!
            </Link>
          </Form>
        </section>
        <img src={finance} alt="Finance" className="finance"/>
      </div>
    </div>
  );
}

export default Login;