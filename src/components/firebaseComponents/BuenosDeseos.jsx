import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BuenosDeseos = () => {
  const [deseos, setDeseos] = useState([]);

  // Cargar los deseos desde Firestore
  const loadDeseos = async () => {
    const querySnapshot = await getDocs(collection(db, 'BuenosDeseos'));
    const deseosList = querySnapshot.docs.map(doc => doc.data());
    setDeseos(deseosList);
  };

  useEffect(() => {
    loadDeseos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="min-h-screen bg-ivoryWhite py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8 text-center">Buenos Deseos</h2>
        {deseos.length > 0 ? (
          <Slider {...settings}>
            {deseos.map((deseo, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
                <p className="text-lg md:text-xl italic font-serif text-lightBrown mb-4">"{deseo.mensaje}"</p>
                <p className="text-lg md:text-xl font-semibold text-brown">- {deseo.nombre}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-lg text-center">No hay deseos aún. Sé el primero en dejar uno.</p>
        )}
        <div className="mt-8 text-center">
          <Link 
            to="/brindar-deseos" 
            className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
          >
            Bríndanos tus buenos deseos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuenosDeseos;
