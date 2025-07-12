// src/components/Home.jsx
import React from 'react';
import Particle from './Particle';
import ImageCarousel from './ImageCarousel';
import { instructors } from '../data/instructors';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-[#00308F] text-white min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Particle />
        </div>

        <div className="relative z-10 max-w-6xl w-full text-center space-y-6">
          <ImageCarousel />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Welcome to Our Military Class
          </h1>
          <p className="text-lg sm:text-xl px-2 sm:px-6">
            United in strength. Bound by service. We are the Airmen of Class
            2025. This platform helps us stay connected beyond graduation.
          </p>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-white py-16 px-6 text-center text-[#00308F]">
        <h2 className="text-3xl font-bold mb-10">Meet Our Instructors</h2>
        <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {instructors.map((inst) => (
            <div
              key={inst.id}
              className="bg-[#F0F4FA] p-6 rounded-xl shadow-lg"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{inst.name}</h3>
              <p className="text-sm italic text-gray-600">{inst.role}</p>
              <p className="mt-4 text-sm">{inst.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F4D] text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h4 className="text-lg font-semibold mb-2">
            Material Management Class 25043
          </h4>
          <p className="text-sm">
            Developed with honor and pride by the Airmen of Class 2025. United
            in logistics. Ready for any mission.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
