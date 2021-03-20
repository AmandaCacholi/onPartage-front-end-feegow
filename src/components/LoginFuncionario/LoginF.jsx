import React from "react";
import { Login } from "../Login/Login";
import imgFuncionario from "../../assets/images/login-funcionario.svg";
import "./LoginF.css";
import { BtnContato } from "../Button/Button";
import { Link } from "react-router-dom";
import { Grow } from "@material-ui/core";

export const LoginF = () => {
  return (
    <section className="loginF">
      <Grow in={true} timeout={1000}>
        <div className="loginF__bgTitulo">
          <h2 className="loginF__titulo">Área do Funcionário</h2>
        </div>
      </Grow>
      <Grow in={true} timeout={1500}>
        <div className="loginF__form">
          <Login type="text" id="loginF__id" label="ID do Funcionário" />
          <Link className="loginF__btn" to="area-funcionario">
            <BtnContato>Entrar</BtnContato>
          </Link>
        </div>
      </Grow>
      <Grow in={true} timeout={1000}>
        <div className="loginF__imgBg">
          <img src={imgFuncionario} className="loginF__img" />
        </div>
      </Grow>
    </section>
  );
};
