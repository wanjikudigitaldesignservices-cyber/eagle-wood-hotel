import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop" 
          alt="Eagle Wood Hotel Hero" 
          className="w-full h-full object-cover"
        />
        <span className="w-full h-full absolute inset-0 opacity-50 bg-black"></span>
      </div>
      <div className="container relative mx-auto px-4 z-10">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 mx-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl md:text-7xl mb-6">
                Eagle Wood Hotel Nakuru
              </h1>
              <p className="mt-4 text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Where rustic elegance meets modern comfort. Discover what makes us Nakuru's premier destination for business, leisure, and luxury combined.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/booking" className="bg-white text-gray-900 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Book Your Stay <ArrowRight size={20} />
                </Link>
                <Link to="/rooms" className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors block">
                  Explore Facilities
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
