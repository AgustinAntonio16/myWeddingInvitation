import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Foto1 from "../assets/Retratos/1.jpg";
import Foto2 from "../assets/Retratos/2.jpg";
import Foto3 from "../assets/Retratos/3.jpg";
import Foto4 from "../assets/Retratos/4.jpg";
import Foto5 from "../assets/Retratos/5.jpg";
import Foto6 from "../assets/Retratos/6.jpg";
import Foto7 from "../assets/Retratos/7.jpg";
import Foto8 from "../assets/Retratos/8.jpg";
import Foto9 from "../assets/Retratos/9.jpg";
import Foto10 from "../assets/Retratos/10.jpg";
import LottieAnimation from './Animations/LottieAnimation';
import animationData3 from '../assets/animations/camara.json';

const Retratos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
    Foto7,
    Foto8,
    Foto9,
    Foto10,
    // Agrega más imágenes según sea necesario
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-4xl font-GreatVibes text-emeraldGreen mb-4 text-center">Retratos de Nuestro Amor</h1>
      <div className="mb-12 flex flex-col items-center justify-center">
            <LottieAnimation
              animationData={animationData3}
              width={100}
              height={100}
              startFrame={50}
              endFrame={150}
            />
          </div>
      <p className="text-2xl font-DancingScript text-lightBrown mb-8 text-center">
        Un minuto, un segundo, un instante que queda en la eternidad
      </p>
      <div className="w-full md:w-11/12 lg:w-10/12">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img src={image} alt={`Retrato ${index + 1}`} className="w-full rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Retratos;
