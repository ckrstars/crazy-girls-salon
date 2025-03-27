import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair mb-6">
            Discover True Relaxation
          </h1>
          <p className="text-xl md:text-2xl font-lora mb-8 max-w-2xl mx-auto">
            Experience luxury wellness and rejuvenation at its finest
          </p>
          <button className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
            Book Your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;