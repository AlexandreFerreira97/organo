import Banner from './componentes/Banner/banner';
import CampoTexto from './componentes/CampoTexto/campoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite o cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
