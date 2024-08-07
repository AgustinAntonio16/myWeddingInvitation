import React from 'react';
import { Link } from 'react-router-dom';

const DressCode = () => {
  return (
    <div className="min-h-screen bg-lightIvory py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Dress Code</h2>
        <p className="text-lg md:text-xl font-serif text-lightBrown mb-8">
          Por favor, ninguna dama debe ir vestida de color blanco, ese está destinado exclusivamente para la novia.
        </p>
        <p className="text-lg md:text-xl font-serif text-lightBrown mb-8">
          Es una boda con temática mexicana, nos haría muy feliz que nos pudieran acompañar con algún vestuario típico, pero eso es meramente opcional.
        </p>
        <div className="mt-8">
          <Link 
            to="/" 
            className="px-4 py-2 bg-brownDark text-lightBrown text-lg rounded-full hover:bg-brownLight transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
