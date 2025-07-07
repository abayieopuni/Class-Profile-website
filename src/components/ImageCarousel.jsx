import React, { useEffect, useState } from 'react';

// ✅ Use import.meta.glob to load all images from the folder
const images = Object.values(
  import.meta.glob('../assets/hero-images/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  }),
);

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover transition duration-1000 ease-in-out"
      />
    </div>
  );
};

export default ImageCarousel;
