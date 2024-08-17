import React from 'react';
import Fondo from "../assets/Fondo1.jpg";
import Adorno from "../assets/PNG/adorno3.png";  // Importa la imagen del adorno

const Cover = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen p-4 font-DancingScript text-emeraldGreen"
    >
      {/* Capa de fondo con imagen y opacidad */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${Fondo})`, 
          opacity: 0.5,  // Ajusta el valor de opacidad según sea necesario
        }}
      />

      {/* Capa de color superpuesta */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Contenido dividido en 3 secciones verticales con fondo detrás del texto */}
      <div className="relative z-10 flex flex-col justify-between items-center h-full text-center text-5xl font-bold">
        {/* Parte superior */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white bg-opacity-50 px-6 py-2 rounded-lg">
            <span>Nuestra boda</span>
          </div>
        </div>

        {/* Parte central con texto dividido */}
        <div className="flex-1 flex flex-col items-center justify-center m-20">
          <div className="bg-white bg-opacity-50 px-6 py-2 rounded-lg mb-4">
            <span>Yazmin</span>
          </div>
          <div className="bg-white bg-opacity-50 px-6 py-2 rounded-lg mb-4">
            <span>&</span>
          </div>
          <div className="bg-white bg-opacity-50 px-6 py-2 rounded-lg">
            <span>Agustin</span>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white bg-opacity-50 px-6 py-2 rounded-lg">
            <span>14.Dic.2024 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
