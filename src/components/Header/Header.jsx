import React from "react";
import logo from "../../assets/images/logo.svg";
import { BtnAzulHeader, BtnAmareloHeader } from "../Button/Button";
import "./Header.css";
import {
  Navbar,
  Nav
} from "react-bootstrap";

export const Header = (props) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img className="header__imagem" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto header__nav">
            <Nav className="header__nav__item" href="#">Início</Nav>
            <Nav className="header__nav__item" href="#quem-somos">Quem somos</Nav>
            <Nav className="header__nav__item" href="#planos">Planos</Nav>
            <Nav className="header__nav__item" href="#contato">Contato</Nav>
            <Nav className="header__nav__item" href="#sou-funcionario">Sou funcionário</Nav>
          </Nav>
          <Nav className="header__nav__btns">
            <BtnAmareloHeader>Acessar</BtnAmareloHeader>
            <BtnAzulHeader>Cadastre-se</BtnAzulHeader>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
