import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent', // So your Tailwind blue shows through
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#ffffff' }, // Particle dots
        links: {
          color: '#72A0C1', // Link lines between particles
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          outModes: { default: 'bounce' },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: 0.4 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="w-full h-full"
      particlesLoaded={(container) =>
        console.log('Particles loaded', container)
      }
      options={options}
    />
  );
};

export default Particle;
