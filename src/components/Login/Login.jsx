import React from 'react'
import './Login.css'
import { TextField, Switch } from "@material-ui/core";
import { BtnContato } from "../Button/Button";

export const Login = (props) => {
    return (
        <form className="login__form">
          <TextField
            type={props.type}
            id={props.id}
            label={props.label}
            variant="outlined"
            margin="normal"
          />
          <TextField
            type="password"
            id="login__senha"
            label="Senha"
            variant="outlined"
            margin="normal"
          />
          <div className="login__lembrar">
            <div className="login__switchLabel" >
              <Switch name="lembrar" color="primary" defaultChecked />
              <p className="login__lembrarTexto">Lembre-se de mim</p>
            </div>
            <p className="login__esqueceuSenha">Esqueceu sua senha?</p>
          </div>
        </form>
    )
}
