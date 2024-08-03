import React from 'react';
import Fondo from "../assets/Fondo.jpg";

const Cover = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4" 
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="bg-opacity-70 p-8 rounded-lg text-center mb-8 bg-gradient-to-r from-white via-transparent to-white">
        <h1 className="text-5xl md:text-8xl font-GreatVibes text-emeraldGreen mb-4">
          Yaz & Agus
        </h1>
        <p className="text-lg md:text-3xl font-serif text-black bg-white bg-opacity-70 px-4 py-2 rounded mb-8">
          14.12.2024
        </p>
        <blockquote className="text-lg md:text-2xl italic font-serif text-ivoryWhite mb-8">
          "Aunque uno pueda ser vencido, dos pueden resistir.
          ¡La cuerda de tres hilos no se rompe fácilmente!"
        </blockquote>
      </div>
    </div>
  );
};

export default Cover;
