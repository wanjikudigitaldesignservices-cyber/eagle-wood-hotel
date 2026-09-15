import React from 'react';
import { Leaf, Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-cream">
      {/* About Hero */}
      <section className="relative pt-40 pb-32 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel exterior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Discover<br/>Eagle Wood</h1>
          <div className="w-16 h-[1px] bg-gold-500 mb-10"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Our mission is to provide a peaceful getaway in Nakuru, where guests can disconnect from the hustle of everyday life and reconnect with nature, comfort, and exceptional service.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section id="about" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                <Leaf className="text-gold-500 group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Rustic Elegance</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Nestled along the scenic Nakuru-Nairobi highway, we blend traditional Kenyan hospitality with contemporary luxury.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                <Heart className="text-gold-500 group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Our Journey</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Eagle Wood stands as a testament to what passionate dedication to hospitality can achieve. We continue to evolve, always seeking new ways to delight our guests.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-500 transition-colors duration-500">
                <Users className="text-gold-500 group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Community First</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Committed to supporting and uplifting our local community while providing world-class facilities and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Immerse Yourself</span>
            <h2 className="text-4xl font-serif text-charcoal mb-4">A Visual Journey</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            <div className="overflow-hidden h-64"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" /></div>
            <div className="overflow-hidden h-64"><img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" /></div>
            <div className="overflow-hidden h-64"><img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" /></div>
            <div className="overflow-hidden h-64"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer" /></div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-32 bg-charcoal text-white relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gold-500"></div>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
            <div className="flex justify-center gap-2 mb-10">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="text-gold-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-3xl md:text-4xl font-serif italic mb-12 leading-relaxed text-gray-200">
              "We believe every stay should leave our guests refreshed, inspired, and eager to return. Our dedicated team works tirelessly to ensure every moment at Eagle Wood exceeds your expectations."
            </p>
            <p className="text-sm uppercase tracking-[0.2em] font-medium text-gold-500">The Eagle Wood Management</p>
         </div>
      </section>
    </div>
  );
};

export default About;
