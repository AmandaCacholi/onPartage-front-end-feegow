import { Grow, TextField } from "@material-ui/core";
import './CadastroPlanos.css'
import React, { useState } from "react";
import { BtnContato } from "../Button/Button";
import { postPlanos } from "../../services/postPlanos";

export const CadastroPlanos = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [screens, setScreens] = useState("")
  
  const dados = {
    name: name,
    price: price,
    size: size,
    screens: screens
  }


  const inputName = (e) => {
    setName(e.target.value)
  }

  const inputPrice = (e) => {
    setPrice(e.target.value)
  }

  const inputSize = (e) => {
    setSize(e.target.value)
  }

  const inputScreens = (e) => {
    setScreens(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    postPlanos(dados)
    
  }

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="cadastroPlanos" >
          <h2 className="cadastroPlanos__titulo" >Cadastro de Planos</h2>
          <form onSubmit={handlerSubmit} className="cadastroPlanos__form" >
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
            <br/>
            <BtnContato type="submit" >Cadastrar</BtnContato>
          </form>
        </section>
      </Grow>
    </>
  );
};
