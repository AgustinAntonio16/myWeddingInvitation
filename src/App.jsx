import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CeremonyLocation from './components/CeremonyLocation';
import ReceptionLocation from './components/ReceptionLocation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ceremony-location" element={<CeremonyLocation />} />
        <Route path="/reception-location" element={<ReceptionLocation />} />
      </Routes>
    </Router>
  );
}

export default App
