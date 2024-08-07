import './listaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='listaSupensa'>
            <label className='listaSuspensa-label'>{props.label}</label>
            <select className='lista-map'>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa