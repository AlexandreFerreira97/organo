import Colaborador from '../Colaborador/colaborador'
import './time.css'

const Time = (props) => {

    const css = {backgroundColor:props.corSecundaria}
    const css2 = {borderColor:props.corPrimaria}

    return (
        //essa condição a esquerda é uma renderização condicional do react, se for falso a section não aparece
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 className='time-titulo' style={css2}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map (colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem = {colaborador.imagem}/>)}
            </div>

        </section>
    )
}

export default Time