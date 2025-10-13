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
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Weather App
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light">
          Discover weather anywhere in the world
        </p>
      </div>

      <div className="w-full max-w-2xl mb-12">
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl p-2 border border-white/30 shadow-2xl">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLocationClick}
                className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg"
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
                  className="w-full bg-transparent text-white placeholder-white/70 text-lg md:text-xl px-4 py-4 focus:outline-none font-medium"
                />
              </div>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg"
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
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 text-sm font-medium shadow-lg"
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Current Weather Section */}
      <div className="w-full max-w-4xl">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Side - Location & Date */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  New York City
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-medium">
                  {currentDate}
                </p>
              </div>

              {/* Center - Weather Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <svg
                    className="w-20 h-20 md:w-24 md:h-24 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                  </svg>
                </div>
              </div>

              {/* Right Side - Temperature */}
              <div className="text-center lg:text-right">
                <div className="text-6xl md:text-8xl font-bold text-white mb-2 drop-shadow-lg">
                  24°
                </div>
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                  Sunny
                </p>
              </div>
            </div>

            {/* Additional Weather Info Cards */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Feels Like Card */}
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-2v0zm1 13c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.3-1.9L11 6h2v8.1c.75.3 1.3 1.05 1.3 1.9 0 1.1-.9 2-2 2z"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white">26°</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">Feels like</p>
                </div>

                {/* Humidity Card */}
                <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white">65%</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">Humidity</p>
                </div>

                {/* Wind Speed Card */}
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-7a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white">12</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">Wind km/h</p>
                </div>

                {/* Precipitation Card */}
                <div className="bg-gradient-to-br from-slate-400 to-gray-600 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 14l3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997 3.5 5.875zm13.46.71l2.123-2.12 1.414 1.414L18.38 7.997 16.96 6.585zM1 10h3v2H1v-2zm19 0h3v2h-3v-2z"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white">0%</span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">Precipitation</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Forecast Section */}
      <div className="w-full max-w-4xl mt-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">24-Hour Forecast</h3>
            
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 pb-2" style={{ width: 'max-content' }}>
                
                {/* Generate 24 hourly cards */}
                {Array.from({ length: 24 }, (_, index) => {
                  const hour = new Date();
                  hour.setHours(hour.getHours() + index);
                  const timeString = hour.toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    hour12: true 
                  });
                  
                  // Mock weather data for each hour
                  const temps = [24, 23, 22, 21, 20, 19, 18, 17, 18, 19, 21, 23, 25, 27, 28, 29, 28, 26, 25, 24, 23, 22, 21, 20];
                  const conditions = ['sunny', 'sunny', 'cloudy', 'cloudy', 'rainy', 'rainy', 'cloudy', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'rainy', 'rainy'];
                  
                  const getWeatherIcon = (condition: string) => {
                    switch (condition) {
                      case 'sunny':
                        return (
                          <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                          </svg>
                        );
                      case 'cloudy':
                        return (
                          <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
                          </svg>
                        );
                      case 'rainy':
                        return (
                          <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z"/>
                          </svg>
                        );
                      default:
                        return (
                          <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
                          </svg>
                        );
                    }
                  };

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-200 min-w-[80px]"
                    >
                      <div className="text-center">
                        <p className="text-white/90 text-sm font-medium mb-3">
                          {index === 0 ? 'Now' : timeString}
                        </p>
                        
                        <div className="flex justify-center mb-3">
                          {getWeatherIcon(conditions[index])}
                        </div>
                        
                        <p className="text-white font-bold text-lg">
                          {temps[index]}°
                        </p>
                      </div>
                    </div>
                  );
                })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
