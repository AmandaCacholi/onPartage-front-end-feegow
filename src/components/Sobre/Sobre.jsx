import React from "react";
import "./Sobre.css";
import imgAmanda from "../../assets/images/amanda-cacholi.jpg";
import imgDaniel from "../../assets/images/daniel.jpeg"
import { Time } from "../Time/Time";

export const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre__textoWrapper">
        <p className="sobre__texto">
          O onPartage é um site de armazenamento de arquivos desenvolvido por Amanda Cacholi no Front End, e por Daniel Basilio no Back End.<br/><br/>
          O site foi feito desenvolvido em React.Js, com componentes do Material UI e React-Bootstrap para uma melhor responsividade. <br/><br/>
          O Back End foi desenvolvido em Express (Node.Js) e para o banco de dados foi utilizado o MongoDB.
        </p>
      </div>
      <div className="sobre__time">
        <Time
          img={imgAmanda}
          nome="Amanda Cacholi"
          titulo="Front End Developer"
        />
        <Time
          img={imgDaniel}
          nome="Daniel Basilio"
          titulo="Back End Developer"
        />
      </div>
    </section>
  );
};
