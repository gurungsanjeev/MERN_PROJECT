import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center">
      <div className="text-center text-white px-4 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to Our Website!
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          We are glad to have you here. Explore our site to discover amazing things.
        </p>
        
      
      </div>

      {/* Background Image (Optional) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800)' }}></div>
    </div>
  );
};

export default Home;
