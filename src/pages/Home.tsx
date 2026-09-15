import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Welcome to Eagle Wood</h2>
            <p className="text-lg text-gray-600">
              Experience the perfect blend of rustic elegance and modern comfort in the heart of Nakuru. 
              Whether you are here for a relaxing getaway, a corporate event, or an unforgettable dining experience, 
              Eagle Wood Hotel is your premier destination. Explore our sections above to learn more about what we offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Hotel Exterior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Stunning Views</span>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" alt="Luxury Rooms" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Luxury Rooms</span>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">Fine Dining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
