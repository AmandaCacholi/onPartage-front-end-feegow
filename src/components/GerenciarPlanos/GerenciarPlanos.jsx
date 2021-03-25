import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarPlanos.css";
import { deletePlanos } from '../../services/deletePlanos'
import { ModalPlan } from '../Modal/ModalPlan'

export const GerenciarPlanos = () => {
  const [dadosPlanos, setDadosPlanos] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);


  const req = async () => {
    const response = await fetch("https://onpartage-backend.herokuapp.com/plans");
    const dados = await response.json();
    setDadosPlanos(dados);
  };

  useEffect(() => req(), []);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id
    deletePlanos(idParam)
  }

  

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
      onClickModal={() => setModalShow(true)}
    />

    
  ));

  return (
    <section>
      <div className="gerenciarPlanos__cardPlanos">{planos}</div>

      <ModalPlan
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};
