import React, { useState, useRef } from 'react';
import useSound from 'use-sound';
import { FaMusic, FaPause } from 'react-icons/fa';
import LottieAnimation from './Animations/LottieAnimation';
import animationData from '../assets/animations/corazon.json';
import Cover from './Cover';
import Countdown from './Countdown';
import CeremonyAndReception from './CeremonyAndReception';
import song from '../assets/music/loveYouStill.mp3';
import Retratos from './Retratos';

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
    <div className="relative min-h-screen">
      {showWelcome ? (
         <div className="fixed inset-0 flex flex-col items-center justify-center bg-ivoryWhite z-50">
         <div className="flex flex-col items-center">
           <LottieAnimation animationData={animationData} width={400} height={400} />
         </div>
         <h1 className="text-5xl font-GreatVibes font-extralight text-emeraldGreen mt-4 text-center">
           ¡Bienvenidos! a la invitación de nuestra boda!
         </h1>
         <button
           onClick={handleEnter}
           className="mt-8 px-6 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
         >
           Entrar
         </button>
       </div>
      ) : (
        <div>
          <Cover />
          <Countdown />
          <CeremonyAndReception />
          <Retratos/>
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
