import React from "react";
import { Grow, TextField } from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import './CadastroFuncionario.css'

export const CadastroFuncionario = () => {
  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="cadastroFuncionario">
          <h2 className="cadastroFuncionario__titulo">Cadastro de Funcionários</h2>
          <form className="cadastroFuncionario__form">
            <TextField
              type="text"
              id="cadastroFuncionario__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
            />
            <TextField
              type="email"
              id="cadastroFuncionario__email"
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              type="password"
              id="cadastroFuncionario__senha"
              label="Senha"
              variant="outlined"
              margin="normal"
            />
            <br />
            <BtnContato>Cadastrar</BtnContato>
          </form>
        </section>
      </Grow>
    </>
  );
};
