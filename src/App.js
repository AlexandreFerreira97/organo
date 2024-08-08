import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';
import Time from './componentes/Time/time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Front-end',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mobile',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Data Science',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'UX & Design',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Devops',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
