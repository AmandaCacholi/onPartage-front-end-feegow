import React from "react";
import { Link } from "react-router-dom";
import imgLoginC from "../../assets/images/login-cliente.svg";
import { Login } from "../Login/Login";
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
        <div className="loginC__form" >
          <Login type="email" id="loginC__id" label="Email" />
        </div>
      </div>
    </section>
  );
};
