import { Grow } from "@material-ui/core";
import React from "react";
import imgHomeUm from "../../assets/images/imagem-section-1.svg";
import imgHomeDois from "../../assets/images/imagem-section-2.svg";
import imgHomeTres from "../../assets/images/imagem-section-3.png";
import { BtnAmareloHeader } from "../Button/Button";
import { Contato } from "../Contato/Contato";
import { Planos } from "../Planos/Planos";
import { Sobre } from "../Sobre/Sobre";
import { Titulo } from "../Titulo/Titulo";
import "./Home.css";


export const Home = () => {
  return (
    <>
      <h2 className="home__titulo">Armazenamento em nuvem com segurança e privacidade</h2>
      <Grow in={true} timeout={1000}>
        <section className="homeSection">
          <div className="homeSection__textoWrapper">
            <p className="homeSection__texto">
              Cadastre-se e experimente nosso serviço grátis por um mês!
            </p>
            <BtnAmareloHeader>Cadastre-se</BtnAmareloHeader>
          </div>
          <img className="homeSection__img" src={imgHomeUm} />
        </section>
      </Grow>
      <Grow in={true} timeout={1000}>
        <section className="homeSection homeSection__reverse">
          <img className="homeSection__img" src={imgHomeDois} />
          <p className="homeSection__texto">
            Vocês no controle dos seus dados
          </p>
        </section>
      </Grow>
      <section className="homeSection">
        <p className="homeSection__texto">
          Acesse seus arquivos de qualquer lugar através do nosso aplicativo
        </p>
        <img className="homeSection__img" src={imgHomeTres} />
      </section>

      <section className="home__planos">
        <Titulo>Nossos Planos</Titulo>
        <div className="home__planosWrapper" >
        <Planos
          nomePlano="Bronze"
          infoUm="1 usuário"
          infoDois="2TB (2.000GB)"
          precoMensal="R$ 69,99/mês"
          precoAnual="R$ 65/mês"
        />
        <Planos
          nomePlano="Silver"
          infoUm="6 usuários"
          infoDois="3TB (3.000GB)"
          precoMensal="R$ 99,99/mês"
          precoAnual="R$ 95/mês"
        />
        <Planos
          nomePlano="Gold"
          infoUm="Mais de 3 usuários"
          infoDois="5TB (5.000GB)"
          precoMensal="R$ 79,99/mês"
          precoAnual="R$ 75/mês"
          porUsuario="por usuário"
        />
        </div>
      </section>

      <section className="home__sobre">
        <Titulo>Quem Somos</Titulo>
        <Sobre/>
      </section>
      
      <section className="home__contato">
        <Titulo>Contato</Titulo>
        <Contato />
      </section>

      <section className="home__final" >
        <Titulo>Junte-se a nós!</Titulo>
        <BtnAmareloHeader>Cadastre-se</BtnAmareloHeader>
      </section>
    </>
  );
};
