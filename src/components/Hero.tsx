import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute top-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
          alt="Eagle Wood Hotel Hero" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <span className="w-full h-full absolute inset-0 bg-charcoal/40 mix-blend-multiply"></span>
        <span className="w-full h-full absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/80"></span>
      </div>
      <div className="container relative mx-auto px-4 z-10 mt-16">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 mx-auto text-center">
            <div className="flex flex-col items-center">
              <span className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Welcome to</span>
              <h1 className="text-white font-serif text-6xl md:text-8xl mb-8 leading-tight">
                Eagle Wood <br/> Hotel
              </h1>
              <div className="w-24 h-[1px] bg-gold-500 mb-8"></div>
              <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Where rustic elegance meets modern comfort. Discover Nakuru's premier destination for business, leisure, and luxury combined.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/booking" className="bg-gold-500 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors duration-300">
                  Reserve a Room
                </Link>
                <Link to="/rooms" className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-charcoal transition-colors duration-300">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
