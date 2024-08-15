import React, { useState, useEffect } from 'react';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

const BrindarDeseos = () => {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'invitados', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNombre(docSnap.data().nombre);
        } else {
          setNombre('Anónimo');
        }
      }
    };

    fetchUserName();
  }, []);

  const handleEnviarDeseo = async () => {
    if (mensaje.trim() === '') {
      setError('El mensaje no puede estar vacío.');
      return;
    }

    try {
      await addDoc(collection(db, 'BuenosDeseos'), {
        nombre,
        mensaje,
      });

      alert('Gracias por tus buenos deseos.');
      navigate('/buenos-deseos'); // Redirigir al carrusel después de enviar el deseo
    } catch (e) {
      setError('Hubo un error al enviar tus deseos. Intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-lightIvory py-12 flex flex-col items-center justify-center font-GreatVibes bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md p-8 bg-white bg-opacity-50 p-8 rounded-lg shadow-md">
        <h2 className="text-4xl text-emeraldGreen mb-8 text-center">Bríndanos tus buenos deseos</h2>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe aquí tus buenos deseos..."
          rows="5"
          className="w-full px-4 py-2 border rounded-lg mb-4"
        ></textarea>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleEnviarDeseo}
          className="w-full px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300 mb-4"
        >
          Enviar Deseo
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-2 bg-brownDark text-lightBrown text-lg rounded-full hover:bg-brownLight transition duration-300"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default BrindarDeseos;
