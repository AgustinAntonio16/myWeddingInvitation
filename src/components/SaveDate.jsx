import React from 'react';

const SaveDate = ({ title, start, end, location, description, notifications }) => {
  const handleAddToCalendar = () => {
    const event = {
      title,
      start,
      end,
      location,
      description,
      notifications,  // Array de notificaciones, por ejemplo: [{minutes: 30, method: 'popup'}]
    };

    // Crear la URL para Google Calendar con todos los campos
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}&add=${encodeURIComponent(event.notifications)}&sf=true&output=xml`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <button
      onClick={handleAddToCalendar}
      className="mt-4 px-4 py-2 bg-emeraldGreen font-GreatVibes text-ivoryWhite text-lg md:text-xl rounded-full border-2 border-emeraldGreen hover:bg-limeGreen transition duration-300"
    >
      Agendar fecha
    </button>
  );
};

export default SaveDate;
