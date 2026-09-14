import React from 'react';
import { Presentation, Mic, MonitorPlay } from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Conferencing & Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art meeting facilities for board meetings, training sessions, and team building events. Our events team is here to help you create an unforgettable corporate experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Presentation className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Grand Ballroom</h3>
            <p className="text-gray-600 mb-4">Large events and gala dinners. Comprehensive package for all-day corporate events. Up to 250 persons capacity.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border-2 border-gray-900">
            <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
              <MonitorPlay className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Boardrooms</h3>
            <p className="text-gray-600 mb-4">Intimate setting for executive meetings. Climate-controlled meeting rooms with state-of-the-art audiovisual equipment.</p>
            <div className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-sm font-medium mt-2">
              Most Popular
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Mic className="text-gray-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Training Spaces</h3>
            <p className="text-gray-600 mb-4">Flexible space for mid-size events. Perfect for morning meetings and training sessions. Stationery provided.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
