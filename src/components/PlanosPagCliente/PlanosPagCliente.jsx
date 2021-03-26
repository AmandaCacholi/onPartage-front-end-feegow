import React from "react";
import "./PlanosPagCliente.css";

export const PlanosPagCliente = (props) => {
  return (
    <>
      <table className="planosTable__table">
        <thead>
          <tr>
            <th className="planosTable__thead">{props.nomePlano}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="planosTable__info">R$ {props.preco}/mês</td>
          </tr>
          <tr>
            <td className="planosTable__info">{props.capacidade}</td>
          </tr>
          <tr>
            <td className="planosTable__info">{props.usuarios} usuário(s)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
