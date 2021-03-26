import React, { useEffect, useState } from "react";
import { req } from "../../models/req-planos";
import { PlanosPagCliente } from "../PlanosPagCliente/PlanosPagCliente";
import { Grow } from "@material-ui/core";
import "./PlanosDispo.css";

export const PlanosDispo = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);

  const reqPlanos = async () => {
    const recebeReq = await req();
    setDadosPlanos(recebeReq);
  };
  useEffect(() => reqPlanos(), []);

  const planos = dadosPlanos.map((item, index) => (
    <PlanosPagCliente
      nomePlano={item.name}
      preco={item.price}
      capacidade={item.size}
      usuarios={item.screens}
    />
  ));

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section className="planosTable__main">
          <h2 className="planosTable__titulo">Planos Disponíveis</h2>
          <div className="planosTable__tables">{planos}</div>
        </section>
      </Grow>
    </>
  );
};
