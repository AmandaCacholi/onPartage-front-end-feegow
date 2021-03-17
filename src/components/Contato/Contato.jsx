import { TextField } from "@material-ui/core";
import React from "react";
import { BtnContato } from "../Button/Button";
import "./Contato.css";

export const Contato = () => {
  return (
    <form className="contato__form">
      <TextField
        id="contato__nome"
        label="Nome"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="contato__email"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="contato__assunto"
        label="Assunto"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="contato__mensagem"
        label="Mensagem"
        variant="outlined"
        margin="normal"
        multiline={true}
      />
      <BtnContato>Enviar</BtnContato>
    </form>
  );
};
