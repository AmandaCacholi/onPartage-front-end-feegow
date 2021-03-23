import React, { useEffect, useState } from 'react'
import { CardReq } from '../CardReq/CardReq'
import './GerenciarClientes.css'

export const GerenciarClientes = () => {

    const [dadosClientes, setDadosClientes] = useState([])

    const req = async () => {
        const response = await fetch("http://localhost:8080/costumers")
        const dados = await response.json()
        setDadosClientes(dados)
    }

    useEffect(() => req(), [])

    const clientes = dadosClientes.map((item, index) => (
        <CardReq
            key={index}
            tituloNome="Nome: "
            nome={item.name}
            tituloEmail="Email: "
            email={item.email}
            tituloPlano="Plano: "
            plano={item.plan}
            tituloid="ID: "
            id={item._id}
            tituloDesde="Começou em: "
            desde={item.started}
        />
    ))

    return (
        <div>
            {clientes}
        </div>
    )
}
