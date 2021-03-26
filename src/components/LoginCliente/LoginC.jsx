import { Grow } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import imgLoginC from "../../assets/images/login-cliente.svg";
import { BtnContato } from "../Button/Button";
import { Login } from "../Login/Login";
import "./LoginC.css";

export const LoginC = () => {
  return (
    <section className="loginC">
      <Grow in={true} timeout={1000}>
        <div className="loginC__imgBg">
          <img alt="" src={imgLoginC} className="loginC__img" />
        </div>
      </Grow>
      <Grow in={true} timeout={1500} >
        <div className="loginC__formWrapper">
          <h2 className="loginC__titulo">Acessar conta</h2>
          <p className="loginC__subtitulo">
            ou{" "}
            <Link to="/cadastro-cliente">
              <span>cadastre-se</span>
            </Link>
          </p>
          <div className="loginC__form">
            <Login type="email" id="loginC__id" label="Email" />
            <Link className="loginC__btn" to="/area-cliente/upload">
              <BtnContato>Entrar</BtnContato>
            </Link>
          </div>
        </div>
      </Grow>
    </section>
  );
};
