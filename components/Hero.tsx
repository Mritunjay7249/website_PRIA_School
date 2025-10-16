
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-center text-black" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Arima Madurai', cursive" }}>
          PRIA SCHOOL
        </h1>
        <p className="text-lg md:text-xl" style={{ fontFamily: "'Oleo Script', cursive" }}>
          PATALGANGA &amp; RASAYANI INDUSTRIES’ ASSOCIATION (PRIA) SCHOOL
        </p>
      </div>
    </section>
  );
};

export default Hero;
