import React, { useEffect, useRef } from 'react';
import loadGoogleMapsScript from '../utils/loadGoogleMaps';

const ReceptionMap = () => {
  const mapRef = useRef(null);
  const mapCenter = { lat: 19.701290130615234, lng: -99.05195617675781 };
  const mapZoom = 14;
  const mapId = 'DEMO_MAP_ID';
  const markerPosition = { lat: 19.701290130615234, lng: -99.05195617675781 };
  const markerTitle = 'Hacienda Azalaga';

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

export default ReceptionMap;
