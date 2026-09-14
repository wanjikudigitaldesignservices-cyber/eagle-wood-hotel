import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-gray-900 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Dining />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
