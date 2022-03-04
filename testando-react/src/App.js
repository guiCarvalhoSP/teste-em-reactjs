import { useState } from 'react';
import './App.css';
import Condicao from './components/Condicao';

import Eventos from './components/Eventos';
import Form from './components/Form';
import Listas from './components/Listas';
import Saudacao from './components/Saudacao';
import StateLift from './components/StateLift';

function App() {

  //Lista (método de loop do react)
  const listaArtesMarciais = ['Boxe', 'Muay Thai', 'Kung Fu', 'Kickboxing'];

  //State Lift
  const [nome, setNome] = useState();

  return (
    <div className="App">
      <Form />
      <br/>
      <Eventos/>
      <br/>
      <Condicao/>
      <br/>
      <h3>Testando listas</h3>
      <Listas itens={listaArtesMarciais}/>
      <Listas itens={[]}/>

      <br/>
      
      <StateLift setNome={setNome}/>
      <Saudacao nome={nome}/>

    </div>
  );
}

export default App;
