import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1'
  });

  const getEstimatedTotal = () => {
    if (!formData.roomType || !formData.checkIn || !formData.checkOut) return '--';
    
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) return 'Invalid dates';

    const rate = formData.roomType === 'standard' ? 8000 : 15000;
    return `KES ${(rate * nights).toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-32 pb-16 px-4">
          <div className="bg-white p-12 border border-gray-200 max-w-lg w-full text-center shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gold-500"></div>
            <div className="mx-auto w-16 h-16 border border-gold-400 rounded-full flex items-center justify-center mb-8 mt-4">
              <CheckCircle className="text-gold-500" size={32} strokeWidth={1} />
            </div>
            <h1 className="text-4xl font-serif text-charcoal mb-4">Reservation Confirmed</h1>
            <p className="text-gray-500 mb-10 font-light leading-relaxed">
              Thank you for choosing Eagle Wood. We have sent a confirmation email with your detailed itinerary.
            </p>
            <div className="border-t border-b border-gray-100 py-6 mb-10 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-medium">Confirmation Number</p>
              <p className="font-serif text-charcoal text-2xl">EW-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <Link to="/" className="inline-block w-full bg-charcoal text-white px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-gold-500 hover:text-charcoal transition-colors duration-300">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gold-500 mb-8 -mt-16"></div>
          <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Reservations</span>
          <h1 className="text-5xl font-serif text-charcoal mb-6">Complete Your Booking</h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Experience comfort and elegance in our thoughtfully designed accommodations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Section */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-12 bg-white p-10 md:p-14 border border-gray-100 shadow-sm">
              
              {/* Guest Details */}
              <section>
                <h2 className="text-2xl font-serif text-charcoal mb-8 border-b border-gray-100 pb-4">Guest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">First Name *</label>
                    <input type="text" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Last Name *</label>
                    <input type="text" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Email Address *</label>
                    <input type="email" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Phone</label>
                    <input type="tel" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors" />
                  </div>
                </div>
              </section>

              {/* Reservation Details */}
              <section>
                <h2 className="text-2xl font-serif text-charcoal mb-8 border-b border-gray-100 pb-4">Reservation Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Check-in Date *</label>
                    <input 
                      type="date" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal" 
                      required 
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Check-out Date *</label>
                    <input 
                      type="date" 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal" 
                      required 
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Room Type *</label>
                    <select 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal" 
                      required
                      value={formData.roomType}
                      onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                    >
                      <option value="">Select a room</option>
                      <option value="standard">Standard Room (KES 8,000)</option>
                      <option value="executive">Executive Room (KES 15,000)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Guests *</label>
                    <select 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal" 
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                </div>
              </section>
              
              {/* Children & Extra Beds */}
              <section>
                <h2 className="text-2xl font-serif text-charcoal mb-4 border-b border-gray-100 pb-4">Children & Extra Beds</h2>
                <p className="text-sm text-gray-400 mb-8 font-light tracking-wide">Children under 5 stay free. Extra beds available on request at KES 2,000/night.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Number of Children</label>
                    <select className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-8">
                    <input type="checkbox" id="extrabed" className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded-none bg-transparent" />
                    <label htmlFor="extrabed" className="ml-3 block text-sm font-light text-gray-500">
                      Request Extra Bed
                    </label>
                  </div>
                </div>
              </section>

              {/* Special Requests */}
              <section>
                <h2 className="text-2xl font-serif text-charcoal mb-8 border-b border-gray-100 pb-4">Special Requests</h2>
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-4">Any special requests or requirements...</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-0 focus:border-gold-500 transition-colors text-charcoal font-light" placeholder="e.g. Dietary requirements, late check-in, etc."></textarea>
                </div>
              </section>

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white px-8 py-5 uppercase tracking-[0.2em] text-sm transition-colors duration-300 flex justify-center items-center ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-charcoal hover:bg-gold-500 hover:text-charcoal'}`}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                </button>
                <p className="text-center text-xs uppercase tracking-widest text-gray-400 mt-6 font-medium">
                  Secure checkout provided by Eagle Wood
                </p>
              </div>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-charcoal text-white p-10 sticky top-32">
              <h2 className="text-2xl font-serif mb-8 border-b border-gray-700 pb-4 text-gold-400">Reservation Summary</h2>
              
              <div className="space-y-6 mb-10 font-light">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400">Check-in</span>
                  <span className="font-medium text-white">{formData.checkIn || '---'}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400">Check-out</span>
                  <span className="font-medium text-white">{formData.checkOut || '---'}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400">Suite</span>
                  <span className="font-medium text-white text-right">
                    {formData.roomType === 'standard' ? 'Standard Room' : formData.roomType === 'executive' ? 'Executive Room' : '---'}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-400">Guests</span>
                  <span className="font-medium text-white">{formData.guests} Adult{formData.guests !== '1' ? 's' : ''}</span>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-xs text-gray-500 mb-4 font-light tracking-wide uppercase">
                  Estimated total based on dates and suite selection. All prices are inclusive of taxes.
                </p>
                <div className="flex justify-between items-end mb-10 mt-6">
                  <span className="text-sm uppercase tracking-widest text-gold-500 font-medium">Total</span>
                  <span className="text-3xl font-serif text-white">{getEstimatedTotal()}</span>
                </div>
              </div>
              
              <div className="mt-8 border-t border-gray-800 pt-8">
                <h3 className="text-sm uppercase tracking-widest text-gold-400 mb-4 font-medium">Concierge Service</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  For immediate assistance or special arrangements, contact our concierge:<br/>
                  <a href="tel:+254700123456" className="text-white hover:text-gold-400 transition-colors block mt-4 text-lg">+254 700 123 456</a>
                  <a href="mailto:concierge@eaglewood.com" className="text-white hover:text-gold-400 transition-colors block mt-1">concierge@eaglewood.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
