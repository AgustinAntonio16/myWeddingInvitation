import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { FaMusic, FaPause } from 'react-icons/fa';
import LottieAnimation from './Animations/LottieAnimation';
import animationData from '../assets/animations/corazon.json';
import song from '../assets/music/loveYouStill.mp3';
import Cover from './Cover';
import Countdown from './Countdown';
import CeremonyAndReception from './CeremonyAndReception';
import Retratos from './Retratos';
import Invitacion from './Invitacion';
import Regalos from './Regalos';
import Fiesta from './Fiesta';
import CompartirFotos from './CompartirFotos';
import BuenosDeseos from './firebaseComponents/BuenosDeseos';
import Footer from './Footer';
import Login from './firebaseComponents/Login';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [user, setUser] = useState(null);
  const [play, { stop }] = useSound(song, { loop: true });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        play();
        setIsPlaying(true);
      }
    });

    // Detener la música al desmontar el componente
    return () => {
      stop();
      setIsPlaying(false);
    };
  }, [play, stop]);

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
    className={`relative min-h-screen ${!user ? 'bg-cover bg-center' : 'bg-lightIvory'}`}
      style={!user ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {!user ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <LottieAnimation animationData={animationData} width={150} height={150} />
          </div>
          <Countdown />
          <h1 className="text-4xl md:text-6xl font-bold font-GreatVibes text-emeraldGreen mt-4 text-center">
            Yazmin <span className="text-red-500">♥</span> Agustin
          </h1>
          {/* Muestra el formulario de inicio de sesión */}
          <Login onLoginSuccess={() => setUser(true)} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto p-1">
            <Cover />
            <Invitacion />
            <CeremonyAndReception />
            <Retratos />
            <Fiesta />
            <CompartirFotos />
            <Regalos />
            <BuenosDeseos/>
            <Footer />
          </div>
          <button
            onClick={toggleMusic}
            className="fixed bottom-4 right-4 p-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
          >
            {isPlaying ? <FaPause /> : <FaMusic />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
