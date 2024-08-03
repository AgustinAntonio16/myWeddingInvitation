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
    <div className="text-2xl text-lightBrown">
      {timeLeft.days !== undefined ? (
        <div className="flex space-x-4">
          <div>
            <span className="block text-4xl">{timeLeft.days}</span>
            <span>Días</span>
          </div>
          <div>
            <span className="block text-4xl">{timeLeft.hours}</span>
            <span>Horas</span>
          </div>
          <div>
            <span className="block text-4xl">{timeLeft.minutes}</span>
            <span>Minutos</span>
          </div>
          <div>
            <span className="block text-4xl">{timeLeft.seconds}</span>
            <span>Segundos</span>
          </div>
        </div>
      ) : (
        <span>El evento ya ha comenzado!</span>
      )}
    </div>
  );
};

export default Countdown;