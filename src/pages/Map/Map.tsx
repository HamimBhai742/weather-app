
import { useState, useEffect } from 'react';
import { MapPin, Cloud, Sun, CloudRain, Search, Layers, Thermometer } from 'lucide-react';
import axios from 'axios';

interface CityWeather {
  name: string;
  country: string;
  temp: number;
  condition: string;
  lat: number;
  lon: number;
  icon: string;
}

const Map = () => {
  const [selectedCity, setSelectedCity] = useState<CityWeather | null>(null);
  const [weatherLayer, setWeatherLayer] = useState<'temperature' | 'precipitation' | 'clouds'>('temperature');
  const [majorCities, setMajorCities] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(true);

  const OPEN_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;

  // Major world cities with coordinates
  const cities = [
    { name: 'New York', lat: 40.7128, lon: -74.0060, country: 'US' },
    { name: 'London', lat: 51.5074, lon: -0.1278, country: 'GB' },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503, country: 'JP' },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093, country: 'AU' },
    { name: 'Dubai', lat: 25.2048, lon: 55.2708, country: 'AE' },
    { name: 'Mumbai', lat: 19.0760, lon: 72.8777, country: 'IN' },
    { name: 'São Paulo', lat: -23.5505, lon: -46.6333, country: 'BR' },
    { name: 'Cairo', lat: 30.0444, lon: 31.2357, country: 'EG' },
    { name: 'Moscow', lat: 55.7558, lon: 37.6176, country: 'RU' },
    { name: 'Beijing', lat: 39.9042, lon: 116.4074, country: 'CN' },
    { name: 'Dhaka', lat: 23.8103, lon: 90.4125, country: 'BD' },
    { name: 'Lagos', lat: 6.5244, lon: 3.3792, country: 'NG' }
  ];

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      setLoading(true);
      try {
        const weatherPromises = cities.map(city =>
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${OPEN_WEATHER}`)
        );
        
        const responses = await Promise.all(weatherPromises);
        const citiesWeather = responses.map((res, index) => ({
          name: cities[index].name,
          country: cities[index].country,
          temp: Math.round(res.data.main.temp),
          condition: res.data.weather[0].main,
          lat: cities[index].lat,
          lon: cities[index].lon,
          icon: res.data.weather[0].icon
        }));
        
        setMajorCities(citiesWeather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCitiesWeather();
  }, [OPEN_WEATHER]);

  // Convert lat/lon to SVG coordinates (simplified projection)
  const projectToSVG = (lat: number, lon: number) => {
    const x = ((lon + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear': return <Sun className="w-4 h-4 text-yellow-400" />;
      case 'clouds': return <Cloud className="w-4 h-4 text-gray-400" />;
      case 'rain': return <CloudRain className="w-4 h-4 text-blue-400" />;
      default: return <Cloud className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp < 0) return '#3B82F6'; // Blue
    if (temp < 10) return '#06B6D4'; // Cyan
    if (temp < 20) return '#10B981'; // Green
    if (temp < 30) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-gray-100 mb-4 drop-shadow-lg">
            Global Weather Map
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-gray-300 font-light">
            Explore real-time weather conditions around the world
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-white/80" />
              <span className="text-white/90 font-medium">Weather Layer:</span>
            </div>
            <div className="flex gap-2">
              {(['temperature', 'precipitation', 'clouds'] as const).map((layer) => (
                <button
                  key={layer}
                  onClick={() => setWeatherLayer(layer)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    weatherLayer === layer
                      ? 'bg-white/30 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {layer.charAt(0).toUpperCase() + layer.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
          <div className="relative">
            
            {/* World Map SVG */}
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                style={{ background: 'linear-gradient(180deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)' }}
              >
                {/* Simplified world map paths */}
                <g fill="#10B981" stroke="#059669" strokeWidth="0.5">
                  {/* North America */}
                  <path d="M 50 80 L 200 70 L 220 120 L 180 180 L 120 160 L 80 140 Z" />
                  {/* South America */}
                  <path d="M 150 200 L 180 180 L 200 250 L 170 320 L 140 300 L 130 240 Z" />
                  {/* Europe */}
                  <path d="M 350 60 L 420 50 L 440 100 L 400 120 L 360 110 Z" />
                  {/* Africa */}
                  <path d="M 380 120 L 450 110 L 470 200 L 450 280 L 400 270 L 390 180 Z" />
                  {/* Asia */}
                  <path d="M 450 50 L 650 40 L 680 120 L 620 140 L 580 100 L 460 90 Z" />
                  {/* Australia */}
                  <path d="M 580 280 L 650 270 L 670 300 L 640 320 L 590 310 Z" />
                </g>

                {/* City Markers */}
                {!loading && majorCities.map((city, index) => {
                  const { x, y } = projectToSVG(city.lat, city.lon);
                  return (
                    <g key={index}>
                      {/* Temperature circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill={getTemperatureColor(city.temp)}
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:r-16 transition-all duration-300"
                        onClick={() => setSelectedCity(city)}
                      />
                      {/* Temperature text */}
                      <text
                        x={x}
                        y={y + 2}
                        textAnchor="middle"
                        className="fill-white text-xs font-bold pointer-events-none"
                      >
                        {city.temp}°
                      </text>
                    </g>
                  );
                })}

                {/* Loading indicators */}
                {loading && (
                  <g>
                    {cities.map((city, index) => {
                      const { x, y } = projectToSVG(city.lat, city.lon);
                      return (
                        <circle
                          key={index}
                          cx={x}
                          cy={y}
                          r="8"
                          fill="rgba(255,255,255,0.3)"
                          className="animate-pulse"
                        />
                      );
                    })}
                  </g>
                )}
              </svg>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Temperature Scale</div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>&lt;0°C</span>
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <span>0-10°C</span>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>10-20°C</span>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>20-30°C</span>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>&gt;30°C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected City Info */}
        {selectedCity && (
          <div className="mt-6 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-white/80" />
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-100">
                    {selectedCity.name}, {selectedCity.country}
                  </h3>
                  <p className="text-white/80 dark:text-gray-300">
                    {selectedCity.lat.toFixed(2)}°, {selectedCity.lon.toFixed(2)}°
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  {getWeatherIcon(selectedCity.condition)}
                  <span className="text-2xl font-bold text-white">
                    {selectedCity.temp}°C
                  </span>
                </div>
                <p className="text-white/80 text-sm">{selectedCity.condition}</p>
              </div>
            </div>
          </div>
        )}

        {/* Cities Grid */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white dark:text-gray-100 mb-6 text-center">
            Major Cities Weather
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {majorCities.map((city, index) => (
              <div
                key={index}
                onClick={() => setSelectedCity(city)}
                className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl p-4 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-800/40 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white dark:text-gray-100">
                    {city.name}
                  </h3>
                  {getWeatherIcon(city.condition)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {city.temp}°C
                  </span>
                  <span className="text-white/70 text-sm">
                    {city.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Map;