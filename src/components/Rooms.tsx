import React from 'react';
import { BedDouble, Users, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <section id="rooms" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gold-500 mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 pt-20">Accommodations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Experience comfort and elegance in our thoughtfully designed suites. Every detail curated for your absolute relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Standard Room */}
          <div className="bg-white border border-gray-200 group">
            <div className="h-80 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Standard Room" />
            </div>
            <div className="p-10 flex flex-col h-[calc(100%-20rem)]">
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                <h3 className="text-3xl font-serif text-charcoal">Standard Room</h3>
                <span className="text-xl font-medium text-gold-500 whitespace-nowrap ml-4">KES 8,000<span className="text-sm text-gray-400 font-light block text-right">/ night</span></span>
              </div>
              <p className="text-gray-500 mb-8 font-light flex-grow leading-relaxed">Comfortable accommodation perfect for solo travelers or couples seeking a serene retreat.</p>
              
              <div className="flex gap-6 mb-10 text-sm font-light uppercase tracking-wide text-gray-500">
                <div className="flex items-center gap-2"><BedDouble size={16} className="text-gold-400" /> 1 Bed</div>
                <div className="flex items-center gap-2"><Users size={16} className="text-gold-400" /> 2 Guests</div>
                <div className="flex items-center gap-2"><Wifi size={16} className="text-gold-400" /> Free Wifi</div>
              </div>
              
              <Link to="/booking" className="block text-center w-full border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                Reserve Room
              </Link>
            </div>
          </div>

          {/* Deluxe Twin Room */}
          <div className="bg-white border border-gray-200 group">
            <div className="h-80 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Deluxe Twin Room" />
            </div>
            <div className="p-10 flex flex-col h-[calc(100%-20rem)]">
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                <h3 className="text-3xl font-serif text-charcoal">Deluxe Twin</h3>
                <span className="text-xl font-medium text-gold-500 whitespace-nowrap ml-4">KES 10,000<span className="text-sm text-gray-400 font-light block text-right">/ night</span></span>
              </div>
              <p className="text-gray-500 mb-8 font-light flex-grow leading-relaxed">Ideal for friends or colleagues featuring two comfortable twin beds and a dedicated workspace.</p>
              
              <div className="flex gap-6 mb-10 text-sm font-light uppercase tracking-wide text-gray-500">
                <div className="flex items-center gap-2"><BedDouble size={16} className="text-gold-400" /> 2 Beds</div>
                <div className="flex items-center gap-2"><Users size={16} className="text-gold-400" /> 2 Guests</div>
                <div className="flex items-center gap-2"><Wifi size={16} className="text-gold-400" /> Free Wifi</div>
              </div>
              
              <Link to="/booking" className="block text-center w-full border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                Reserve Room
              </Link>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="bg-white border border-gray-200 group">
            <div className="h-80 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Executive Suite" />
            </div>
            <div className="p-10 flex flex-col h-[calc(100%-20rem)]">
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                <h3 className="text-3xl font-serif text-charcoal">Executive Suite</h3>
                <span className="text-xl font-medium text-gold-500 whitespace-nowrap ml-4">KES 15,000<span className="text-sm text-gray-400 font-light block text-right">/ night</span></span>
              </div>
              <p className="text-gray-500 mb-8 font-light flex-grow leading-relaxed">Spacious and luxurious suite offering premium amenities, a separate seating area, and panoramic views.</p>
              
              <div className="flex gap-6 mb-10 text-sm font-light uppercase tracking-wide text-gray-500">
                <div className="flex items-center gap-2"><BedDouble size={16} className="text-gold-400" /> 1 King</div>
                <div className="flex items-center gap-2"><Users size={16} className="text-gold-400" /> 2 Guests</div>
                <div className="flex items-center gap-2"><Wifi size={16} className="text-gold-400" /> Free Wifi</div>
              </div>
              
              <Link to="/booking" className="block text-center w-full border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                Reserve Suite
              </Link>
            </div>
          </div>

          {/* Family Suite */}
          <div className="bg-white border border-gray-200 group">
            <div className="h-80 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Family Suite" />
            </div>
            <div className="p-10 flex flex-col h-[calc(100%-20rem)]">
              <div className="flex justify-between items-end mb-4 border-b border-gray-100 pb-4">
                <h3 className="text-3xl font-serif text-charcoal">Family Suite</h3>
                <span className="text-xl font-medium text-gold-500 whitespace-nowrap ml-4">KES 22,000<span className="text-sm text-gray-400 font-light block text-right">/ night</span></span>
              </div>
              <p className="text-gray-500 mb-8 font-light flex-grow leading-relaxed">The ultimate family getaway with interconnected rooms, extra beds, and ample space for everyone to relax.</p>
              
              <div className="flex gap-6 mb-10 text-sm font-light uppercase tracking-wide text-gray-500">
                <div className="flex items-center gap-2"><BedDouble size={16} className="text-gold-400" /> 2+ Beds</div>
                <div className="flex items-center gap-2"><Users size={16} className="text-gold-400" /> 4 Guests</div>
                <div className="flex items-center gap-2"><Wifi size={16} className="text-gold-400" /> Free Wifi</div>
              </div>
              
              <Link to="/booking" className="block text-center w-full border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                Reserve Suite
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-400 font-light tracking-wide">
          <p>Children under 5 stay free. Extra beds available on request at KES 2,000/night. All prices are inclusive of taxes.</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
