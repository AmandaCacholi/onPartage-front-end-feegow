import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { BtnContato } from "../Button/Button";
import { putPlanos } from "../../services/putPlanos";
import './ModalPlan.css'

export const ModalPlan = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [screens, setScreens] = useState("");
  const [type, setType] = useState("");

  const [cadastroSucesso, setCadastroSucesso] = useState("")

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
    
    putPlanos(props.id, dados);

    setCadastroSucesso("Atualizado com sucesso!")
  };

  return (
    <>
      <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton>
          <div className="updatePlanos__tituloWrapper" >
            <h2 className="updatePlanos__titulo" >Atualizar Plano</h2>
          </div>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={handlerSubmit} className="updatePlanos__form">
            <TextField
              required
              name="name"
              type="text"
              id="updatePlanos__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              required
              name="price"
              type="number"
              id="updatePlanos__preco"
              label="Preço"
              variant="outlined"
              margin="normal"
              onChange={inputPrice}
            />
            <TextField
              required
              name="size"
              type="text"
              id="updatePlanos__armazenamento"
              label="Armazenamento"
              variant="outlined"
              margin="normal"
              onChange={inputSize}
            />
            <TextField
              required
              name="screens"
              type="number"
              id="updatePlanos__usuarios"
              label="Quantidade de Usuários"
              variant="outlined"
              margin="normal"
              onChange={inputScreens}
            />
            <FormControl required variant="outlined">
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
            <BtnContato type="submit">Atualizar</BtnContato>
            <small className="cadastroPlanos__cadastroSucesso" >{cadastroSucesso}</small>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
