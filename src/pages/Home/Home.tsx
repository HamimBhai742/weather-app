import useWeather from '@/hooks/useWeather';
import { useState } from 'react';
import useForecast from '@/hooks/useForecast';
import HourlyForecastCard from '@/components/hourlyForcastCard/HourlyForestCard';
import type { IHourlyForecastCard } from '@/types/types';
import Forecast7DaysCard from '@/components/forecast7days/Forecast7Days';
import CurrentWeatherSection from '@/components/CurrentWeatherSection/CurrentWeatherSection';
import Search from '@/components/Searchbar/Search';
import WeatherCardSkeleton from '@/components/lodingSkeleton/WeatherCardSkeleton';
import HourlyForecastSkeleton from '@/components/lodingSkeleton/HourlyForecastSkeleton';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { weather, loadingWeather } = useWeather(searchQuery || 'Dhaka');
  const { forecast7days, hourlyForecast, sun, loading } = useForecast(
    searchQuery || 'Dhaka'
  );
  let windKmh = '0';
  if (weather?.wind) {
    windKmh = (weather?.wind.speed * 3.6).toFixed(1);
  }
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const now = new Date();
  const currentHour = new Date(now);
  currentHour.setMinutes(0, 0, 0);
  const nextHours = hourlyForecast?.time
    .map((time, i) => {
      const hour = new Date(time).getHours();
      const isDay =
        hour >= new Date(sun?.sunrise[0] ?? '').getHours() &&
        hour <= new Date(sun?.sunset[0] ?? '').getHours();
      return {
        time: new Date(time),
        temp: hourlyForecast?.temperature_2m[i],
        condition: hourlyForecast?.weathercode[i],
        isDay,
      };
    })
    ?.filter((item) => {
      const itemTime = item.time.getTime();
      const nowTime = currentHour.getTime();
      return itemTime >= nowTime;
    })
    .slice(0, 24);

  // if (loading || loadingWeather)
  //   return <p className='text-white min-h-screen bg-green-600'>Loading...</p>;
  return (
    <div className='min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-slate-900 dark:via-gray-900 dark:to-black flex flex-col items-center justify-center px-4 py-8'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl md:text-7xl font-bold text-white dark:text-gray-100 mb-4 drop-shadow-lg'>
          Weather App
        </h1>
        <p className='text-xl md:text-2xl text-white/90 dark:text-gray-300 font-light'>
          Discover weather anywhere in the world
        </p>
      </div>

      {/* Weather Search Section */}
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Current Weather Section */}
      {loadingWeather ? (
        <WeatherCardSkeleton />
      ) : (
        <CurrentWeatherSection
          weather={weather}
          currentDate={currentDate}
          windKmh={windKmh}
        />
      )}

      {/* Hourly Forecast Section */}
      <div className='w-full max-w-4xl mt-8'>
        <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden'>
          <div className='p-6 md:p-8'>
            <h3 className='text-2xl font-bold text-white dark:text-gray-100 mb-6'>
              24-Hour Forecast
            </h3>

            {loading ? (
              <HourlyForecastSkeleton />
            ) : (
              <div className='overflow-x-auto scrollbar-hide'>
                <div
                  className='flex space-x-4 pb-2'
                  style={{ width: 'max-content' }}
                >
                  {nextHours?.map(
                    (hourItem: IHourlyForecastCard, index: number) => (
                      <HourlyForecastCard
                        key={index}
                        hourItem={hourItem}
                        index={index}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 7-Day Daily Forecast Section */}
      <div className='w-full max-w-4xl mt-8'>
        <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden'>
          <div className='p-6 md:p-8'>
            <h3 className='text-2xl font-bold text-white dark:text-gray-100 mb-6'>
              7-Day Forecast
            </h3>

            <div className='space-y-3'>
              {forecast7days?.time?.map((time: string, index: number) => (
                <Forecast7DaysCard
                  key={index}
                  time={time}
                  index={index}
                  forecast7days={forecast7days}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
