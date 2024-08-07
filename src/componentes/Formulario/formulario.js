import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa/listaSuspensa'
import './formulario.css'


const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Moblie',
        'Data Science',
        'UX & Design',
        'Devops',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form className='formulario-form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario