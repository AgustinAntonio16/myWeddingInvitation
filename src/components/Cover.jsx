import React from 'react';
import Fondo from "../assets/Fondo.jpg";

const Cover = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Fondo})` }}>
      <div className="bg-ivoryWhite bg-opacity-70 p-8 rounded-lg text-center mb-8">
        <h1 className="text-6xl font-GreatVibes text-emeraldGreen mb-4">Yazmin & Agustín</h1>
        <p className="text-xl text-lightBrown mb-8">14 de Diciembre, 2024</p>
        <blockquote className="text-lg italic text-limeGreen mb-8">
          "El amor no se mira, se siente, y aún más cuando ella está junto a ti." - Pablo Neruda
        </blockquote>
      </div>
    </div>
  );
};

export default Cover;