import React, { useEffect, useState } from "react";
import { CardReq } from "../CardReq/CardReq";
import "./GerenciarFuncionarios.css";
import { deleteFuncionarios } from "../../services/deleteFuncionarios";
import { Grow } from "@material-ui/core";
import { req } from "../../models/req-funcionarios";
import { ModalFuncionario } from "../Modal/ModalFuncionario";

export const GerenciarFuncionarios = () => {
  const [dadosFuncionarios, setDadosFuncionarios] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("")
  
  const reqFuncionarios = async () => {
    const recebeReq = await req()
    setDadosFuncionarios(recebeReq)
  }

  useEffect(() => reqFuncionarios(), [dadosFuncionarios]);

  const handlerDoubleClickDelete = (e) => {
    const idParam = e.target.id;
    deleteFuncionarios(idParam);
  };

  const handlerClickModal = (e) => {
    setId(e.target.id);
    setModalShow(true);
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
      onClickModal={handlerClickModal}
    />
  ));

  return (
    <>
      <Grow in={true} timeout={1500}>
        <section>
          <h2 className="gerenciarFuncionarios__titulo">
            Funcionários cadastrados
          </h2>
          <div className="gerenciarFuncionarios">{funcionarios.reverse()}</div>
          
          <ModalFuncionario
            id={id}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </section>
      </Grow>
    </>
  );
};
