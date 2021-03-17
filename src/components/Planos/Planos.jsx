import React from "react";
import { BtnAmareloHeader } from "../Button/Button";
import "./Planos.css";

export const Planos = (props) => {
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
            <td className="planos__info">{props.infoUm}</td>
          </tr>
          <tr>
            <td className="planos__info">{props.infoDois}</td>
          </tr>
          <tr>
            <td className="planos__preco">
              <p className="planos__periodo">Mensalmente:</p>
              {props.precoMensal}
              <p className="planos__usuarios">{props.porUsuario}</p>
            </td>
          </tr>
          <tr>
            <td className="planos__preco">
              <p className="planos__periodo">Anualmente:</p>
              {props.precoAnual}
              <p className="planos__usuarios">{props.porUsuario}</p>
            </td>
          </tr>
          <tr>
            <td className="planos__btn" >
              <BtnAmareloHeader>Obter agora</BtnAmareloHeader>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <table className="planos__table">
        <tr>
          <th className="planos__thead">Bronze</th>
        </tr>
        <tr>
          <td className="planos__info">Mais de 3 usuários</td>
        </tr>
        <tr>
          <td className="planos__info">2TB(2.000GB)</td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Mensalmente:</p>
            R$ 69,99/mês
          </td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Anualmente:</p>
            R$ 65/mês
          </td>
        </tr>
      </table>

      <table className="planos__table" >
        <tr>
          <th className="planos__thead">Silver</th>
        </tr>
        <tr>
          <td className="planos__info">6 usuários</td>
        </tr>
        <tr>
          <td className="planos__info">3TB(3.000GB)</td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Mensalmente:</p>
            R$ 99,99/mês
          </td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Anualmente:</p>
            R$ 95/mês
          </td>
        </tr>
      </table>

      <table className="planos__table">
        <tr>
          <th className="planos__thead">Gold</th>
        </tr>
        <tr>
          <td className="planos__info">1 usuário</td>
        </tr>
        <tr>
          <td className="planos__info">2TB(2.000GB)</td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Mensalmente:</p>
            R$ 79,99/mês
            <p className="planos__usuarios">por usuário</p>
          </td>
        </tr>
        <tr>
          <td className="planos__preco">
            <p className="planos__periodo">Anualmente:</p>
            R$ 75/mês
            <p className="planos__usuarios">por usuário</p>
          </td>
        </tr>
      </table> */}
    </>
  );
};
