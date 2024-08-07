import React from 'react';
import { Link } from 'react-router-dom';
import qrImage from '../assets/Qr/qr.png'; // Asegúrate de tener la imagen en esta ruta

const CompartirFotos = () => {
  const albumLink = "https://photos.app.goo.gl/gSjdz2wEaBNBFMxA7"; // Reemplaza este enlace con el enlace real del álbum

  return (
    <div className="bg-lightIvory min-h-screen py-12 flex flex-col items-center">
      <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Compartimos este día junto a ti</h2>
      <p className="text-lg text-lightBrown mb-8">
        Comparte tus fotos y videos de este hermoso día
      </p>
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-md flex flex-col items-center">
        <img src={qrImage} alt="QR Code" className="w-64 h-64 mb-4" />
        <p className="text-md text-lightBrown">Escanea el código QR y sube tus fotos</p>
      </div>
      <a href={albumLink} target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-4 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300">
        Subir Fotos
      </a>
    </div>
  );
};

export default CompartirFotos;
