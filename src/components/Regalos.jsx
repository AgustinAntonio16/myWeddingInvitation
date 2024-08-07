import React from 'react';
import { Link } from 'react-router-dom';
import animationData3 from '../assets/animations/Regalo.json';
import LottieAnimation from './Animations/LottieAnimation';


const Regalos = () => {
  return (
    <div className="bg-opacity-70 p-8 rounded-lg text-center mb-8 bg-gradient-to-r from-white via-transparent to-white bg-ivoryWhite">
      <h2 className="text-5xl font-GreatVibes text-emeraldGreen mb-4">Regalos</h2>
      <div className="mb-12 flex flex-col items-center justify-center">
      <LottieAnimation
              animationData={animationData3}
              width={200}
              height={200}
              startFrame={50}
              endFrame={150}
            />
      </div>
      <Link 
        to="/lista-de-regalos" 
        className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
      >
        Ver Lista de Regalos
      </Link>
    </div>
  );
};

export default Regalos;
