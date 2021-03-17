import React from 'react'
import './Titulo.css'

export const Titulo = (props) => {
    return (
        <h3 className="titulo" >{props.children}</h3>
    )
}
