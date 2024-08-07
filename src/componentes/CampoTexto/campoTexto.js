import './campoTexto.css'

const CampoTexto = (props) => {
    //jsx
    return(
        <div className="campo-texto">
            <label className="label_campo-texto">{props.label}</label>
            <input required={props.obrigatorio} className='ipt' placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto