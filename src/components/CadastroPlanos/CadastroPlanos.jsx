import { Grow, TextField } from "@material-ui/core";
import './CadastroPlanos.css'
import React from "react";
import { BtnContato } from "../Button/Button";

export const CadastroPlanos = () => {
  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="cadastroPlanos" >
          <h2 className="cadastroPlanos__titulo" >Cadastro de Planos</h2>
          <form className="cadastroPlanos__form" >
            <TextField
              type="text"
              id="cadastroPlano__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
            />
            <TextField
                type="number"
                id="cadastroPlano__precoMensal" 
                label="Preço Mensal"
                variant="outlined"
                margin="normal"
            />
            <TextField
                type="number"
                id="cadastroPlano__precoAnual" 
                label="Preço Anual"
                variant="outlined"
                margin="normal"
            />
            <TextField 
                type="text"
                id="cadastroPlano__armazenamento"
                label="Armazenamento"
                variant="outlined"
                margin="normal"
            />
            <TextField 
                type="number"
                id="cadastroPlano__usuarios" 
                label="Quantidade de Usuários"
                variant="outlined"
                margin="normal"
            />
            <br/>
            <BtnContato>Cadastrar</BtnContato>
          </form>
        </section>
      </Grow>
    </>
  );
};
