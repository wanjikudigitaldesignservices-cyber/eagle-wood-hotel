import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to provide a peaceful getaway in Nakuru, where guests can disconnect from the hustle of everyday life and reconnect with nature, comfort, and exceptional service. We believe every stay should leave our guests refreshed, inspired, and eager to return.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rustic Elegance</h3>
            <p className="text-gray-600">
              Nestled along the scenic Nakuru-Nairobi highway, we blend traditional Kenyan hospitality with contemporary luxury.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Journey</h3>
            <p className="text-gray-600">
              Eagle Wood stands as a testament to what passionate dedication to hospitality can achieve. We continue to evolve, always seeking new ways to delight our guests.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-gray-600">
              Committed to supporting and uplifting our local community while providing world-class facilities and comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
