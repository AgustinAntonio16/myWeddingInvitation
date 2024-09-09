import React, { useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const RegisterGuest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [numPases, setNumPases] = useState(1);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Guardar información en Firestore
      await setDoc(doc(db, "invitados", user.uid), {
        nombre: name,
        confirmacionCeremonia: true,
        confirmacionRealizadaCeremonia: false,
        confirmacionRecepcion: true,
        confirmacionRealizadaRecepcion: false,
        regalo: "",
        numeroPases: numPases,
      });

      alert("Usuario registrado con éxito");
      // Limpiar campos
      setEmail("");
      setPassword("");
      setName("");
      setNumPases(1);
      setError("");
    } catch (e) {
      setError("Error registrando al usuario: " + e.message);
    }
  };

  return (
    <div className="p-4 bg-ivoryWhite rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Registrar Invitado</h2>
      <div className="mb-4">
        <label className="block text-lg mb-2">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2">Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2">Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2">Número de Pases:</label>
        <input
          type="number"
          value={numPases}
          onChange={(e) => setNumPases(e.target.value)}
          min="1"
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleRegister}
        className="px-4 py-2 bg-emeraldGreen text-white rounded-lg hover:bg-limeGreen transition duration-300"
      >
        Registrar Invitado
      </button>
    </div>
  );
};

export default RegisterGuest;
