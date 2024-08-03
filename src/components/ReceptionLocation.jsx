import React from 'react';
import { Link } from 'react-router-dom';
import ReceptionMap from './ReceptionMap';

const ReceptionLocation = () => {
  return (
    <div className="min-h-screen bg-lightIvory py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-GreatVibes text-emeraldGreen">Recepción</h2>
          <p className="text-lg text-lightBrown mt-4">
            <a
              href="https://www.google.com/maps/place/Hacienda+Azalaga/"
              title="Haz clic para ver el mapa en Google Maps"
              target="_blank"
              rel="noreferrer"
              className="text-brown"
            >
              <strong>Hacienda Azalaga</strong>
            </a>
            <br />
            Abundio Gómez S/N, La Urbana o La Chinampa, 55789 Santa María Tonanitla, Méx.
          </p>
        </div>
        <div className="mb-12">
          <ReceptionMap />
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

export default ReceptionLocation;
