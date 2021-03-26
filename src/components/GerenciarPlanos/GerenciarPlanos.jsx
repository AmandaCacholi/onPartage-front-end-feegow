import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarPlanos.css";
import { deletePlanos } from "../../services/deletePlanos";
import { ModalPlan } from "../Modal/ModalPlan";
import { Grow } from "@material-ui/core";
import { req } from "../../models/req-planos";
import { Route, Switch } from "react-router";

export const GerenciarPlanos = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("")

  const reqPlanos = async () => {
    const recebeReq = await req()
    setDadosPlanos(recebeReq)
  }

  useEffect(() => reqPlanos(), [dadosPlanos]);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id;
    deletePlanos(idParam);
  };

  const handlerClickModal = (e) => {
    setId(e.target.id);
    setModalShow(true);
  };

  const planos = dadosPlanos.map((item, index) => (
    <CardReq
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
      tituloTipoPlano="Tipo: "
      onDoubleClickDelete={handlerDoubleClickDelete}
      onClickModal={handlerClickModal}
    />
  ));

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section>
          <h2 className="gerenciarPlanos__titulo">Planos cadastrados</h2>
          <div className="gerenciarPlanos__cardPlanos">{planos}</div>

        <ModalPlan
            id={id}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          
        </section>
      </Grow>

    </>
  );
};
