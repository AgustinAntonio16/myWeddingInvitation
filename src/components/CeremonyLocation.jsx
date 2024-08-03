import React from 'react';
import { Link } from 'react-router-dom';
import CeremonyMap from './CeremonyMap';

const CeremonyLocation = () => {
  return (
    <div className="min-h-screen bg-lightIvory py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-GreatVibes text-emeraldGreen">Ceremonia religiosa</h2>
          <p className="text-lg text-lightBrown mt-4">
            <a
              href="https://www.google.com/maps/place/Parroquia+de+Santa+Mar%C3%ADa+de+los+Remedios+de+Tonanitla/"
              title="Haz clic para ver el mapa en Google Maps"
              target="_blank"
              rel="noreferrer"
              className="text-brown"
            >
              <strong>Parroquia de Santa María de los Remedios de Tonanitla</strong>
            </a>
            <br />
            20 de Noviemmbre S/N, Centro, 55789 Santa María Tonanitla, Méx.
          </p>
        </div>
        <div className="mb-12">
          <CeremonyMap />
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CeremonyLocation;