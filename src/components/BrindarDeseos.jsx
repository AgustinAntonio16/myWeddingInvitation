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
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el pop-up
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

      setShowPopup(true); // Mostrar el pop-up

      setTimeout(() => {
        setShowPopup(false); // Ocultar el pop-up
        navigate('/'); // Redirigir al inicio después de 2 segundos
      }, 2000);
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
          className="w-full px-4 py-2 border rounded-lg mb-4 text-xl"
        ></textarea>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleEnviarDeseo}
          className="w-full px-4 py-2 bg-emeraldGreen text-ivoryWhite text-2xl rounded-full hover:bg-limeGreen transition duration-300 mb-4"
        >
          Enviar Deseo
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-2 bg-emeraldGreen text-white text-2xl rounded-full hover:bg-brownLight transition duration-300"
        >
          Volver
        </button>
      </div>

      {/* Pop-up que aparece después de enviar un deseo */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl text-emeraldGreen mb-4">¡Gracias por tus buenos deseos!</h3>
            <p>Serás redirigido en breve...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrindarDeseos;


