import React from 'react';
import { Link } from 'react-router-dom';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

const DressCode = () => {
  return (
    <div className="min-h-screen bg-lightIvory py-12 font-GreatVibes bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-lightIvory bg-opacity-70 container mx-auto px-4 text-center">
        <h2 className="text-5xl text-emeraldGreen mb-8">Dress Code</h2>
        <ul className="list-disc list-inside text-2xl md:text-4xl text-lightBrown mb-8 space-y-4">
          <li>
            Por favor, ninguna dama debe ir vestida de color blanco, ese está destinado exclusivamente para la novia.
          </li>
          <li>
          Es una boda con temática mexicana, y nos haría muy felices que nos pudieran acompañar con algún vestuario típico, aunque es totalmente opcional. Si eligen hacerlo, nos encantaría que el traje refleje la elegancia del día y acorde a la ocasión.
          </li>
        </ul>
        <div className="mt-8">
          <Link 
            to="/" 
            className="px-4 py-2 bg-emeraldGreen text-white text-2xl rounded-full hover:bg-brownLight transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DressCode;

