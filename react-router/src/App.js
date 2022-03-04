import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './App.css';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contatos from './components/pages/Contatos';
import SobreNos from './components/pages/SobreNos';
import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contatos />} />
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
