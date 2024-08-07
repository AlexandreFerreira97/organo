import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {
    //jsx

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label className="label_campo-texto">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} className='ipt' placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto