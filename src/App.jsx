import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
