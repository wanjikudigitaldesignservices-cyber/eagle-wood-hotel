import React from 'react';
import { Presentation, Mic, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="bg-cream">
      {/* Events Hero */}
      <section className="relative pt-40 pb-32 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" alt="Conference Hall" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium">Corporate & Events</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Executive<br/>Conferencing</h1>
          <div className="w-16 h-[1px] bg-gold-500 mb-10"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            State-of-the-art meeting facilities for board meetings, training sessions, and team building events.
          </p>
        </div>
      </section>

      <section id="events" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gold-500 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 pt-20">Our Venues at a Glance</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Our events team is here to help you create an unforgettable corporate experience. Flexible packages designed to meet your corporate needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white border border-gray-200 group text-center flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" alt="Grand Ballroom" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="mx-auto w-16 h-16 bg-white border border-gold-400 rounded-full flex items-center justify-center mb-6 -mt-20 relative z-10 group-hover:bg-gold-500 transition-colors duration-500">
                  <Presentation className="text-gold-500 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Grand Ballroom</h3>
                <p className="text-gray-500 mb-10 font-light flex-grow leading-relaxed">Large events and gala dinners. Comprehensive package for all-day corporate events. Up to 250 persons capacity.</p>
                <Link to="/booking" className="block w-full text-center border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gold-500 group text-center flex flex-col relative shadow-lg transform md:-translate-y-4">
              <div className="absolute top-4 right-4 bg-gold-500 text-charcoal px-4 py-1 uppercase tracking-widest text-xs font-medium z-20">
                Most Popular
              </div>
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Modern Boardrooms" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="mx-auto w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6 -mt-20 relative z-10 border border-gold-500">
                  <MonitorPlay className="text-charcoal" size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Modern Boardrooms</h3>
                <p className="text-gray-500 mb-10 font-light flex-grow leading-relaxed">Intimate setting for executive meetings. Climate-controlled meeting rooms with state-of-the-art audiovisual equipment.</p>
                <Link to="/booking" className="block w-full text-center bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-gold-500 hover:text-charcoal transition-colors duration-300">
                  Inquire Now
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 group text-center flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Training Spaces" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-10 flex flex-col flex-grow relative">
                <div className="mx-auto w-16 h-16 bg-white border border-gold-400 rounded-full flex items-center justify-center mb-6 -mt-20 relative z-10 group-hover:bg-gold-500 transition-colors duration-500">
                  <Mic className="text-gold-500 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">Training Spaces</h3>
                <p className="text-gray-500 mb-10 font-light flex-grow leading-relaxed">Flexible space for mid-size events. Perfect for morning meetings and training sessions. Stationery provided.</p>
                <Link to="/booking" className="block w-full text-center border border-charcoal text-charcoal py-4 uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-white transition-colors duration-300">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
