let googleMapsScriptLoaded = false;

const loadGoogleMapsScript = (callback) => {
  if (googleMapsScriptLoaded) {
    callback();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBH19XqT0KNKa5lIW5p1Kz0dYOrX7qG_TE&callback=initMap&libraries=maps,marker&v=beta';
  script.async = true;
  script.defer = true;

  script.onload = () => {
    googleMapsScriptLoaded = true;
    callback();
  };

  document.head.appendChild(script);
};

export default loadGoogleMapsScript;
