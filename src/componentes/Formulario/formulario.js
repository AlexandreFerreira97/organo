import Botao from '../Botao/botao'
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
    
    const Save = (evento) => {
        evento.preventDefatul();
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={Save} className='formulario-form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario