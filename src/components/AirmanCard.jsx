// AirmanCard.jsx - Individual airman profile card
import React from 'react';

const AirmanCard = ({ airman }) => {
  if (!airman) return null; // Safety check

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center">
      <img
        src={airman.image}
        alt={airman.name}
        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover border-2 border-[#00308F] mb-3"
      />
      <h3 className="text-base sm:text-lg font-semibold text-[#00308F]">
        {airman.name}
      </h3>
      <p className="text-sm text-gray-600">{airman.role}</p>
    </div>
  );
};

export default AirmanCard;
