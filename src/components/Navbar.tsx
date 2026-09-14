import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Eagle Wood
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#rooms" className="text-gray-600 hover:text-gray-900 transition-colors">Rooms</a>
            <a href="#dining" className="text-gray-600 hover:text-gray-900 transition-colors">Dining</a>
            <a href="#events" className="text-gray-600 hover:text-gray-900 transition-colors">Conferences</a>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg">
          <a href="#about" className="block text-gray-600">Experience</a>
          <a href="#rooms" className="block text-gray-600">Rooms</a>
          <a href="#dining" className="block text-gray-600">Dining</a>
          <a href="#events" className="block text-gray-600">Conferences</a>
          <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md mt-4">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
