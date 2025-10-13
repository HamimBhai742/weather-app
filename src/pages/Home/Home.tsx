import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleLocationClick = () => {
    console.log('Get current location');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Weather App
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light">
          Discover weather anywhere in the world
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLocationClick}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-4 rounded-xl transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter city name or location..."
                  className="w-full text-gray-800 placeholder-gray-500 text-lg md:text-xl px-4 py-4 focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-xl transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['New York', 'London', 'Tokyo', 'Paris', 'Sydney'].map((city) => (
            <button
              key={city}
              onClick={() => setSearchQuery(city)}
              className="bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-sm font-medium"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
