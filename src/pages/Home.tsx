import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="bg-cream">
      <Hero />
      <div className="py-32 bg-cream text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gold-500"></div>
        <div className="max-w-7xl mx-auto px-4 pt-10">
          <div className="max-w-4xl mx-auto mb-24">
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">Welcome to <br/>Eagle Wood</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Experience the perfect blend of rustic elegance and modern comfort in the heart of Nakuru. 
              Whether you are here for a relaxing getaway, a corporate event, or an unforgettable dining experience, 
              Eagle Wood Hotel is your premier destination. Explore our sections above to learn more about what we offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[28rem] overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel Exterior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex items-end justify-center pb-12 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-2xl font-serif tracking-wide border-b border-transparent group-hover:border-gold-500 transition-colors duration-500 pb-1">Stunning Views</span>
              </div>
            </div>
            <div className="relative h-[28rem] overflow-hidden group cursor-pointer mt-0 md:mt-12">
              <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" alt="Luxury Rooms" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex items-end justify-center pb-12 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-2xl font-serif tracking-wide border-b border-transparent group-hover:border-gold-500 transition-colors duration-500 pb-1">Luxury Rooms</span>
              </div>
            </div>
            <div className="relative h-[28rem] overflow-hidden group cursor-pointer mt-0 md:mt-24">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex items-end justify-center pb-12 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-2xl font-serif tracking-wide border-b border-transparent group-hover:border-gold-500 transition-colors duration-500 pb-1">Fine Dining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
