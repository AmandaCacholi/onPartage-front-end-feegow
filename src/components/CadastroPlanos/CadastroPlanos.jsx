import {
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import "./CadastroPlanos.css";
import React, { useState } from "react";
import { BtnContato } from "../Button/Button";
import { postPlanos } from "../../services/postPlanos";

export const CadastroPlanos = () => {
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
    postPlanos(dados);
    
    setCadastroSucesso("Plano cadastrado com sucesso!")
  };

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="cadastroPlanos">
          <h2 className="cadastroPlanos__titulo">Cadastro de Planos</h2>
          <form onSubmit={handlerSubmit} className="cadastroPlanos__form">
            <TextField
              required
              name="name"
              type="text"
              id="cadastroPlano__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              required
              name="price"
              type="number"
              id="cadastroPlano__preco"
              label="Preço"
              variant="outlined"
              margin="normal"
              onChange={inputPrice}
            />
            <TextField
              required
              name="size"
              type="text"
              id="cadastroPlano__armazenamento"
              label="Armazenamento"
              variant="outlined"
              margin="normal"
              onChange={inputSize}
            />
            <TextField
              required
              name="screens"
              type="number"
              id="cadastroPlano__usuarios"
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
              
                <MenuItem value={10}>Anual</MenuItem>
                <MenuItem value={20}>Mensal</MenuItem>
              </Select>
            </FormControl>
            <br />
            <BtnContato type="submit">Cadastrar</BtnContato>
            <small className="cadastroPlanos__cadastroSucesso" >{cadastroSucesso}</small>
          </form>
        </section>
      </Grow>
    </>
  );
};
