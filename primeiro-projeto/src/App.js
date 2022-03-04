import './App.css';
import Evento from './components/Evento';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
function App() {

  const nome = "Julia";
  const idade = 18;
  const url = "https://via.placeholder.com/200";
  const profissao = "Programadora"

  return (
    
    <div className="App">
      <HelloWorld />

      <Pessoa nome="Guilherme" idade= "19" profissao="Programador" foto="https://via.placeholder.com/200" />
      <Pessoa nome={nome} idade= {idade} profissao={profissao} foto={url} />
      <Pessoa foto={url} />

      <Evento />
    </div>
  );
}

export default App;
