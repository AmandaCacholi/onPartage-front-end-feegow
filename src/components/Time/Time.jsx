import React from 'react'
import './Time.css'

export const Time = (props) => {
    return (
        <div className="time__card">
            <img className="time__img" src={props.img} />
            <h2 className="time__nome" >{props.nome}</h2>
            <p className="time__titulo" >{props.titulo}</p>
        </div>
    )
}
