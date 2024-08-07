import React from 'react';
import { Link } from 'react-router-dom';
import LottieAnimation from './Animations/LottieAnimation';
import animationData4 from '../assets/animations/music.json';
import animationData5 from '../assets/animations/dressCode.json';
import animationData6 from '../assets/animations/note.json';

const Fiesta = () => {
  return (
    <div className="bg-lightIvory py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Fiesta</h2>
        <p className="text-lg md:text-xl font-serif text-lightBrown mb-12">
          Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-GreatVibes text-emeraldGreen mb-4">Música</h3>
            <div className="mb-12 flex flex-col items-center justify-center">
      <LottieAnimation
              animationData={animationData4}
              width={200}
              height={200}
              startFrame={50}
              endFrame={150}
            />
      </div>
            <p className="text-md md:text-lg font-serif text-lightBrown mb-4">
              ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
            </p>
            <Link 
              to="/musica" 
              className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-md rounded-full hover:bg-limeGreen transition duration-300"
            >
              Sugerir Canción
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-GreatVibes text-emeraldGreen mb-4">Dress Code</h3>
            <div className="mb-12 flex flex-col items-center justify-center">
      <LottieAnimation
              animationData={animationData5}
              width={200}
              height={200}
              startFrame={50}
              endFrame={150}
            />
      </div>
            <p className="text-md md:text-lg font-serif text-lightBrown mb-4">
              Una orientación para tu vestuario
            </p>
            <Link 
              to="/dress-code" 
              className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-md rounded-full hover:bg-limeGreen transition duration-300"
            >
              Ver Más
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-GreatVibes text-emeraldGreen mb-4">Tips y Notas</h3>
            <div className="mb-12 flex flex-col items-center justify-center">
      <LottieAnimation
              animationData={animationData6}
              width={200}
              height={200}
              startFrame={50}
              endFrame={150}
            />
      </div>
            <p className="text-md md:text-lg font-serif text-lightBrown mb-4">
              Información adicional para tener en cuenta
            </p>
            <Link 
              to="/tips-notas" 
              className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-md rounded-full hover:bg-limeGreen transition duration-300"
            >
              + Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiesta;
