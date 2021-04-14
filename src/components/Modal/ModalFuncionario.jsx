import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import { putFuncionarios } from "../../services/putFuncionarios";
import './ModalFuncionario.css'

export const ModalFuncionario = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cadastroSucesso, setCadastroSucesso] = useState("")

  const dados = {
    name: name,
    email: email,
    password: password,
  };

  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputSenha = (e) => {
    setPassword(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    putFuncionarios(props.id, dados)

    setCadastroSucesso("Atualizado com sucesso!")
  };

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        <div className="updateFuncionarios__tituloWrapper" >
            <h2 className="updateFuncionarios__titulo" >Atualizar Funcionario</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlerSubmit} className="updateFuncionarios__form">
            <TextField
              required
              type="text"
              id="updateFuncionarios__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              required
              type="email"
              id="updateFuncionarios__email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={inputEmail}
            />
            <TextField
              required
              type="password"
              id="updateFuncionarios__senha"
              label="Senha"
              variant="outlined"
              margin="normal"
              onChange={inputSenha}
            />
            <br />
            <BtnContato type="submit">Atualizar</BtnContato>
            <small className="cadastroPlanos__cadastroSucesso" >{cadastroSucesso}</small>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
