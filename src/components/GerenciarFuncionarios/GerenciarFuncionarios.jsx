import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarFuncionarios.css";
import { deleteFuncionarios } from "../../services/deleteFuncionarios";
import { Grow } from "@material-ui/core";

export const GerenciarFuncionarios = () => {
  const [dadosFuncionarios, setDadosFuncionarios] = useState([]);

  const req = async () => {
    const response = await fetch(
      "https://onpartage-backend.herokuapp.com/employees"
    );
    const dados = await response.json();
    setDadosFuncionarios(dados);
  };

  useEffect(() => req(), [dadosFuncionarios]);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id;
    deleteFuncionarios(idParam);
  };

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
      onDoubleClickDelete={handlerDoubleClickDelete}
    />
  ));

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section>
          <h2 className="gerenciarFuncionarios__titulo">
            Funcionários cadastrados
          </h2>
          <div className="gerenciarFuncionarios">{funcionarios}</div>
        </section>
      </Grow>
    </>
  );
};
