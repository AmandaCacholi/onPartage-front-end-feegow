import React, { useEffect, useState } from "react";
import { deleteClientes } from "../../services/deleteClientes";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarClientes.css";
import { Grow } from "@material-ui/core";


export const GerenciarClientes = () => {
  const [dadosClientes, setDadosClientes] = useState([]);

  const req = async () => {
    const response = await fetch(
      "https://onpartage-backend.herokuapp.com/costumers"
    );
    const dados = await response.json();
    setDadosClientes(dados);
  };

  useEffect(() => req(), [dadosClientes]);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id;
    deleteClientes(idParam);
  };

  const clientes = dadosClientes.map((item, index) => (
    <CardReq
      key={index}
      tituloNome="Nome: "
      nome={item.name}
      tituloEmail="Email: "
      email={item.email}
      tituloPlano="Plano: "
      plano={item.plan}
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
        <h2 className="gerenciarClientes__titulo" >Clientes cadastrados</h2>
        <div className="gerenciarClientes">{clientes}</div>
    </section>
    </Grow>
    </>
  );
};
