import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Contactopage from './pages/Contactopage';
import Nosotrospage from './pages/Nosotrospage';
import Novedadespage from './pages/Novedadespage';
import Homepage from './pages/Homepage';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="nosotros" element={<Nosotrospage />} />
          <Route path="novedades" element={<Novedadespage />} />
          <Route path="contacto" element={<Contactopage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
