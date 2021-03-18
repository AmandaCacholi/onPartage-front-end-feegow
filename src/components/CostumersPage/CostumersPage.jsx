import React from 'react'
import "./CostumersPage.css";
import {BtnAmareloPanel} from '../Button/Button';
// import Logo from "../../assets/images/upload-area.svg";

export default function clientPage() {
    return (
        <div>
            <div className="user-panel">
                {/* <img src={Logo}></img> */}
               <div className="buttons-area">
                    <BtnAmareloPanel className="botao-panel">Meus Arquivos</BtnAmareloPanel>
                    <BtnAmareloPanel className="botao-panel">Informações da conta</BtnAmareloPanel>
                    <BtnAmareloPanel className="botao-panel">Mudar Plano</BtnAmareloPanel>
                    <BtnAmareloPanel className="botao-panel">Sair</BtnAmareloPanel>
                </div>
            </div>
            <div className="user-upload-area">
                
            </div>
        </div>
    )
}
