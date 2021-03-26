import {
  TextField,
  Switch,
  Grow,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BtnContato } from "../Button/Button";
import imgCadastro from "../../assets/images/cadastro.svg";
import { req } from "../../models/req-planos";
import "./Cadastro.css";
import { postCliente } from "../../services/postCliente";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [plan, setPlan] = useState("")

  const dados = {
    name: name,
    email: email,
    password: password,
    plan: plan
  }

  const inputName = (e) => {
    setName(e.target.value)
  }

  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputSenha = (e) => {
    setPassword(e.target.value)
  }

  const inputPlano = (e) => {
    setPlan(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    postCliente(dados)
    
  }

  const reqPlanos = async () => {
    const recebeReq = await req()
    setDadosPlanos(recebeReq)
  }

  useEffect(() => reqPlanos(), [dadosPlanos]);

  const nomePlanos = dadosPlanos.map((item, index) => (
    <MenuItem value={item.name}>{item.name} - R$ {item.price}/mês</MenuItem>
  ));

  return (
    <section className="cadastro">
      <Grow in={true} timeout={1000}>
        <div className="cadastro__imgBg">
          <img alt="" src={imgCadastro} className="cadastro__img" />
        </div>
      </Grow>
      <Grow in={true} timeout={1500}>
        <div className="cadastro__formWrapper">
          <h2 className="cadastro__titulo">
            Crie sua conta <span>grátis</span>
          </h2>
          <p className="cadastro__subtitulo">
            Já possui conta? 
            <Link to="/login-cliente">
              <span> Acesse</span>
            </Link>
          </p>
          <form onSubmit={handlerSubmit} className="cadastro__form">
            <TextField
              required
              id="cadastro__nome"
              label="Nome"
              variant="outlined"
              margin="normal"
              onChange={inputName}
            />
            <TextField
              required
              type="email"
              id="cadastro__email"
              label="Email"
              variant="outlined"
              margin="normal"
              onChange={inputEmail}
            />
            <TextField
              required
              type="password"
              id="cadastro__senha"
              label="Senha"
              variant="outlined"
              margin="normal"
              onChange={inputSenha}
            />
            <TextField
              required
              type="password"
              id="cadastro__senhaDois"
              label="Digite a senha novamente"
              variant="outlined"
              margin="normal"
            />
            <FormControl required variant="outlined" margin="normal">
              <InputLabel id="demo-simple-select-outlined-label">Escolha um plano</InputLabel>
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
            <div className="cadastro__termos">
              <Switch required name="termo" color="primary" required={true} />
              <p className="cadastro__termosTexto">
                Concordo com os <span>Termos de Serviço</span> da onPartage
              </p>
            </div>
              <BtnContato type="submit" >Criar conta</BtnContato>
          </form>
        </div>
      </Grow>
    </section>
  );
};
