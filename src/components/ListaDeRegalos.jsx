import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConfig';
import { collection, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import backgroundImage from '../assets/Fondo/background.jpg';

const ListaDeRegalos = () => {
  const [regalos, setRegalos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Modal de confirmación
  const [selectedRegalo, setSelectedRegalo] = useState(null); // Guardar regalo seleccionado

  // Cargar la lista de regalos desde Firestore
  const loadRegalos = async () => {
    const querySnapshot = await getDocs(collection(db, 'ListaDeRegalos'));
    const regalosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRegalos(regalosList);
  };

  useEffect(() => {
    loadRegalos();
  }, []);

  // Función para elegir un regalo con confirmación
  const handleElegirRegalo = async (id, nombreRegalo) => {
    setSelectedRegalo({ id, nombreRegalo }); // Guardar regalo seleccionado
    setShowConfirmModal(true); // Mostrar modal de confirmación
  };

  // Confirmación para reservar el regalo
  const confirmElegirRegalo = async () => {
    const { id, nombreRegalo } = selectedRegalo;
    const regaloRef = doc(db, 'ListaDeRegalos', id);
    const user = auth.currentUser;

    if (user) {
      const invitadoRef = doc(db, 'invitados', user.uid);

      // Actualizar el regalo como reservado y agregarlo al campo "regalo" del invitado
      await updateDoc(regaloRef, { reservado: true });
      await updateDoc(invitadoRef, {
        regalo: arrayUnion(nombreRegalo), // Acumula los regalos seleccionados
      });

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);

      setShowConfirmModal(false); // Cerrar modal de confirmación
      loadRegalos(); // Recargar la lista después de elegir
    }
  };

  return (
    <div className="min-h-screen bg-ivoryWhite py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-GreatVibes text-emeraldGreen mb-8 text-center">Lista de Regalos</h2>
        <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6">
          <p className="text-lg md:text-2xl font-serif text-lightBrown mb-4 text-center">
          Para nosotros, tu presencia es nuestro mejor regalo, pero si de tu corazón nace regalarnos algo, estaremos infinitamente agradecidos. Puedes seleccionar más de uno si lo deseas.
          </p>
          <ul className="list-disc list-inside text-xl md:text-2xl font-serif text-brown space-y-2">
            {regalos.map((regalo) => (
              <li
                key={regalo.id}
                className={`p-2 border-b border-lightBrown ${regalo.reservado ? 'text-gray-400' : ''}`}
              >
                {regalo.nombre}
                {!regalo.reservado && (
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleElegirRegalo(regalo.id, regalo.nombre)}
                      className="px-4 py-2 bg-emeraldGreen text-ivoryWhite text-sm rounded-full hover:bg-limeGreen transition duration-300"
                    >
                      Elegir
                    </button>
                  </div>
                )}
                {regalo.reservado && <span className="ml-4 text-red-500">Reservado</span>}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className="px-4 py-2 bg-emeraldGreen font-GreatVibes text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300"
            >
              Regresar a Inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Modal de agradecimiento */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-GreatVibes text-emeraldGreen">Te lo agradecemos con el alma</h2>
          </div>
        </div>
      )}

      {/* Modal de confirmación */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-serif text-brown mb-4">¿Estás seguro de seleccionar este regalo?</h2>
            <p className="mb-4">Recuerda que puedes seleccionar más de un regalo si lo deseas.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmElegirRegalo}
                className="px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300"
              >
                Sí, estoy seguro
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-red-500 text-ivoryWhite rounded-full hover:bg-red-600 transition duration-300"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaDeRegalos;
