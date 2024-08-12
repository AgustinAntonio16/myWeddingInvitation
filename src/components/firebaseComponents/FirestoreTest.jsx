import React, { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FirestoreTest = () => {
  const [data, setData] = useState("");
  const [retrievedData, setRetrievedData] = useState("");

  const handleWrite = async () => {
    try {
      await setDoc(doc(db, "testCollection", "testDocument"), {
        data: data,
      });
      alert("Documento escrito con éxito");
    } catch (e) {
      console.error("Error escribiendo el documento: ", e);
    }
  };

  const handleRead = async () => {
    try {
      const docRef = doc(db, "testCollection", "testDocument");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRetrievedData(docSnap.data().data);
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error leyendo el documento: ", e);
    }
  };

  return (
    <div className="p-4 bg-ivoryWhite rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Firestore Test</h2>
      <div className="mb-4">
        <label className="block text-lg mb-2">Escribe algo en Firestore:</label>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>
      <button
        onClick={handleWrite}
        className="px-4 py-2 bg-emeraldGreen text-white rounded-lg hover:bg-limeGreen transition duration-300"
      >
        Escribir en Firestore
      </button>

      <div className="mt-8">
        <button
          onClick={handleRead}
          className="px-4 py-2 bg-brown text-white rounded-lg hover:bg-lightBrown transition duration-300"
        >
          Leer de Firestore
        </button>
        <div className="mt-4">
          <p className="text-lg">Dato recuperado:</p>
          <p className="text-xl font-semibold">{retrievedData}</p>
        </div>
      </div>
    </div>
  );
};

export default FirestoreTest;
