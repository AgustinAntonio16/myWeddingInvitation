import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConfig';
import { collection, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore';
// Importa la imagen de fondo
import backgroundImage from '../assets/Fondo/background.jpg';

const ListaDeRegalos = () => {
  const [regalos, setRegalos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Cargar la lista de regalos desde Firestore
  const loadRegalos = async () => {
    const querySnapshot = await getDocs(collection(db, 'ListaDeRegalos'));
    const regalosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRegalos(regalosList);
  };

  useEffect(() => {
    loadRegalos();
  }, []);

  // Función para reservar un regalo
  const handleReservarRegalo = async (id, nombreRegalo) => {
    const regaloRef = doc(db, 'ListaDeRegalos', id);
    const user = auth.currentUser;

    if (user) {
      const invitadoRef = doc(db, 'invitados', user.uid);

      // Actualizar el regalo como reservado y agregarlo al campo "regalo" del invitado
      await updateDoc(regaloRef, { reservado: true });
      await updateDoc(invitadoRef, {
        regalo: arrayUnion(nombreRegalo), // Acumula los regalos seleccionados
      });

      // Mostrar el modal de agradecimiento
      setShowModal(true);

      // Ocultar el modal después de 3 segundos
      setTimeout(() => {
        setShowModal(false);
      }, 3000);

      loadRegalos(); // Recargar la lista después de reservar
    }
  };

  return (
    <div className="min-h-screen bg-ivoryWhite py-12 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-GreatVibes text-emeraldGreen mb-8 text-center">Lista de Regalos</h2>
        <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6">
          <p className="text-lg md:text-2xl font-serif text-lightBrown mb-4 text-center">
            Para nosotros tu presencia es nuestro mejor regalo, pero si de tu corazón nace regalarnos algo estaremos infinitamente agradecidos.
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl font-serif text-brown space-y-2">
            {regalos.map((regalo) => (
              <li
                key={regalo.id}
                className={`p-2 border-b border-lightBrown ${regalo.reservado ? 'text-gray-400' : ''}`}
              >
                {regalo.nombre}
                {!regalo.reservado && (
                  <button
                    onClick={() => handleReservarRegalo(regalo.id, regalo.nombre)}
                    className="ml-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite text-sm rounded-full hover:bg-limeGreen transition duration-300"
                  >
                    Reservar
                  </button>
                )}
                {regalo.reservado && <span className="ml-4 text-red-500">Reservado</span>}
              </li>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-GreatVibes text-emeraldGreen">Te lo agradecemos con el alma</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaDeRegalos;
