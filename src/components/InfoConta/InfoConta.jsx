import React, { useEffect, useState } from "react";
import { Grow } from "@material-ui/core";
import { req } from "../../models/req-clientes";
import "./InfoConta.css";

export const InfoConta = () => {
  const [dadosCliente, setDadosClientes] = useState([]);

  const reqCliente = async () => {
    const recebeReq = await req();
    const ultimoCliente = recebeReq[recebeReq.length - 1];
    setDadosClientes(ultimoCliente);
  };

  useEffect(() => reqCliente(), []);

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="infoConta">
          <h2 className="infoConta__titulo">Informações da conta</h2>
          <div className="infoConta__card">
            <p className="infoConta__info">
              <span>Nome: </span>
              {dadosCliente.name}
            </p>
            <p className="infoConta__info">
              <span>Email: </span>
              {dadosCliente.email}
            </p>
            <p className="infoConta__info">
              <span>Senha: </span>
              {dadosCliente.password}
            </p>
            <p className="infoConta__info">
              <span>Plano: </span>
              {dadosCliente.plan}
            </p>
            <p className="infoConta__info">
              <span>Começou em: </span>
              {dadosCliente.started}
            </p>
            <p className="infoConta__info">
              <span>ID: </span>
              {dadosCliente._id}
            </p>
          </div>
        </section>
      </Grow>
    </>
  );
};
