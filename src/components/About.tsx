import React from 'react';
import { Leaf, Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel exterior" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Discover Eagle Wood</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our mission is to provide a peaceful getaway in Nakuru, where guests can disconnect from the hustle of everyday life and reconnect with nature, comfort, and exceptional service.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gray-50 group-hover:bg-gray-900 transition-colors w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-gray-900 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rustic Elegance</h3>
              <p className="text-gray-600">
                Nestled along the scenic Nakuru-Nairobi highway, we blend traditional Kenyan hospitality with contemporary luxury.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-50 group-hover:bg-gray-900 transition-colors w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-gray-900 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Journey</h3>
              <p className="text-gray-600">
                Eagle Wood stands as a testament to what passionate dedication to hospitality can achieve. We continue to evolve, always seeking new ways to delight our guests.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-50 group-hover:bg-gray-900 transition-colors w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-gray-900 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">
                Committed to supporting and uplifting our local community while providing world-class facilities and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">A Visual Journey</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" alt="Gallery 1" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Gallery 2" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" alt="Gallery 3" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Gallery 4" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 bg-gray-900 text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic mb-8">
              "We believe every stay should leave our guests refreshed, inspired, and eager to return. Our dedicated team works tirelessly to ensure every moment at Eagle Wood exceeds your expectations."
            </p>
            <p className="text-lg font-medium text-gray-300">- The Eagle Wood Management Team</p>
         </div>
      </section>
    </div>
  );
};

export default About;
