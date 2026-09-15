import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wifi, Tv, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoomsPage = () => {
  const rooms = [
    {
      title: "Standard Room",
      price: "KES 8,000",
      description: "Comfortable accommodation",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
      features: ["Queen Bed", "En-suite Bathroom", "City View"]
    },
    {
      title: "Executive Room",
      price: "KES 15,000",
      description: "The complete experience with overnight stay",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      features: ["King Bed", "Lounge Area", "Lake View"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Rooms & Rates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple room configurations available. Experience comfort and elegance in our thoughtfully designed accommodations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={room.image} alt={room.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-gray-900">{room.title}</h3>
                      <p className="text-gray-500 mt-1">{room.description}</p>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">{room.price}<span className="text-sm font-normal text-gray-500">/night</span></p>
                  </div>
                  <div className="flex gap-4 mb-6 text-gray-600">
                    <Wifi size={20} />
                    <Tv size={20} />
                    <Coffee size={20} />
                  </div>
                  <Link to="/booking" className="block w-full text-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomsPage;
