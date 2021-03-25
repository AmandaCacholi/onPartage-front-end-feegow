import React from "react";
import { BtnAmareloPanel } from "../Button/Button";
import imgRoundLogo from "../../assets/images/round-logo.svg";
import "./HomeFuncionario.css";
import { Grow } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { CadastroPlanos } from "../CadastroPlanos/CadastroPlanos";
import { NavLink } from "react-router-dom";
import { CadastroFuncionario } from "../CadastroFuncionario/CadastroFuncionario";
import { GerenciarPlanos } from "../GerenciarPlanos/GerenciarPlanos";
import { GerenciarFuncionarios } from "../GerenciarFuncionarios/GerenciarFuncionarios";
import { GerenciarClientes } from "../GerenciarClientes/GerenciarClientes";
import { Teste } from "../Teste";

export const HomeFuncionario = () => {
  return (
    <section className="homeF">
      <Grow in={true} timeout={1000}>
        <div className="homeF__bgImg">
          <img alt="" className="homeF__img" src={imgRoundLogo} />
          <nav className="homeF__nav">
            <NavLink to="/area-funcionario/gerenciar-planos">
              <BtnAmareloPanel>Gerenciar Planos</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-funcionario/cadastro-planos">
              <BtnAmareloPanel>Cadastrar plano</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-funcionario/gerenciar-funcionarios" >
              <BtnAmareloPanel>Visualizar funcionários</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-funcionario/cadastro-funcionario">
              <BtnAmareloPanel>Cadastrar funcionário</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-funcionario/cadastro-clientes" >
              <BtnAmareloPanel>Visualizar clientes</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-funcionario/teste" >
              <BtnAmareloPanel>Configurações</BtnAmareloPanel>
            </NavLink>
          </nav>
        </div>
      </Grow>

      <Switch>
        <Route path="/area-funcionario/gerenciar-planos">
          <GerenciarPlanos />
        </Route>
        <Route path="/area-funcionario/cadastro-planos">
          <CadastroPlanos />
        </Route>
        <Route path="/area-funcionario/gerenciar-funcionarios">
          <GerenciarFuncionarios/>
        </Route>
        <Route path="/area-funcionario/cadastro-funcionario">
          <CadastroFuncionario />
        </Route>
        <Route path="/area-funcionario/cadastro-clientes" >
          <GerenciarClientes/>
        </Route>
        <Route path="/area-funcionario/teste" >
          <Teste></Teste>
        </Route>
      </Switch>
    </section>
  );
};
