import React from "react";
import "./CardReq.css";
import imgDelete from "../../assets/images/delete.svg";
import imgEdit from "../../assets/images/edit.svg";

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
      <div className="cardReq__flexImg" >
        <div className="cardReq__imgWrapper">
          <img alt="" className="cardReq__img" id={props.id} src={imgEdit} onDoubleClick={props.onClickModal} />
          <img alt="" className="cardReq__img" id={props.id} src={imgDelete} onDoubleClick={props.onDoubleClickDelete} />
        </div>
      </div>
    </div>
  );
};
