import React from 'react'
import { Login } from '../Login/Login'
import imgFuncionario from '../../assets/images/login-funcionario.svg'
import './LoginF.css'

export const LoginF = () => {
    return (
        <section className="loginF">
                <h2 className="loginF__titulo">Área do Funcionário</h2>
            <div className="loginF__form">
                <Login/>
            </div>
            <div className="loginF__imgBg" >
                <img src={imgFuncionario} className="loginF__img" />
            </div>
        </section>
    )
}
