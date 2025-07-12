// Airmen.jsx - Displays all airmen cards
import React from 'react';
import { airmen } from '../data/airmen';
import AirmanCard from './AirmanCard';

const Airmen = () => {
  return (
    <section id="airmen" className="bg-[#F1F5F9] py-12 px-4">
      <div className="max-w-4xl mx-auto mb-6 text-center text-[#1E293B]">
        <p className="text-base sm:text-lg leading-relaxed">
          Behind every uniform is a story of sacrifice, ambition, and unwavering
          determination. These exceptional men and women have taken the
          courageous step of raising their right hand, completing the challenges
          of Basic Military Training, and continuing their journey through the
          halls of technical school. As students of Material Management, they
          are mastering the logistics and systems that keep the mission moving —
          skills that require both precision and discipline. <br />
          <br />
          Their presence here is not by chance — it is the result of relentless
          effort, sleepless nights, and a deep-rooted desire to serve something
          greater than themselves. They are not just learning; they are
          preparing to lead, support, and innovate in one of the Air Force’s
          most essential roles. As you scroll through, take a moment to
          celebrate their accomplishments and honor their commitment. These are
          the future leaders of tomorrow’s Air Force — resilient, ready, and
          relentlessly motivated.
        </p>
      </div>

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
