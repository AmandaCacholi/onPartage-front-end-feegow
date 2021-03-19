import React from 'react'
import "./CostumersPage.css";
import {BtnAmareloPanel, BtnUpload} from '../Button/Button';
import Logo from "../../assets/images/round-logo.svg";
import imgFiles from '../../assets/images/files.svg'

export default function clientPage() {
    return (
        <section className="homeC" >
            <div className="homeC__menu">
                <img src={Logo} className="homeC__img" />
                <div className="homeC__btnMenu">
                    <BtnAmareloPanel>Meus arquivos</BtnAmareloPanel>
                    <BtnAmareloPanel>Informações da conta</BtnAmareloPanel>
                    <BtnAmareloPanel>Mudar plano</BtnAmareloPanel>
                    <BtnAmareloPanel>Sair</BtnAmareloPanel>
                </div>
            </div>
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
            
        </section>

        // <div>
        //     <div className="user-panel">
        //         <div className="logo-container">
        //             <img src={Logo}></img>
        //         </div>
        //        <div className="buttons-area">
        //             <BtnAmareloPanel className="botao-panel">Meus Arquivos</BtnAmareloPanel>
        //             <BtnAmareloPanel className="botao-panel">Informações da conta</BtnAmareloPanel>
        //             <BtnAmareloPanel className="botao-panel">Mudar Plano</BtnAmareloPanel>
        //             <BtnAmareloPanel className="botao-panel">Sair</BtnAmareloPanel>
        //         </div>
        //     </div>
        //     <div className="user-upload-area">
        //         <div className="tittle-area">
        //             <h1>Bem vindo!</h1>
        //         </div>
        //     </div>
        // </div>
    )
}
