/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherType } from '@/helpers/weather.types';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import { getWeatherGradient } from '@/pages/Home/clolor';

const CurrentWeatherSection = ({
  weather,
  currentDate,
  windKmh,
}: {
  weather: any;
  currentDate: string;
  windKmh: string;
}) => {
  return (
    <div className='w-full max-w-4xl'>
      <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden'>
        <div className='p-8 md:p-12'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            {/* Left Side - Location & Date */}
            <div className='text-center lg:text-left'>
              <h2 className='text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-2'>
                {weather?.name}
              </h2>
              <p className='text-lg md:text-xl text-white/80 dark:text-gray-300 font-medium'>
                {currentDate}
              </p>
            </div>

            {/* Center - Weather Icon */}
            <div className='flex-shrink-0'>
              <div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-2xl animate-pulse ${getWeatherGradient(
                  weather?.weather
                )}`}
              >
                {weather?.weather?.[0]?.icon && (
                  <WeatherIcon weather={weather.weather} />
                )}
              </div>
            </div>

            {/* Right Side - Temperature */}
            <div className='text-center lg:text-right'>
              <div className='text-6xl md:text-8xl font-bold text-white dark:text-gray-100 mb-2 drop-shadow-lg'>
                {Math.round(weather?.main?.temp || 0)}°
              </div>
              <p className='text-xl md:text-2xl text-white/90 dark:text-gray-300 font-medium'>
                {WeatherType(weather?.weather)}
              </p>
            </div>
          </div>

          {/* Additional Weather Info Cards */}
          <div className='mt-8 pt-8 border-t border-white/20 dark:border-gray-700/50'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {/* Feels Like Card */}
              <div className='bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='bg-white/20 p-2 rounded-lg backdrop-blur-sm'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-2v0zm1 13c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.3-1.9L11 6h2v8.1c.75.3 1.3 1.05 1.3 1.9 0 1.1-.9 2-2 2z' />
                    </svg>
                  </div>
                  <span className='text-2xl font-bold text-white'>
                    {Math.round(weather?.main?.feels_like || 0)}°
                  </span>
                </div>
                <p className='text-sm text-white/90 font-medium'>Feels like</p>
              </div>

              {/* Humidity Card */}
              <div className='bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='bg-white/20 p-2 rounded-lg backdrop-blur-sm'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z' />
                    </svg>
                  </div>
                  <span className='text-2xl font-bold text-white'>
                    {weather?.main?.humidity}%
                  </span>
                </div>
                <p className='text-sm text-white/90 font-medium'>Humidity</p>
              </div>

              {/* Wind Speed Card */}
              <div className='bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='bg-white/20 p-2 rounded-lg backdrop-blur-sm'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-7a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <span className='text-2xl font-bold text-white'>
                    {windKmh}
                  </span>
                </div>
                <p className='text-sm text-white/90 font-medium'>Wind km/h</p>
              </div>

              {/* Precipitation Card */}
              <div className='bg-gradient-to-br from-slate-400 to-gray-600 rounded-2xl p-6 hover:scale-105 transition-transform duration-200 shadow-xl'>
                <div className='flex items-center justify-between mb-3'>
                  <div className='bg-white/20 p-2 rounded-lg backdrop-blur-sm'>
                    <svg
                      className='w-5 h-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M6 14l3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997 3.5 5.875zm13.46.71l2.123-2.12 1.414 1.414L18.38 7.997 16.96 6.585zM1 10h3v2H1v-2zm19 0h3v2h-3v-2z' />
                    </svg>
                  </div>
                  <span className='text-2xl font-bold text-white'>
                    {weather?.rain
                      ? Math.round((weather.rain['1h'] as number) * 100)
                      : weather?.snow
                      ? Math.round((weather.snow['1h'] as number) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <p className='text-sm text-white/90 font-medium'>
                  Precipitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherSection;
