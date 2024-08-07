import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CeremonyLocation from './components/CeremonyLocation';
import ReceptionLocation from './components/ReceptionLocation';
import Regalos from './components/Regalos';
import ListaDeRegalos from './components/ListaDeRegalos';
import Musica from './components/Musica';
import DressCode from './components/DressCode';
import TipsNotas from './components/TipsNotas';
import ConfirmarAsistencia from './components/ConfirmarAsistencia';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceremony-location" element={<CeremonyLocation />} />
        <Route path="/reception-location" element={<ReceptionLocation />} />
        <Route path="/regalos" element={<Regalos/>} />
        <Route path="/lista-de-regalos" element={<ListaDeRegalos/>} />
        <Route path="/musica" element={<Musica/>} />
        <Route path="/dress-code" element={<DressCode/>} />
        <Route path="/tips-notas" element={<TipsNotas/>} />
        <Route path="/confirmar-asistencia" element={<ConfirmarAsistencia/>} />
      </Routes>
    </Router>
  );
}

export default App
