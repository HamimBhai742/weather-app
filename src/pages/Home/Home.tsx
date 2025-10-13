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

  // Mock data - replace with actual weather data
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Weather App
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light">
          Discover weather anywhere in the world
        </p>
      </div>

      <div className="w-full max-w-2xl mb-12">
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

      {/* Current Weather Section */}
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Side - Location & Date */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  New York City
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-medium">
                  {currentDate}
                </p>
              </div>

              {/* Center - Weather Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-20 h-20 md:w-24 md:h-24 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                  </svg>
                </div>
              </div>

              {/* Right Side - Temperature */}
              <div className="text-center lg:text-right">
                <div className="text-6xl md:text-8xl font-bold text-gray-800 mb-2">
                  24°
                </div>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Sunny
                </p>
              </div>
            </div>

            {/* Weather Details */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Feels like</p>
                  <p className="text-xl font-semibold text-gray-800">26°</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Humidity</p>
                  <p className="text-xl font-semibold text-gray-800">65%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Wind</p>
                  <p className="text-xl font-semibold text-gray-800">12 km/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">UV Index</p>
                  <p className="text-xl font-semibold text-gray-800">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
