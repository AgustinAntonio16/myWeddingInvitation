import React, { useState } from 'react';
import useSound from 'use-sound';
import { FaMusic, FaPause } from 'react-icons/fa';
import LottieAnimation from './Animations/LottieAnimation';
import animationData from '../assets/animations/corazon.json';
import Cover from './Cover';
import Countdown from './Countdown';
import CeremonyAndReception from './CeremonyAndReception';
import song from '../assets/music/loveYouStill.mp3';
import Retratos from './Retratos';
import Invitacion from './Invitacion';
import Regalos from './Regalos';
import Fiesta from './Fiesta';
import CompartirFotos from './CompartirFotos';
import Footer from './Footer';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop, sound }] = useSound(song, { loop: true });

  const handleEnter = () => {
    setShowWelcome(false);
    if (sound) {
      sound.play();
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-ivoryWhite">
      {showWelcome ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-ivoryWhite z-50">
          <div className="flex flex-col items-center">
            <LottieAnimation animationData={animationData} width={300} height={300} />
          </div>
          <Countdown/>
          <h1 className="text-4xl md:text-6xl font-bold font-GreatVibes text-emeraldGreen mt-4 text-center">
            Yazmin <span className="text-red-500">♥</span> Agustin
          </h1>
          <p className="mt-4 text-md md:text-lg text-center font-serif text-lightBrown">
            La música de fondo es parte de la experiencia
          </p>
          <button
            onClick={handleEnter}
            className="mt-8 px-8 py-4 bg-brownDark font-GreatVibes text-lightBrown text-lg md:text-xl rounded-full border-2 border-emeraldGreen hover:bg-brownLight transition duration-300"
          >
            INGRESAR
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto px-4">
            <Cover />
            <Invitacion/>
            <CeremonyAndReception />
            <Retratos />
            <Fiesta/>
            <Regalos/>
            <CompartirFotos/>
            <Footer/>
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
