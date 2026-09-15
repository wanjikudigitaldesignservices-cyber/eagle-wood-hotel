import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navBg = scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gray-200/50' : (isHome ? 'bg-transparent' : 'bg-cream border-b border-gray-200/50');
  const textColor = (scrolled || !isHome) ? 'text-charcoal' : 'text-white';
  const logoColor = (scrolled || !isHome) ? 'text-charcoal' : 'text-white';
  
  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const baseColor = (scrolled || !isHome) ? 'hover:text-gold-500' : 'hover:text-gold-400';
    return `text-sm uppercase tracking-widest transition-colors duration-300 ${
      isActive ? 'text-gold-500 font-medium' : `${textColor} ${baseColor}`
    }`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className={`text-3xl font-serif tracking-wide ${logoColor} transition-colors duration-300`}>
              Eagle Wood
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/about" className={getLinkClass('/about')}>Experience</Link>
            <Link to="/rooms" className={getLinkClass('/rooms')}>Rooms</Link>
            <Link to="/dining" className={getLinkClass('/dining')}>Dining</Link>
            <Link to="/events" className={getLinkClass('/events')}>Conferences</Link>
            <Link to="/booking" className={`px-8 py-3 text-sm uppercase tracking-widest border transition-all duration-300 ${
              (scrolled || !isHome) 
                ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-charcoal'
            }`}>
              Book Now
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColor} transition-colors duration-300`}>
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-cream border-t border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible h-auto pb-8' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="px-6 pt-4 space-y-6 flex flex-col items-center">
          <Link to="/about" onClick={() => setIsOpen(false)} className={`block text-charcoal text-sm uppercase tracking-widest hover:text-gold-500`}>Experience</Link>
          <Link to="/rooms" onClick={() => setIsOpen(false)} className={`block text-charcoal text-sm uppercase tracking-widest hover:text-gold-500`}>Rooms</Link>
          <Link to="/dining" onClick={() => setIsOpen(false)} className={`block text-charcoal text-sm uppercase tracking-widest hover:text-gold-500`}>Dining</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className={`block text-charcoal text-sm uppercase tracking-widest hover:text-gold-500`}>Conferences</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full max-w-xs text-center border border-charcoal text-charcoal px-6 py-3 uppercase tracking-widest text-sm hover:bg-charcoal hover:text-white transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
