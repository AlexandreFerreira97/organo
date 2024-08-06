import Banner from './componentes/Banner/banner';
import CampoTexto from './componentes/CampoTexto/campoTexto';
import Formulario from './componentes/Formulario/formulario';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
