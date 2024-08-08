import Colaborador from '../Colaborador/colaborador'
import './time.css'

const Time = (props) => {

    const css = {backgroundColor:props.corSecundaria}
    const css2 = {borderColor:props.corPrimaria}

    return (

        <section className='time' style={css}>
            <h3 className='time-titulo' style={css2}>{props.nome}</h3>
            {props.colaboradores.map (colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem}/>)}
        </section>
    )
}

export default Time