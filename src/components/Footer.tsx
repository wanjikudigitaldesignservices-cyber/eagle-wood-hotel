import React from 'react';
import { MapPin, Phone, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-6">Eagle Wood</h3>
            <p className="text-gray-400 mb-6">
              Where rustic elegance meets modern comfort. Discover what makes us Nakuru's premier destination.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Nakuru-Nairobi Highway, Nakuru, Kenya</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+254 700 123 456</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>reservations@eaglewood.com</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors">Experience Eagle Wood</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms & Rates</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">Restaurant</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Conferences</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Reception:</span>
                <span className="text-white font-medium">24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Restaurant:</span>
                <span className="text-white font-medium">6:30 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Check-in:</span>
                <span className="text-white font-medium">2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Check-out:</span>
                <span className="text-white font-medium">10:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-800 rounded-lg h-64 w-full flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-800 opacity-50 z-10"></div>
          <p className="z-20 text-white font-medium flex items-center gap-2">
            <MapPin size={24} /> Google Map Location - Interactive map would be displayed here
          </p>
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Eagle Wood Hotel Nakuru. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
