import { useState } from 'react'
import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa/listaSuspensa'
import './formulario.css'


const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Moblie',
        'Data Science',
        'UX & Design',
        'Devops',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time,setTime] = useState('')
    
    const Save = (evento) => {
        evento.preventDefatul();
        props.aoColaboradorCadastrado({nome,cargo,imagem,time})
    }

    return (
        <section className='formulario'>
            <form onSubmit={Save} className='formulario-form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario