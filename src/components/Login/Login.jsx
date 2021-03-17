import React from 'react'
import './Login.css'
import { TextField, Switch } from "@material-ui/core";
import { BtnContato } from "../Button/Button";

export const Login = () => {
    return (
        <form className="login__form">
          <TextField
            id="login__email"
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
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
          <BtnContato>Entrar</BtnContato>
        </form>
    )
}
