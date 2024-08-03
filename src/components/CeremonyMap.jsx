import React, { useEffect, useRef } from 'react';
import loadGoogleMapsScript from '../utils/loadGoogleMaps';

const CeremonyMap = () => {
  const mapRef = useRef(null);
  const mapCenter = { lat: 19.68767547607422, lng: -99.05340576171875 };
  const mapZoom = 14;
  const mapId = 'DEMO_MAP_ID';
  const markerPosition = { lat: 19.68767547607422, lng: -99.05340576171875 };
  const markerTitle = 'Parroquia de Santa María';

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: mapZoom,
        center: mapCenter,
        mapId: mapId,
      });

      new window.google.maps.Marker({
        position: markerPosition,
        map: map,
        title: markerTitle,
      });
    };

    loadGoogleMapsScript(initMap);
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default CeremonyMap;
