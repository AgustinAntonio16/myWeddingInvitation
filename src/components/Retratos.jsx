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
import Foto11 from "../assets/Retratos/11.jpg";
import Foto12 from "../assets/Retratos/12.jpg";
import Foto13 from "../assets/Retratos/13.jpg";
import Foto14 from "../assets/Retratos/14.jpg";
import Foto15 from "../assets/Retratos/15.jpg";
import Foto16 from "../assets/Retratos/16.jpg";
import Foto17 from "../assets/Retratos/17.jpg";
import Foto18 from "../assets/Retratos/18.jpg";
import Foto19 from "../assets/Retratos/19.jpg";
import Foto20 from "../assets/Retratos/20.jpg";
import Foto21 from "../assets/Retratos/21.jpg";
import Foto22 from "../assets/Retratos/22.jpg";
import Foto23 from "../assets/Retratos/23.jpg";
import Foto24 from "../assets/Retratos/24.jpg";
import Foto25 from "../assets/Retratos/25.jpg";
import Foto26 from "../assets/Retratos/26.jpg";
import Foto27 from "../assets/Retratos/27.jpg";
import Foto28 from "../assets/Retratos/28.jpg";
import Foto29 from "../assets/Retratos/29.jpg";
import Foto30 from "../assets/Retratos/30.jpg";
import Foto31 from "../assets/Retratos/31.jpg";
import Foto32 from "../assets/Retratos/32.jpg";
import LottieAnimation from './Animations/LottieAnimation';
import animationData3 from '../assets/animations/camara.json';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

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
    Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8,
    Foto9, Foto10, Foto11, Foto12, Foto13, Foto14, Foto15, Foto16,
    Foto17, Foto18, Foto19, Foto20, Foto21, Foto22, Foto23, Foto24,
    Foto25, Foto26, Foto27, Foto28, Foto29, Foto30, Foto31, Foto32
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-8 my-8"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-5xl font-GreatVibes text-emeraldGreen mb-4 text-center">Retratos de Nuestro Amor</h1>
      <div className="mb-12 flex flex-col items-center justify-center">
            <LottieAnimation
              animationData={animationData3}
              width={100}
              height={100}
              startFrame={50}
              endFrame={150}
            />
          </div>
      <p className="text-3xl font-DancingScript text-lightBrown mb-8 text-center">
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
