import './listaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='listaSupensa'>
            <label className='listaSuspensa-label'>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value} className='lista-map'>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa