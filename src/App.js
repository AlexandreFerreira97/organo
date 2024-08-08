import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';
import Time from './componentes/Time/time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {

    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
