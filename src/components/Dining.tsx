import React from 'react';
import { Utensils, Coffee, Wine, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining = () => {
  return (
    <div className="bg-white">
      {/* Dining Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" alt="Restaurant interior" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Culinary Excellence</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience exquisite dining amidst lush greenery or elegant indoor dining with panoramic views.
          </p>
        </div>
      </section>

      <section id="dining" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Taste of Nakuru</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our executive chefs craft each meal to perfection. For special dietary requirements or private dining inquiries, please contact our restaurant team.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-gray-50 group-hover:bg-gray-900 transition-colors p-4 rounded-full h-fit shadow-sm">
                    <Utensils className="text-gray-900 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Signature Dishes</h4>
                    <p className="text-gray-600">Char-grilled goat meat platter with kachumbari and roast potatoes. Fresh lake fish, wet-fried or dry, served with ugali and creamed spinach.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-gray-50 group-hover:bg-gray-900 transition-colors p-4 rounded-full h-fit shadow-sm">
                    <Coffee className="text-gray-900 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Breakfast & Cafe</h4>
                    <p className="text-gray-600">Full breakfast options included. Enjoy freshly brewed local coffee and pastries in our morning cafe setting.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 bg-gray-50 group-hover:bg-gray-900 transition-colors p-4 rounded-full h-fit shadow-sm">
                    <Wine className="text-gray-900 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Dinner Buffet</h4>
                    <p className="text-gray-600">A wide array of international and local delicacies curated by our executive chef, perfect for large events and gala dinners.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                alt="Restaurant Dining" 
                className="rounded-2xl h-64 object-cover w-full shadow-lg hover:opacity-90 transition-opacity"
              />
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Signature Dish" 
                className="rounded-2xl h-64 object-cover w-full mt-8 shadow-lg hover:opacity-90 transition-opacity"
              />
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
                alt="Fine Dining" 
                className="rounded-2xl h-64 object-cover w-full col-span-2 shadow-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Clock className="mx-auto mb-4 text-gray-300" size={40} />
          <h2 className="text-3xl font-serif mb-4">Open Daily</h2>
          <p className="text-gray-300 mb-8 text-lg">Restaurant: 6:30 AM - 10:30 PM | Bar: 12:00 PM - Late</p>
          <Link to="/booking" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dining;
