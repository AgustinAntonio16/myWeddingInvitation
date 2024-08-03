import React, { useEffect, useRef } from 'react';

const MyMap = ({ scriptUrl, center, zoom, mapId, markerPosition, markerTitle }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Función para inicializar el mapa
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: zoom,
        center: center,
        mapId: mapId,
      });

      new window.google.maps.Marker({
        position: markerPosition,
        map: map,
        title: markerTitle,
      });
    };

    // Cargar el script de Google Maps
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    // Limpiar scripts anteriores si el URL cambia
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    loadScript(scriptUrl);
  }, [scriptUrl, center, zoom, mapId, markerPosition, markerTitle]);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default MyMap;
