import React from 'react';
import Particle from './Particle';
import ImageCarousel from './ImageCarousel';

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-[#00308F] text-white min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {/* Particle background - z-0 so it's behind */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Main content - z-10 so it's above */}
      <div className="relative z-10 max-w-6xl w-full text-center space-y-6">
        <ImageCarousel />
        <h1 className="text-3xl sm:text-5xl font-bold">
          Welcome to Our Military Class
        </h1>
        <p className="text-lg sm:text-xl px-2 sm:px-6">
          United in strength. Bound by service. We are the Airmen of Class 2025.
          This platform helps us stay connected beyond graduation.
        </p>
      </div>
    </section>
  );
};

export default Home;
