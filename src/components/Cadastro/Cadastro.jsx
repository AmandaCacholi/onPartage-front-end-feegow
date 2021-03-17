import { TextField, FormControlLabel, Switch } from "@material-ui/core";
import React from "react";
import { BtnContato } from "../Button/Button";
import imgCadastro from "../../assets/images/cadastro.svg";
import "./Cadastro.css";

export const Cadastro = () => {
  return (
    <section className="cadastro">
      <div className="cadastro__imgBg">
        <img src={imgCadastro} className="cadastro__img" />
      </div>
      <div className="cadastro__formWrapper">
        <h2 className="cadastro__titulo">
          Crie sua conta <span>grátis</span>
        </h2>
        <p className="cadastro__subtitulo">
          Já possui conta? <span>Acesse</span>
        </p>
        <form className="cadastro__form">
          <TextField
            id="cadastro__nome"
            label="Nome"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="cadastro__email"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="cadastro__senha"
            label="Senha"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="cadastro__senhaDois"
            label="Digite a senha novamente"
            variant="outlined"
            margin="normal"
          />
          <div className="cadastro__termos" >
            <Switch name="termo" color="primary" required={true} />
            <p className="cadastro__termosTexto" >Concordo com os <span>Termos de Serviço</span> da onPartage</p>
          </div>
          <BtnContato>Criar conta</BtnContato>
        </form>
      </div>
    </section>
  );
};
