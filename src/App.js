import './App.css';
import Menu from './Menu';
import Conteudo from './Conteudo';
import Galeria_fotos from './Galeria_fotos';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="cabecalho"></div>
      <Conteudo/>
      <Galeria_fotos/>
      <Footer/>
    </div>
  );
}

export default App;
