import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { BtnContato } from "../Button/Button";
import "./Contato.css";

export const Contato = () => {

  const [msgEnviada, setMsgEnviada] = useState("")

  const handlerOnClick = () => {
    setMsgEnviada("Mensagem enviada!")
  }

  return (
    <form className="contato__form">
      <TextField
        required
        id="contato__nome"
        label="Nome"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        id="contato__email"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        id="contato__assunto"
        label="Assunto"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        id="contato__mensagem"
        label="Mensagem"
        variant="outlined"
        margin="normal"
        multiline={true}
      />
      <BtnContato onClick={handlerOnClick} >Enviar</BtnContato>
      <small className="contato__msgEnviada" >{msgEnviada}</small>
    </form>
  );
};
