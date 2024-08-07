import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {

    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
    </div>
  );
}

export default App;
