import React from "react";
import logo from "../../assets/images/logo.svg";
import { BtnAzulHeader, BtnAmareloHeader } from "../Button/Button";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Link to="/">
          <Navbar.Brand href="#home">
            <img className="header__imagem" src={logo} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto header__nav">
            <Nav className="header__nav__item" href="#">
              Início
            </Nav>
            <Nav className="header__nav__item" href="#quem-somos">
              Quem somos
            </Nav>
            <Nav className="header__nav__item" href="#planos">
              Planos
            </Nav>
            <Nav className="header__nav__item" href="#contato">
              Contato
            </Nav>
            <Link to="/login-funcionario">
              <Nav className="header__nav__item" href="#sou-funcionario">
                Sou funcionário
              </Nav>
            </Link>
          </Nav>
          <Nav className="header__nav__btns">
            <Link to="/login-cliente">
              <BtnAmareloHeader>Acessar</BtnAmareloHeader>
            </Link>
            <Link to="/cadastro-cliente">
              <BtnAzulHeader>Cadastre-se</BtnAzulHeader>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
