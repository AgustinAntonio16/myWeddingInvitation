import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK_PARROQUIA, GOOGLE_MAPS_LINK_ACIENDA } from '../constants';
import { Link } from 'react-router-dom';
import LottieAnimation from './Animations/LottieAnimation';
import animationData1 from '../assets/animations/church.json';
import animationData2 from '../assets/animations/party.json';
import SaveDate from './SaveDate';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

function CeremonyAndReception() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="bg-lightIvory py-12 font-GreatVibes bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-GreatVibes text-emeraldGreen">Ceremonia religiosa</h2>
            <p className="text-2xl text-lightBrown mt-4">
              <a
                href= "https://www.google.com.mx/maps/place/Iglesia+de+Santa+Mar%C3%ADa+Tonanitla,+18+de+Noviembre,+Villas+de+Santa+Mar%C3%ADa,+Santa+Mar%C3%ADa+Tonanitla,+55789+Santa+Mar%C3%ADa+Tonanitla,+M%C3%A9x./@19.6876838,-99.0560563,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f2e301052ae1:0x9cb1d57d20d62f50!8m2!3d19.6877097!4d-99.0535672!16s%2Fg%2F11bvtjv2sc?entry=ttu"
                title="Haz clic para ver el mapa en Google Maps"
                target="_blank"
                rel="noreferrer"
                className="text-brown"
              >
                <strong >Parroquia de Santa María de los Remedios de Tonanitla</strong>
              </a>
              <br />
              20 de Noviemmbre S/N, Centro, 55789 Santa María Tonanitla, Méx.
            </p>
          </div>
          <div className="mb-12 flex flex-col items-center justify-center">
            <LottieAnimation
              animationData={animationData1}
              width={300}
              height={300}
            />
            <Link to="/ceremony-location" className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300">
              Ver Ubicación de la Ceremonia
            </Link>
            <SaveDate 
              title="Ceremonia de la Boda de Yazmin y Agustin" 
              start="20241214T153000Z" 
              end="20241214T170000Z" 
            />
            <Link 
              to="/confirmar-asistencia" 
              state={{ 
                eventTitle: 'Ceremonia de la Boda de Yazmin y Agustin', 
                isCeremony: true 
              }} 
              className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300"
            >
              Confirmar Asistencia
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-GreatVibes text-emeraldGreen">Recepción</h2>
            <p className="text-2xl text-lightBrown mt-4">
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
            <Link to="/reception-location" className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300">
              Ver Ubicación de la Recepción
            </Link>
            <SaveDate 
              title="Recepción de la Boda de Yazmin y Agustin" 
              start="20241214T173000Z" 
              end="20241215T003000Z" 
            />
            <Link 
              to="/confirmar-asistencia" 
              state={{ 
                eventTitle: 'Recepción de la Boda de Yazmin y Agustin', 
                isCeremony: false 
              }} 
              className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300"
            >
              Confirmar Asistencia
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(CeremonyAndReception);
