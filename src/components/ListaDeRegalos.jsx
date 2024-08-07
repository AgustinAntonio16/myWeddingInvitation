import React from 'react';
import { Link } from 'react-router-dom';

const ListaDeRegalos = () => {
  const regalos = [
    "Cafetera",
    "Batería de cocina o sartenes",
    "Aspiradora de mano",
    "Aspiradora grande",
    "Plancha",
    "Horno de microondas",
    "Juego de toallas",
    "Juego de sábanas",
    "Colcha Queen size",
    "Set",
    "Juego de almohadas",
    "Fundas para almohadas",
    "Espejo de baño",
    "Abrelatas",
    "Juego de relojes",
    "Heladera de aire",
    "Ventilador",
    "Set de cuchillos pro",
    "Espejo de baño",
    "Waflera",
    "Juego de cubiertos",
    "Floreros",
    "Frasada",
    "Lámpara de noche",
    "Cojines objetos de cama decoración",
    "Porta retrato",
    "Videojuegos PS4",
    "Colador de huevos",
    "Olla express (presión)",
    "Platos para cereal",
    "Juego de recipientes para almacenar",
    "Juego de copas",
    "Cobertor",
    "Platos juego",
    "Juego de herramientas básico",
    "Batas de baño",
    "Set de especieros",
    "Tetera",
    "Protector de colchón",
    "Organizador de alacena",
    "Set de utensilios para cocina",
    "Escurridor de acero para fregadero",
    "Set de comales",
    "Set de focos inteligentes",
  ];

  return (
    <div className="min-h-screen bg-ivoryWhite py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8 text-center">Lista de Regalos</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg md:text-2xl font-serif text-lightBrown mb-4 text-center">
            Para nosotros tu presencia es nuestro mejor regalo, pero si de tu corazón nace regalarnos algo estaremos infinitamente agradecidos.
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl font-serif text-brown space-y-2">
            {regalos.map((regalo, index) => (
              <li key={index} className="p-2 border-b border-lightBrown">{regalo}</li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
            >
              Regresar a Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaDeRegalos;
