import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarPlanos.css";

export const GerenciarPlanos = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const req = async () => {
    const response = await fetch("http://localhost:8080/plans");
    const dados = await response.json();
    setDadosPlanos(dados);
  };

  useEffect(() => req(), []);

  const planos = dadosPlanos.map((item, index) => (
    <CardReq
      key={index}
      tituloNome="Nome: "
      nome={item.name}
      tituloPreco="Preço mensal: R$"
      preco={item.price}
      tituloCapacidade="Capacidade: "
      capacidade={item.size}
      tituloUsuario="Usuários: "
      usuarios={item.screens}
      tituloid="ID: "
      id={item._id}
    />
  ));

  return (
    <section>
      <div className="gerenciarPlanos__cardPlanos">{planos}</div>
    </section>
  );
};
