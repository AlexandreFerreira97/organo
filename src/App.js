import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';
import Time from './componentes/Time/time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0A8E2'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#E06869',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'UX & Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Devops',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times = {times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      {times.map (time => <Time key={time.nome} nome = {time.nome} corPrimaria = {time.corPrimaria} corSecundaria = {time.corSecundaria}/>)}
    </div>
  );
}

export default App;
