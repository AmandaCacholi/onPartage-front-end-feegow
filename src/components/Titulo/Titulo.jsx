import React from 'react'
import './Titulo.css'

export const Titulo = (props) => {
    return (
        <h3 className="titulo" id={props.id} >{props.children}</h3>
    )
}
