import React from 'react';
import { Presentation, Mic, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="bg-white">
      {/* Events Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" alt="Conference Hall" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Executive Conferencing & Events</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art meeting facilities for board meetings, training sessions, and team building events.
          </p>
        </div>
      </section>

      <section id="events" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Venues at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our events team is here to help you create an unforgettable corporate experience. Flexible packages designed to meet your corporate needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col">
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" alt="Grand Ballroom" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 border-4 border-white">
                <Presentation className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Grand Ballroom</h3>
              <p className="text-gray-600 mb-6 flex-grow">Large events and gala dinners. Comprehensive package for all-day corporate events. Up to 250 persons capacity.</p>
              <Link to="/booking" className="block w-full text-center border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                Inquire Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border-2 border-gray-900 flex flex-col relative">
              <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium z-20 shadow-md">
                Most Popular
              </div>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Modern Boardrooms" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 border-4 border-white">
                <MonitorPlay className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Boardrooms</h3>
              <p className="text-gray-600 mb-6 flex-grow">Intimate setting for executive meetings. Climate-controlled meeting rooms with state-of-the-art audiovisual equipment.</p>
              <Link to="/booking" className="block w-full text-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                Inquire Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Training Spaces" className="w-full h-48 object-cover rounded-lg mb-6" />
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 -mt-14 relative z-10 border-4 border-white">
                <Mic className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training Spaces</h3>
              <p className="text-gray-600 mb-6 flex-grow">Flexible space for mid-size events. Perfect for morning meetings and training sessions. Stationery provided.</p>
              <Link to="/booking" className="block w-full text-center border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
