import React from "react";
import { BtnAmareloPanel } from "../Button/Button";
import imgRoundLogo from "../../assets/images/round-logo.svg";
import "./HomeFuncionario.css";
import { Grow } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { CadastroPlanos } from "../CadastroPlanos/CadastroPlanos";
import { NavLink } from "react-router-dom";
import { CadastroFuncionario } from "../CadastroFuncionario/CadastroFuncionario";

export const HomeFuncionario = () => {
  return (
    <section className="homeF">
      <Grow in={true} timeout={1000}>
        <div className="homeF__bgImg">
          <img className="homeF__img" src={imgRoundLogo} />
          <nav className="homeF__nav" >
            <BtnAmareloPanel>Gerenciar Planos</BtnAmareloPanel>
            <NavLink to="/area-funcionario/cadastro-planos">
              <BtnAmareloPanel>Cadastrar plano</BtnAmareloPanel>
            </NavLink>
            <BtnAmareloPanel>Visualizar funcionários</BtnAmareloPanel>
            <NavLink to="/area-funcionario/cadastro-funcionario" >
              <BtnAmareloPanel>Cadastrar funcionário</BtnAmareloPanel>
            </NavLink>
            <BtnAmareloPanel>Visualizar clientes</BtnAmareloPanel>
            <BtnAmareloPanel>Configurações</BtnAmareloPanel>
          </nav>
        </div>
      </Grow>

      <Switch>
        <Route path="/area-funcionario/cadastro-planos">
          <CadastroPlanos />
        </Route>
        <Route path="/area-funcionario/cadastro-funcionario" >
          <CadastroFuncionario/>
        </Route>
      </Switch>
    </section>
  );
};
