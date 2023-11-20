import React from 'react';
import {Header} from './components/Header';
import { Titulo } from './components/Header';
import { Menu } from './components/Header';
import  Home  from './pages/Home';
import  CardapioList  from './pages/CardapioList';
import  Contact  from './pages/Contact';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Titulo>Restaurante DEV-SERV-TI</Titulo>
        <div>
          <nav>
            <Menu>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/CardapioList">Cadastros</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </Menu>
          </nav>
        </div>
      </Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CardapioList" element={<CardapioList />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
