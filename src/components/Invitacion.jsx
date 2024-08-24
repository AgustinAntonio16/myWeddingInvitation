import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConfig'; // Asegúrate de importar las referencias correctas
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

const Invitacion = () => {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const fetchGuestName = async (uid) => {
      const guestRef = doc(db, 'invitados', uid);
      const guestDoc = await getDoc(guestRef);

      if (guestDoc.exists()) {
        setGuestName(guestDoc.data().nombre);
      } else {
        console.error('No such document!');
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchGuestName(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-cover bg-center p-8 rounded-xl text-center mb-8 mt-4 bg-gradient-to-r from-white via-transparent to-white bg-ivoryWhite"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="flex-1 flex flex-col items-center bg-white bg-opacity-60 p-8 rounded-lg text-4xl md:text-6xl italic font-GreatVibes text-black">
      <span><strong className='text-emeraldGreen'>{guestName}</strong></span>
      <span>Tenemos el honor de invitarte  a nuestra boda</span>
       
      </p>
      <blockquote className=" bg-white bg-opacity-50 p-8 rounded-lg text-3xl md:text-2xl italic font-GreatVibes text-lightBrown mb-4 text-justify">
        "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.
        No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. 
        El amor no se deleita en la maldad sino que se regocija con la verdad. Todo lo disculpa, 
        todo lo cree, todo lo espera, todo lo soporta."
      </blockquote>
      <cite className=" bg-white bg-opacity-85 p-8 rounded-lg text-2xl md:text-xl font-GreatVibes text-lightBrown mb-8 block">Corintios 13:4-7</cite>
      
    </div>
  );
};

export default Invitacion;
