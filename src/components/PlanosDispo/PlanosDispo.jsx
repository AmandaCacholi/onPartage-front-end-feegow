import React, { useEffect, useState } from 'react'
import { req } from '../../models/req-planos'
import { PlanosPagCliente } from '../PlanosPagCliente/PlanosPagCliente'

export const PlanosDispo = () => {

    const [dadosPlanos, setDadosPlanos] = useState("")
    
    const reqPlanos = async () => {
        const recebeReq = await req()
        setDadosPlanos(recebeReq)
    }

    useEffect(() => reqPlanos(), [])

    // const planos = dadosPlanos.map((item, index) => console.log(item.name) )

    return (
        <>
            
        </>
    )
}
