import React from 'react';
import Fondo from "../assets/Fondo.jpg";

const Cover = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4" 
      style={{ backgroundImage: `url(${Fondo})` }}
    >
    </div>
  );
};

export default Cover;
