import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
              <li><a href="#about" className="hover:text-white transition-colors">Experience Eagle Wood</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms & Rates</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">Restaurant</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Conferences</a></li>
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
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Eagle Wood Hotel Nakuru. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
