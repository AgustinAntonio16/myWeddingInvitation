import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Musica = () => {
  const [song, setSong] = useState('');

  const handleSendSong = () => {
    const whatsappURL = `https://wa.me/5524426155?text=Recomiendo%20la%20canción:%20${encodeURIComponent(song)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-lightIvory py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Música</h2>
        <p className="text-lg md:text-xl font-serif text-lightBrown mb-8">
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </p>
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Recomiéndanos una canción"
          className="w-full md:w-1/2 px-4 py-2 border rounded-full mb-4"
        />
        <button
          onClick={handleSendSong}
          className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
        >
          Enviar
        </button>
        <div className="mt-8">
          <Link 
            to="/" 
            className="px-4 py-2 bg-brownDark text-lightBrown text-lg rounded-full hover:bg-brownLight transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Musica;
