import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { db } from '../../firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const ConfirmarAsistencia = () => {
  const [asistencia, setAsistencia] = useState('Asistiré :)');
  const [pasesConfirmados, setPasesConfirmados] = useState(1);
  const [numeroPases, setNumeroPases] = useState(1); // Estado para manejar el número de pases
  const [invitado, setInvitado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [confirmacionRealizada, setConfirmacionRealizada] = useState(false);
  const location = useLocation();
  const { eventTitle, isCeremony } = location.state;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const invitadoDoc = await getDoc(doc(db, "invitados", user.uid));
        if (invitadoDoc.exists()) {
          const invitadoData = invitadoDoc.data();
          setInvitado(invitadoData);
          setNombre(invitadoData.nombre);
          setNumeroPases(invitadoData.numeroPases); // Cargar el número de pases desde Firestore
          setConfirmacionRealizada(isCeremony ? invitadoData.confirmacionRealizadaCeremonia : invitadoData.confirmacionRealizadaRecepcion);
          setPasesConfirmados(invitadoData.numeroPasesConfirmados || 1); // Establecer el número de pases confirmados, si ya se ha guardado
        }
      }
    });

    return () => unsubscribe();
  }, [isCeremony]);

  const handleConfirm = async () => {
    if (auth.currentUser && invitado) {
      const userDocRef = doc(db, 'invitados', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        [isCeremony ? 'confirmacionCeremonia' : 'confirmacionRecepcion']: asistencia === 'Asistiré :)',
        [isCeremony ? 'confirmacionRealizadaCeremonia' : 'confirmacionRealizadaRecepcion']: true,
        [isCeremony ? 'pasesConfirmadosCeremonia' : 'pasesConfirmadosRecepcion']: pasesConfirmados, // Guardar el número de pases confirmados
      });
      setConfirmacionRealizada(true);
    }
  };

  return (
    <div className="min-h-screen bg-lightIvory py-12 flex flex-col items-center justify-center font-GreatVibes">
      <div className="w-full max-w-md p-8 bg-lightIvory rounded-lg shadow-md">
        <h2 className="text-4xl text-emeraldGreen mb-8 text-center">{eventTitle}</h2>

        {confirmacionRealizada ? (
          <div className="text-center text-emeraldGreen text-2xl">
            {asistencia === 'Asistiré :)' ? (
              <p>Te esperamos con mucho gusto el 14 de diciembre</p>
            ) : (
              <div>
                <p>No te preocupes, entendemos y sabemos que nos envías tus mejores deseos.</p>
                <button 
                  onClick={() => setConfirmacionRealizada(false)} 
                  className="mt-4 px-4 py-2 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300"
                >
                  Cambiar confirmación
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <p className="text-center text-2xl mb-4">Querido {nombre}, nos encantaría que nos acompañaras.</p>
            <div className="mb-4 flex justify-center space-x-4">
              <button
                onClick={() => setAsistencia('Asistiré :)')}
                className={`flex items-center px-4 py-2 space-x-2 ${asistencia === 'Asistiré :)' ? 'bg-emeraldGreen text-ivoryWhite' : 'bg-lightBrown text-emeraldGreen'} rounded-full transition duration-300`}
              >
                <FaCheckCircle />
                <span>Asistiré :)</span>
              </button>
              <button
                onClick={() => setAsistencia('No me es posible :(')}
                className={`flex items-center px-4 py-2 space-x-2 ${asistencia === 'No me es posible :(' ? 'bg-emeraldGreen text-ivoryWhite' : 'bg-lightBrown text-emeraldGreen'} rounded-full transition duration-300`}
              >
                <FaTimesCircle />
                <span>No me es posible :(</span>
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">Número de Pases:</label>
              <select
                value={pasesConfirmados}
                onChange={(e) => setPasesConfirmados(parseInt(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg"
              >
                {Array.from({ length: numeroPases }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleConfirm}
              className="w-full px-4 py-2 bg-emeraldGreen text-ivoryWhite text-lg rounded-full hover:bg-limeGreen transition duration-300 mb-4"
            >
              Confirmar Asistencia
            </button>
          </>
        )}

        <div className="text-center">
          <Link 
            to="/" 
            className="px-4 py-2 bg-brownDark text-lightBrown text-lg rounded-full hover:bg-brownLight transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmarAsistencia;
