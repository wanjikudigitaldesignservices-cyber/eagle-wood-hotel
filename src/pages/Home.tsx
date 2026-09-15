import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Welcome to Eagle Wood</h2>
          <p className="text-lg text-gray-600">
            Experience the perfect blend of rustic elegance and modern comfort in the heart of Nakuru. 
            Whether you are here for a relaxing getaway, a corporate event, or an unforgettable dining experience, 
            Eagle Wood Hotel is your premier destination. Explore our sections above to learn more about what we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
