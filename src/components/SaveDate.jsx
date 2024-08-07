import React from 'react';

const SaveDate = ({ title, start, end }) => {
  const handleAddToCalendar = () => {
    const event = {
      title,
      start,
      end,
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&sf=true&output=xml`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <button
      onClick={handleAddToCalendar}
      className="mt-4 px-4 py-2 bg-emeraldGreen font-GreatVibes text-ivoryWhite text-lg md:text-xl rounded-full border-2 border-emeraldGreen hover:bg-limeGreen transition duration-300"
    >
      Guardar fecha
    </button>
  );
};

export default SaveDate;
