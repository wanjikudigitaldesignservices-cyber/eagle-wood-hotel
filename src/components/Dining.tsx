import React from 'react';
import { Utensils, Coffee, Wine } from 'lucide-react';

const Dining = () => {
  return (
    <section id="dining" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Exquisite Dining Experience</h2>
            <p className="text-lg text-gray-600 mb-8">
              Al fresco dining amidst lush greenery or elegant indoor dining with panoramic views. For special dietary requirements or private dining inquiries, please contact our restaurant team.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 p-3 rounded-full h-fit">
                  <Utensils className="text-gray-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Signature Dishes</h4>
                  <p className="text-gray-600">Char-grilled goat meat platter with kachumbari and roast potatoes. Fresh lake fish, wet-fried or dry, served with ugali and creamed spinach.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 p-3 rounded-full h-fit">
                  <Coffee className="text-gray-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Breakfast & Cafe</h4>
                  <p className="text-gray-600">Full breakfast options included. Enjoy freshly brewed local coffee and pastries in our morning cafe setting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-gray-100 p-3 rounded-full h-fit">
                  <Wine className="text-gray-900" size={24} />
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
              className="rounded-2xl h-64 object-cover w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
              alt="Signature Dish" 
              className="rounded-2xl h-64 object-cover w-full mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
