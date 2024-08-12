import React from 'react';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const GenerateGiftList = () => {
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

  const generateGiftList = async () => {
    try {
      const regalosCollection = collection(db, 'ListaDeRegalos');
      for (const regalo of regalos) {
        await addDoc(regalosCollection, {
          nombre: regalo,
          reservado: false, // Inicialmente todos los regalos están disponibles
        });
      }
      alert('Lista de regalos generada exitosamente en Firestore');
    } catch (error) {
      console.error('Error al generar la lista de regalos:', error);
    }
  };

  return (
    <div className="min-h-screen bg-ivoryWhite py-12 flex items-center justify-center">
      <button
        onClick={generateGiftList}
        className="px-8 py-4 bg-emeraldGreen text-white text-lg rounded-lg hover:bg-limeGreen transition duration-300"
      >
        Generar Lista de Regalos en Firestore
      </button>
    </div>
  );
};

export default GenerateGiftList;
