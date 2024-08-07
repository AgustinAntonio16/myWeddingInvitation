import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ivoryWhite py-8 border-t-2 border-lightBrown">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-GreatVibes text-emeraldGreen">Navegación</h2>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 text-center">
          <Link to="/ceremony-location" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Ceremonia
          </Link>
          <Link to="/reception-location" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Recepción
          </Link>
          <Link to="/musica" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Música
          </Link>
          <Link to="/dress-code" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Dress Code
          </Link>
          <Link to="/tips-notas" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Tips y Notas
          </Link>
          <Link to="/confirmar-asistencia/ceremonia" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Confirmar Asistencia Ceremonia
          </Link>
          <Link to="/confirmar-asistencia/recepcion" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Confirmar Asistencia Recepción
          </Link>
          <Link to="/compartir-fotos" className="text-lightBrown hover:text-emeraldGreen transition duration-300">
            Compartir Fotos
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
