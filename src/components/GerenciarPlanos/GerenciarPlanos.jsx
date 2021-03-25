import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarPlanos.css";
import { deletePlanos } from "../../services/deletePlanos";
import { ModalPlan } from "../Modal/ModalPlan";
import { Grow } from "@material-ui/core";

export const GerenciarPlanos = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const req = async () => {
    const response = await fetch(
      "https://onpartage-backend.herokuapp.com/plans"
    );
    const dados = await response.json();
    setDadosPlanos(dados);
  };

  useEffect(() => req(), [dadosPlanos]);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id;
    deletePlanos(idParam);
  };

  const handlerClickModal = (e) => {
    const idPlano = e.target.id;
    setModalShow(true);
    return idPlano;
  };

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
            id={handlerClickModal}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </section>
      </Grow>
    </>
  );
};
