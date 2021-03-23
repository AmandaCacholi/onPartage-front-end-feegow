import React from "react";
import "./CardReq.css";

export const CardReq = (props) => {
  return (
    <div className="cardReq__bg">
      <p className="cardReq__info">
        {props.tituloNome} {props.nome}
      </p>
      <p className="cardReq__info">
        {props.tituloPreco} {props.preco}
      </p>
      <p className="cardReq__info">
        {props.tituloCapacidade} {props.capacidade}
      </p>
      <p className="cardReq__info">
        {props.tituloUsuario} {props.usuarios}
      </p>
      <p className="cardReq__info">
        {props.tituloid} {props.id}
      </p>
      <p className="cardReq__info">
        {props.tituloEmail} {props.email}
      </p>
      <p className="cardReq__info">
        {props.tituloDesde} {props.desde}
      </p>
      <p className="cardReq__info">
        {props.tituloPlano} {props.plano}
      </p>
    </div>
  );
};
