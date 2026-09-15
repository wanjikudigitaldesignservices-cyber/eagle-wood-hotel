import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `transition-colors ${
      location.pathname === path ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900">
              Eagle Wood
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={getLinkClass('/about')}>Experience</Link>
            <Link to="/rooms" className={getLinkClass('/rooms')}>Rooms</Link>
            <Link to="/dining" className={getLinkClass('/dining')}>Dining</Link>
            <Link to="/events" className={getLinkClass('/events')}>Conferences</Link>
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
          <Link to="/about" onClick={() => setIsOpen(false)} className={`block ${getLinkClass('/about')}`}>Experience</Link>
          <Link to="/rooms" onClick={() => setIsOpen(false)} className={`block ${getLinkClass('/rooms')}`}>Rooms</Link>
          <Link to="/dining" onClick={() => setIsOpen(false)} className={`block ${getLinkClass('/dining')}`}>Dining</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className={`block ${getLinkClass('/events')}`}>Conferences</Link>
          <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md mt-4">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
