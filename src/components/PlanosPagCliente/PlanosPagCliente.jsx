import React from "react";

export const PlanosPagCliente = (props) => {
  return (
    <>
      <table className="planos__table">
        <thead>
          <tr>
            <th className="planos__thead">{props.nomePlano}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="planos__info">{props.preco}</td>
          </tr>
          <tr>
            <td className="planos__info">{props.capacidade}</td>
          </tr>
          <tr>
            <td className="planos__info">{props.usuarios}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
