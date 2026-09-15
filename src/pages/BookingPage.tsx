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
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-full text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h1 className="text-3xl font-serif text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for choosing Eagle Wood Hotel. We have sent a confirmation email with your reservation details.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <p className="text-sm text-gray-500 mb-1">Reservation Number</p>
              <p className="font-mono text-gray-900 font-medium text-lg">EW-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <Link to="/" className="inline-block w-full bg-gray-900 text-white px-8 py-4 rounded-md text-lg hover:bg-gray-800 transition-colors">
              Return to Homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Complete Your Booking</h1>
          <p className="text-lg text-gray-600">
            Experience comfort and elegance in our thoughtfully designed accommodations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 rounded-xl">
              
              {/* Guest Details */}
              <section>
                <h2 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-2">Guest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" />
                  </div>
                </div>
              </section>

              {/* Reservation Details */}
              <section>
                <h2 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-2">Reservation Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date *</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" 
                      required 
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date *</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" 
                      required 
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Room Type *</label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" 
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Guests *</label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" 
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
                <h2 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-2">Children & Extra Beds</h2>
                <p className="text-sm text-gray-600 mb-4">Children under 5 stay free. Extra beds available on request at KES 2,000/night.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Children</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-8">
                    <input type="checkbox" id="extrabed" className="h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded" />
                    <label htmlFor="extrabed" className="ml-2 block text-sm text-gray-700">
                      Request Extra Bed
                    </label>
                  </div>
                </div>
              </section>

              {/* Special Requests */}
              <section>
                <h2 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-2">Special Requests</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Any special requests or requirements...</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900" placeholder="e.g. Dietary requirements, late check-in, etc."></textarea>
                </div>
              </section>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full text-white px-8 py-4 rounded-md text-lg transition-colors flex justify-center items-center ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  {isSubmitting ? 'Processing...' : 'Submit Reservation Request'}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  A confirmation email will be sent to your provided email address.
                </p>
              </div>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-xl sticky top-28">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-200 pb-2">Booking Summary</h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium text-gray-900">{formData.checkIn || 'Select date'}</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium text-gray-900">{formData.checkOut || 'Select date'}</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Room:</span>
                  <span className="font-medium text-gray-900">
                    {formData.roomType === 'standard' ? 'Standard Room' : formData.roomType === 'executive' ? 'Executive Room' : 'Select room'}
                  </span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Guests:</span>
                  <span className="font-medium text-gray-900">{formData.guests} Adult{formData.guests !== '1' ? 's' : ''}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Estimated total based on dates and room selection. All prices are inclusive of taxes.
                </p>
                <div className="flex justify-between items-center text-xl font-serif text-gray-900">
                  <span>Estimated Total</span>
                  <span>{getEstimatedTotal()}</span>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-4 rounded border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Contact our reservations team:<br/>
                  <a href="tel:+254700123456" className="text-gray-900 font-medium">+254 700 123 456</a><br/>
                  <a href="mailto:info@eaglewoodhotel.com" className="text-gray-900 font-medium">info@eaglewoodhotel.com</a>
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
