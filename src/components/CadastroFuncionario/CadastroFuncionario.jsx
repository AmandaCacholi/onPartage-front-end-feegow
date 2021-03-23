import React, { useState } from "react";
import { Grow, TextField } from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import './CadastroFuncionario.css'
import { postFuncionarios } from "../../services/postFuncionarios";

export const CadastroFuncionario = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dados = {
    name: name,
    email: email,
    password: password
  }

  const inputName = (e) => {
    setName(e.target.value)
  }

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputSenha = (e) => {
    setPassword(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    postFuncionarios(dados)
  }

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="cadastroFuncionario">
          <h2 className="cadastroFuncionario__titulo">Cadastro de Funcionários</h2>
          <form onSubmit={handlerSubmit} className="cadastroFuncionario__form">
            <TextField
              type="text"
              id="cadastroFuncionario__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              type="email"
              id="cadastroFuncionario__email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={inputEmail}
            />
            <TextField
              type="password"
              id="cadastroFuncionario__senha"
              label="Senha"
              variant="outlined"
              margin="normal"
              onChange={inputSenha}
            />
            <br />
            <BtnContato type="submit" >Cadastrar</BtnContato>
          </form>
        </section>
      </Grow>
    </>
  );
};
