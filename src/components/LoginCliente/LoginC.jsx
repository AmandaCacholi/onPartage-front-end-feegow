import { TextField, Switch } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import imgLoginC from "../../assets/images/login-cliente.svg";
import { BtnContato } from "../Button/Button";
import "./LoginC.css";

export const LoginC = () => {
  return (
    <section className="loginC">
      <div className="loginC__imgBg">
        <img src={imgLoginC} className="loginC__img" />
      </div>
      <div className="loginC__formWrapper">
        <h2 className="loginC__titulo">Acessar conta</h2>
        <p className="loginC__subtitulo">
          ou <Link to="/cadastro-cliente"><span>cadastre-se</span></Link>
        </p>
        <form className="loginC__form">
          <TextField
            id="loginC__email"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="loginC__senha"
            label="Senha"
            variant="outlined"
            margin="normal"
          />
          <div className="loginC__lembrar">
            <div className="loginC__switchLabel" >
              <Switch name="lembrar" color="primary" defaultChecked />
              <p className="loginC__lembrarTexto">Lembre-se de mim</p>
            </div>
            <p className="loginC__esqueceuSenha">Esqueceu sua senha?</p>
          </div>
          <BtnContato>Entrar</BtnContato>
        </form>
      </div>
    </section>
  );
};
