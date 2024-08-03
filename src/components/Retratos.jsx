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

const Retratos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-ivoryWhite p-8">
      <h1 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Retratos de Nuestro Amor</h1>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Retrato ${index + 1}`} className="w-full rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Retratos;
