import './time.css'

const Time = (props) => {
    return (
        <section className='time'>
            <h3 className='time-titulo'>{props.nome}</h3>
        </section>
    )
}

export default Time