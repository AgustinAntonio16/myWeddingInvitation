import React from 'react';

const CeremonyAndReception = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ivoryWhite p-8">
      <h1 className="text-4xl font-GreatVibes text-emeraldGreen mb-8">Ceremonia y Recepción</h1>
      <div className="mb-12 text-center">
        <h2 className="text-3xl text-lightBrown mb-4">Ceremonia Religiosa</h2>
        <p className="text-xl text-lightBrown mb-2">Iglesia de San Pedro</p>
        <p className="text-lightBrown mb-2">14 de Diciembre, 2024 - 5:00 PM</p>
        <div className="w-full h-64 bg-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2910996721165!2d-122.42067968468085!3d37.7792809797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ddf9b1b87%3A0xa80f6e1f0e2eae5f!2sIglesia%20de%20San%20Pedro!5e0!3m2!1ses!2sus!4v1616341856278!5m2!1ses!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl text-lightBrown mb-4">Recepción</h2>
        <p className="text-xl text-lightBrown mb-2">Salón de Eventos Bella Vista</p>
        <p className="text-lightBrown mb-2">14 de Diciembre, 2024 - 7:00 PM</p>
        <div className="w-full h-64 bg-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2910996721165!2d-122.42067968468085!3d37.7792809797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ddf9b1b87%3A0xa80f6e1f0e2eae5f!2sSalón%20de%20Eventos%20Bella%20Vista!5e0!3m2!1ses!2sus!4v1616341856278!5m2!1ses!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CeremonyAndReception;
