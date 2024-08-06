import CampoTexto from '../CampoTexto/campoTexto'
import './formulario.css'


const Formulario = () => {
    return (
        <section className='formulario'>
            <form className='formulario-form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario