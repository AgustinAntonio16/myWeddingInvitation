import React from 'react';
import LottieAnimation from './LottieAnimation';
import animationData from '../assets/animations/corazon.json';

const Welcome = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-ivoryWhite z-50">
      <div >
        {/* <div className="absolute top-[-50%] left-0 w-24 h-24 bg-emeraldGreen rounded-full"></div>
        <div className="absolute left-[-50%] top-0 w-24 h-24 bg-emeraldGreen rounded-full"></div> */}
        <LottieAnimation animationData={animationData} width={400} height={400} />
      </div>
      <h1 className="text-5xl font-GreatVibes font-extralight text-emeraldGreen mt-4">
        ¡Bienvenidos! a la invitación de nuestra boda
      </h1>
      <button
        onClick={onEnter}
        className="mt-8 px-6 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
      >
        Entrar
      </button>
    </div>
  );
};

export default Welcome;
