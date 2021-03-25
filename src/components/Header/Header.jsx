import React from "react";
import logo from "../../assets/images/logo.svg";
import { BtnAzulHeader, BtnAmareloHeader } from "../Button/Button";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const Header = (props) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top" >
        <NavLink to="/">
          <Navbar.Brand href="#home">
            <img alt="" className="header__imagem" src={logo} />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto header__nav">
            <Nav className="header__nav__item" href="#">
              Início
            </Nav>
            <Link to="planos" smooth={true} duration={1000} delay={500} >
              <Nav className="header__nav__item" href="#planos">
                Planos
              </Nav>
            </Link>
            <Link to="sobre" smooth={true} duration={1000} delay={500} >
              <Nav className="header__nav__item" href="#quem-somos">
                Quem somos
              </Nav>
            </Link>
            <Link to="contato" smooth={true} duration={1000} delay={500} >
              <Nav className="header__nav__item" href="#contato">
                Contato
              </Nav>
            </Link>
            <NavLink to="/login-funcionario">
              <Nav className="header__nav__item">
                Sou funcionário
              </Nav>
            </NavLink>
          </Nav>
          <Nav className="header__nav__btns">
            <NavLink to="/login-cliente">
              <BtnAmareloHeader>Acessar</BtnAmareloHeader>
            </NavLink>
            <NavLink to="/cadastro-cliente">
              <BtnAzulHeader>Cadastre-se</BtnAzulHeader>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
