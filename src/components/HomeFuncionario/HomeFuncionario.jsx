import React from "react";
import { BtnMenuFuncionario } from "../Button/Button";
import imgRoundLogo from "../../assets/images/round-logo.svg";
import "./HomeFuncionario.css";
import { Grow } from "@material-ui/core";

export const HomeFuncionario = () => {
  return (
    <section className="homeF">
      <Grow in={true} timeout={1000}>
        <div className="homeF__bgImg">
          <img className="homeF__img" src={imgRoundLogo} />
        </div>
      </Grow>
      <Grow in={true} timeout={1500}>
        <div className="homeF__areaPrincipal">
          <h2 className="homeF__titulo">Bem-vindo!</h2>
          <div className="homeF__btns">
            <BtnMenuFuncionario>Gerenciar Planos</BtnMenuFuncionario>
            <BtnMenuFuncionario>Cadastrar novo plano</BtnMenuFuncionario>
            <BtnMenuFuncionario>Visualizar funcionários</BtnMenuFuncionario>
            <BtnMenuFuncionario>Cadastrar novo funcionário</BtnMenuFuncionario>
            <BtnMenuFuncionario>Visualizar clientes</BtnMenuFuncionario>
            <BtnMenuFuncionario>Configurações</BtnMenuFuncionario>
          </div>
        </div>
      </Grow>
    </section>
  );
};
