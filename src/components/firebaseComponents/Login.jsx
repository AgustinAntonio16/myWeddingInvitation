import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(); // Llama a la función para cambiar el estado en Home cuando el login es exitoso
    } catch (e) {
      setError("Error al iniciar sesión: " + e.message);
    }
  };

  return (
    <div className="bg-opacity-70 p-8 rounded-lg text-center font-GreatVibes bg-ivoryWhite">
      <h2 className="text-3xl  text-emeraldGreen mb-4">Iniciar Sesión</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-emeraldGreen text-ivoryWhite rounded-full hover:bg-limeGreen transition duration-300"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Login;
