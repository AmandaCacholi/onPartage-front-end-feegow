import React from "react";
import "./CostumersPage.css";
import { BtnAmareloPanel } from "../Button/Button";
import Logo from "../../assets/images/round-logo.svg";
import { Grow } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { Upload } from "../HomeCliente__Upload/Upload";
import { NavLink } from "react-router-dom";
import { InfoConta } from "../InfoConta/InfoConta";

export default function clientPage() {
  return (
    <section className="homeC">
      <Grow in={true} timeout={1000}>
        <div className="homeC__menu">
          <img alt="" src={Logo} className="homeC__img" />
          <nav className="homeC__btnMenu">
            <NavLink to="/area-cliente/upload">
              <BtnAmareloPanel>Enviar arquivos</BtnAmareloPanel>
            </NavLink>
            <NavLink to="/area-cliente/informacoes-conta" >
              <BtnAmareloPanel>Informações da conta</BtnAmareloPanel>
            </NavLink>
            <BtnAmareloPanel>Mudar plano</BtnAmareloPanel>
            <BtnAmareloPanel>Sair</BtnAmareloPanel>
          </nav>
        </div>
      </Grow>

      <Switch>
        <Route path="/area-cliente/upload">
          <Upload />
        </Route>
        <Route path="/area-cliente/informacoes-conta" >
          <InfoConta/>
        </Route>
      </Switch>
    </section>
  );
}
