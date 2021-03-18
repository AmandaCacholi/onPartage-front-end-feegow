import React from "react";
import { Login } from "../Login/Login";
import imgFuncionario from "../../assets/images/login-funcionario.svg";
import "./LoginF.css";

export const LoginF = () => {
  return (
    <section className="loginF">
      <div className="loginF__bgTitulo" >
        <h2 className="loginF__titulo">Área do Funcionário</h2>
      </div>
      <div className="loginF__form">
        <Login type="text" id="loginF__id" label="ID do Funcionário" />
      </div>
      <div className="loginF__imgBg">
        <img src={imgFuncionario} className="loginF__img" />
      </div>
    </section>
  );
};
