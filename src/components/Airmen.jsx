// Airmen.jsx - Displays all airmen cards
import React from 'react';
import { airmen } from '../data/airmen';
import AirmanCard from './AirmanCard';

const Airmen = () => {
  return (
    <section id="airmen" className="bg-[#F1F5F9] py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00308F] mb-8">
        Meet the Airmen
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {airmen.map((airman) => (
          <AirmanCard key={airman.id} airman={airman} />
        ))}
      </div>
    </section>
  );
};

export default Airmen;
