import React from 'react'
import "./CostumersPage.css";
import {BtnAmareloPanel, BtnUpload} from '../Button/Button';
import Logo from "../../assets/images/round-logo.svg";
import imgFiles from '../../assets/images/files.svg'
import { Grow } from '@material-ui/core';

export default function clientPage() {
    return (
        <section className="homeC" >
            <Grow in={true} timeout={1000}>
                <div className="homeC__menu">
                    <img src={Logo} className="homeC__img" />
                    <div className="homeC__btnMenu">
                        <BtnAmareloPanel>Meus arquivos</BtnAmareloPanel>
                        <BtnAmareloPanel>Informações da conta</BtnAmareloPanel>
                        <BtnAmareloPanel>Mudar plano</BtnAmareloPanel>
                        <BtnAmareloPanel>Sair</BtnAmareloPanel>
                    </div>
                </div>
            </Grow>
            <Grow in={true} timeout={1500}>
                <div className="homeC__areaPrincipal">
                    <h2 className="homeC__titulo" >Bem vindo!</h2>
                    <div className="homeC__areaUpload">
                        <div className="homeC__input">
                            <p className="homeC__inputTexto" >Escolher arquivo...</p>
                        </div>
                        <BtnUpload>Enviar</BtnUpload>
                    </div>
                    <div className="homeC__arrasteUpload" >
                        <p className="homeC__inputTexto" >Arraste e solte seus arquivos aqui...</p>
                        <img src={imgFiles} className="homeC__imgFiles" />
                    </div>
                </div>
            </Grow>
        </section>
    )
}
