import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Switch,
} from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import { req } from "../../models/req-planos";
import "./ModalCliente.css";

export const ModalCliente = (props) => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");

  const dados = {
    name: name,
    email: email,
    password: password,
    plan: plan,
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

  const inputPlano = (e) => {
    setPlan(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const reqPlanos = async () => {
    const recebeReq = await req();
    setDadosPlanos(recebeReq);
  };

  useEffect(() => reqPlanos(), [dadosPlanos]);

  const nomePlanos = dadosPlanos.map((item, index) => (
    <MenuItem value={item.name}>
      {item.name} - R$ {item.price}/mês
    </MenuItem>
  ));

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="updateCliente__tituloWrapper">
            <h2 className="updateCliente__titulo">Atualizar Cliente</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlerSubmit} className="updateCliente__form">
            <TextField
              required
              id="updateCliente__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              required
              type="email"
              id="updateCliente__email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={inputEmail}
            />
            <TextField
              required
              type="password"
              id="updateCliente__senha"
              label="Senha"
              variant="outlined"
              margin="normal"
              onChange={inputSenha}
            />
            <TextField
              required
              type="password"
              id="updateCliente__senhaDois"
              label="Digite a senha novamente"
              variant="outlined"
              margin="normal"
            />
            <FormControl required variant="outlined" margin="normal">
              <InputLabel id="demo-simple-select-outlined-label">
                Escolha um plano
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={plan}
                onChange={inputPlano}
                label="Escolha um plano"
              >
                {nomePlanos}
              </Select>
            </FormControl>
            <div className="updateCliente__termos">
              <Switch required name="termo" color="primary" required={true} />
              <p className="updateCliente__termosTexto">
                Concordo com os <span>Termos de Serviço</span> da onPartage
              </p>
            </div>
            <BtnContato type="submit">Criar conta</BtnContato>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
