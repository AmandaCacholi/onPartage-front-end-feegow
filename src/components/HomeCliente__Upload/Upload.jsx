import React from "react";
import "./Upload.css";
import imgFiles from "../../assets/images/files.svg";
import { BtnUpload } from "../Button/Button";
import { Grow } from "@material-ui/core";

export const Upload = () => {
  return (
    <>
      <Grow in={true} timeout={1500}>
        <div className="homeC__areaPrincipal">
          <h2 className="homeC__titulo">Envie seus arquivos</h2>
          <div className="homeC__areaUpload">
            <div className="homeC__input">
              <p className="homeC__inputTexto">Escolher arquivo...</p>
            </div>
            <BtnUpload>Enviar</BtnUpload>
          </div>
          <div className="homeC__arrasteUpload">
            <p className="homeC__inputTexto">
              Arraste e solte seus arquivos aqui...
            </p>
            <img src={imgFiles} className="homeC__imgFiles" />
          </div>
        </div>
      </Grow>
    </>
  );
};
