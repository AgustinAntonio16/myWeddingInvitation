import React from 'react';
import { Link } from 'react-router-dom';

const TipsNotas = () => {
  return (
    <div className="min-h-screen bg-lightIvory py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Tips y Notas</h2>
        <ul className="text-lg md:text-xl font-serif text-lightBrown list-disc list-inside">
          <li className="mb-4">Llega a tiempo para disfrutar de cada momento especial.</li>
          <li className="mb-4">Respeta el código de vestimenta sugerido.</li>
          <li className="mb-4">Evita usar tu teléfono móvil durante la ceremonia.</li>
          <li className="mb-4">Disfruta de la música y el baile, pero con moderación.</li>
          <li className="mb-4">Si consumes alcohol, hazlo de manera responsable.</li>
          <li className="mb-4">Respeta a los demás invitados y al personal del evento.</li>
          <li className="mb-4">Diviértete y celebra este día especial con nosotros.</li>
        </ul>
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

export default TipsNotas;
