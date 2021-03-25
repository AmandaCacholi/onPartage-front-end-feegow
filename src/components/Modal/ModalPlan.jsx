import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BtnAzulHeader } from "../Button/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import { postPlanos } from "../../services/postPlanos";

export const ModalPlan = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [screens, setScreens] = useState("");
  const [type, setType] = useState("");

  const dados = {
    name: name,
    price: price,
    size: size,
    screens: screens,
  };

  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputPrice = (e) => {
    setPrice(e.target.value);
  };

  const inputSize = (e) => {
    setSize(e.target.value);
  };

  const inputScreens = (e) => {
    setScreens(e.target.value);
  };

  const inputType = (e) => {
    setType(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    postPlanos(dados);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Atualizar Plano
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={handlerSubmit} className="cadastroPlanos__form">
            <TextField
              name="name"
              type="text"
              id="cadastroPlano__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              name="price"
              type="number"
              id="cadastroPlano__preco"
              label="Preço"
              variant="outlined"
              margin="normal"
              onChange={inputPrice}
            />
            <TextField
              name="size"
              type="text"
              id="cadastroPlano__armazenamento"
              label="Armazenamento"
              variant="outlined"
              margin="normal"
              onChange={inputSize}
            />
            <TextField
              name="screens"
              type="number"
              id="cadastroPlano__usuarios"
              label="Quantidade de Usuários"
              variant="outlined"
              margin="normal"
              onChange={inputScreens}
            />
            <FormControl require variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={type}
                onChange={inputType}
                label="Tipo"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Anual</MenuItem>
                <MenuItem value={20}>Mensal</MenuItem>
              </Select>
            </FormControl>
            <br />
            <BtnContato type="submit">Cadastrar</BtnContato>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <BtnAzulHeader onClick={props.onHide}>Close</BtnAzulHeader>
        </Modal.Footer>
      </Modal>
    </>
  );
};
