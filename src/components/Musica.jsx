import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';



const Musica = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [playlist, setPlaylist] = useState([]);

  // Función para agregar la canción a Firestore
  const handleSendSong = async () => {
    try {
      await addDoc(collection(db, 'Playlist'), {
        song: song,
        artist: artist,
      });
      setSong('');
      setArtist('');
      loadPlaylist(); // Recargar la lista después de agregar
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Función para cargar la playlist desde Firestore
  const loadPlaylist = async () => {
    const querySnapshot = await getDocs(collection(db, 'Playlist'));
    const songs = querySnapshot.docs.map(doc => doc.data());
    setPlaylist(songs);
  };

  useEffect(() => {
    loadPlaylist();
  }, []);

  return (
    <div className="min-h-screen font-GreatVibes bg-lightIvory py-12 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-70 container mx-auto px-4 text-center font-GreatVibes">
        <h2 className="text-5xl text-emeraldGreen mb-8">Música</h2>
        <p className="text-2xl md:text-2xl text-lightBrown mb-8">
          ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
        </p>
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Nombre de la canción"
          className="w-full md:w-1/2 px-4 py-2 border rounded-full mb-4 text-2xl"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artista"
          className="w-full md:w-1/2 px-4 py-2 border rounded-full mb-4 text-2xl"
        />
        <button
          onClick={handleSendSong}
          className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-2xl rounded-full hover:bg-limeGreen transition duration-300"
        >
          Enviar
        </button>
        <div className="mt-8">
          <h3 className="text-4xl font-GreatVibes text-emeraldGreen mb-4">Playlist Actual</h3>
          <ul className="list-disc list-inside text-lg font-serif text-lightBrown text-xl">
            {playlist.map((item, index) => (
              <li key={index}>
                {item.song} - {item.artist}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <a 
            href="https://open.spotify.com/user/ivqnfxsc4qi1eiogzyl974amf/playlist/36K0rU3nS2BAVW6VpPPYYu?si=sLH0jxrEQuOsEeEc-86IwQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-2xl rounded-full hover:bg-limeGreen transition duration-300"
          >
            Agregar canción a Spotify
          </a>
        </div>
        <div className="mt-8">
          <Link 
            to="/" 
            className="px-4 py-2 bg-emeraldGreen text-white text-2xl rounded-full hover:bg-brownLight transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Musica;
