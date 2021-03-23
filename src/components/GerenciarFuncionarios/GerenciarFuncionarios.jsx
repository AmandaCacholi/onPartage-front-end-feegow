import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarFuncionarios.css";

export const GerenciarFuncionarios = () => {
  const [dadosFuncionarios, setDadosFuncionarios] = useState([]);

  const req = async () => {
    const response = await fetch("http://localhost:8080/employees");
    const dados = await response.json();
    setDadosFuncionarios(dados);
  };

  useEffect(() => req(), []);

  const funcionarios = dadosFuncionarios.map((item, index) => (
    <CardReq
      key={index}
      tituloNome="Nome: "
      nome={item.name}
      tituloEmail="Email: "
      email={item.email}
      tituloid="ID: "
      id={item._id}
      tituloDesde="Começou em: "
      desde={item.started}
    />
  ));

  return (
      <section>
        <div className="gerenciarFuncionarios">{funcionarios}</div>
      </section>
  )
};
