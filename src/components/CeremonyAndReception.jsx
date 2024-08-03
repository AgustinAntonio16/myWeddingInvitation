import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK_PARROQUIA, GOOGLE_MAPS_LINK_ACIENDA } from '../constants';
import { Link } from 'react-router-dom';
import LottieAnimation from './Animations/LottieAnimation';
import animationData1 from '../assets/animations/church.json';
import animationData2 from '../assets/animations/party.json';
import CeremonyMap from './CeremonyMap';
import ReceptionMap from './ReceptionMap';

function CeremonyAndReception() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="bg-lightIvory py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-GreatVibes text-emeraldGreen">Ceremonia religiosa</h2>
            <p className="text-lg text-lightBrown mt-4">
              <a
                href={GOOGLE_MAPS_LINK_PARROQUIA}
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
          <div className="mb-12 flex flex-col items-center justify-center">
            <LottieAnimation
              animationData={animationData1}
              width={350}
              height={350}
              startFrame={50}
              endFrame={150}
            />
            <Link to="/ceremony-location" className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300">
              Ver Ubicación de la Ceremonia
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-GreatVibes text-emeraldGreen">Recepción</h2>
            <p className="text-lg text-lightBrown mt-4">
              <a
                href={GOOGLE_MAPS_LINK_ACIENDA}
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
          <div className="mb-12 flex flex-col items-center justify-center">
            <LottieAnimation animationData={animationData2} width={300} height={300} startFrame={0} endFrame={150} />
            <Link to="/reception-location" className="px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300">
              Ver Ubicación de la Recepción
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(CeremonyAndReception);
