import React from 'react';
import { Utensils, Coffee, Wine, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining = () => {
  return (
    <div className="bg-cream">
      {/* Dining Hero */}
      <section className="relative pt-40 pb-32 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" alt="Restaurant interior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Fine Dining</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Culinary<br/>Excellence</h1>
          <div className="w-16 h-[1px] bg-gold-500 mb-10"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Experience exquisite dining amidst lush greenery or elegant indoor dining with panoramic views.
          </p>
        </div>
      </section>

      <section id="dining" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">The Menu</span>
              <h2 className="text-4xl font-serif text-charcoal mb-8">A Taste of Nakuru</h2>
              <p className="text-lg text-gray-500 mb-12 font-light leading-relaxed">
                Our executive chefs craft each meal to perfection. For special dietary requirements or private dining inquiries, please contact our restaurant team.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="mt-1 w-14 h-14 border border-gold-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-500">
                    <Utensils className="text-gold-500 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-charcoal mb-2">Signature Dishes</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Char-grilled goat meat platter with kachumbari and roast potatoes. Fresh lake fish, wet-fried or dry, served with ugali and creamed spinach.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="mt-1 w-14 h-14 border border-gold-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-500">
                    <Coffee className="text-gold-500 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-charcoal mb-2">Breakfast & Cafe</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Full breakfast options included. Enjoy freshly brewed local coffee and pastries in our morning cafe setting.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="mt-1 w-14 h-14 border border-gold-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-500">
                    <Wine className="text-gold-500 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-charcoal mb-2">Dinner Buffet</h4>
                    <p className="text-gray-500 font-light leading-relaxed">A wide array of international and local delicacies curated by our executive chef, perfect for large events and gala dinners.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden h-72">
                <img 
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                  alt="Restaurant Dining" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden h-72 mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Signature Dish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden h-72 col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fine Dining" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-32 bg-charcoal text-white text-center relative border-t border-charcoal">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gold-500"></div>
        <div className="max-w-3xl mx-auto px-4 pt-8">
          <Clock className="mx-auto mb-8 text-gold-400" size={40} strokeWidth={1} />
          <h2 className="text-4xl font-serif mb-6">Open Daily</h2>
          <div className="w-16 h-[1px] bg-gold-500 mb-8 mx-auto"></div>
          <p className="text-gray-300 mb-12 text-lg font-light tracking-wide">Restaurant: 6:30 AM - 10:30 PM <span className="text-gold-500 mx-4">|</span> Bar: 12:00 PM - Late</p>
          <Link to="/booking" className="inline-block border border-gold-500 text-gold-500 px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gold-500 hover:text-charcoal transition-colors duration-300">
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dining;
