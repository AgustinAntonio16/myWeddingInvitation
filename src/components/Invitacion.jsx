import React from 'react';

const Invitacion = () => {
  return (
    <div className="bg-opacity-70 p-8 rounded-lg text-center mb-8 bg-gradient-to-r from-white via-transparent to-white bg-ivoryWhite">
      <h1 className="text-5xl md:text-8xl font-GreatVibes text-emeraldGreen mb-4">
        Yaz & Agus
      </h1>
      <p className="text-2xl md:text-3xl font-GreatVibes  text-black bg-opacity-70 px-4 py-2 rounded mb-8">
        14 de diciembre 2024
      </p>
      <blockquote className="text-lg md:text-2xl italic font-GreatVibes text-lightBrown mb-4">
        "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.
        No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. 
        El amor no se deleita en la maldad sino que se regocija con la verdad. Todo lo disculpa, 
        todo lo cree, todo lo espera, todo lo soporta."
      </blockquote>
      <cite className="text-lg md:text-xl font-GreatVibes text-lightBrown mb-8 block">Corintios 13:4-7</cite>
      <p className="text-2xl md:text-3xl italic font-GreatVibes text-black">
        Tenemos el honor de invitarte a nuestra boda
      </p>
    </div>
  );
};

export default Invitacion;
