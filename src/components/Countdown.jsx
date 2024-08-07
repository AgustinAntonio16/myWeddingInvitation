import React, { useState, useEffect } from 'react';
import { EVENT_DATE } from '../config';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +EVENT_DATE - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-ivoryWhite border-b-4 py-4 text-center">
      <h2 className="text-5xl font-GreatVibes text-lightBrown">Falta</h2>
      {timeLeft.days !== undefined ? (
        <div className="flex justify-center mt-4 space-x-8 text-emeraldGreen">
          <div className="text-center">
            <span className="block text-6xl font-DancingScript">{timeLeft.days}</span>
            <span className="block text-lg text-lightBrown font-Roboto">Días</span>
          </div>
          <div className="text-center">
            <span className="block text-6xl font-DancingScript">{timeLeft.hours}</span>
            <span className="block text-lg text-lightBrown font-Roboto">Hs</span>
          </div>
          <div className="text-center">
            <span className="block text-6xl font-DancingScript">{timeLeft.minutes}</span>
            <span className="block text-lg text-lightBrown font-Roboto">Min</span>
          </div>
        </div>
      ) : (
        <span className="text-2xl font-Roboto text-emeraldGreen">¡El evento ya ha comenzado!</span>
      )}
    </div>
  );
};

export default Countdown;
