import React from 'react';
import { BedDouble, Users, Wifi } from 'lucide-react';

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rooms & Rates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfort and elegance in our thoughtfully designed accommodations. Multiple room configurations available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">Standard Room</h3>
                <span className="text-lg font-bold text-gray-900">KES 8,000<span className="text-sm font-normal text-gray-500">/night</span></span>
              </div>
              <p className="text-gray-600 mb-6">Comfortable accommodation perfect for solo travelers or couples.</p>
              
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600"><BedDouble size={18} /> 1 Bed</div>
                <div className="flex items-center gap-2 text-gray-600"><Users size={18} /> 2 Guests</div>
                <div className="flex items-center gap-2 text-gray-600"><Wifi size={18} /> Free Wifi</div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                Book Standard Room
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">Executive Suite</h3>
                <span className="text-lg font-bold text-gray-900">KES 15,000<span className="text-sm font-normal text-gray-500">/night</span></span>
              </div>
              <p className="text-gray-600 mb-6">Spacious and luxurious suite offering premium amenities and panoramic views.</p>
              
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600"><BedDouble size={18} /> 1 King Bed</div>
                <div className="flex items-center gap-2 text-gray-600"><Users size={18} /> 2 Guests</div>
                <div className="flex items-center gap-2 text-gray-600"><Wifi size={18} /> Free Wifi</div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                Book Executive Suite
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Children under 5 stay free. Extra beds available on request at KES 2,000/night. All prices are inclusive of taxes.</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
