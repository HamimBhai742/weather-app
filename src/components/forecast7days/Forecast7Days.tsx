import type { IForecast7DaysCard } from '@/types/types';
import {
  getWeatherIconForecast,
  weatherTextMap,
} from '../WeatherIcon/WeatherIcon';

const Forecast7DaysCard = ({
  time,
  index,
  forecast7days,
}: {
  time: string;
  index: number;
  forecast7days: IForecast7DaysCard;
}) => {
  return (
    <div className='bg-white/10 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-gray-600/30 transition-all duration-200'>
      <div className='flex items-center justify-between'>
        {/* Day and Description */}
        <div className='flex-1'>
          <p className='text-white dark:text-gray-200 font-semibold text-lg'>
            {(() => {
              const date = new Date(time);
              const today = new Date();

              const isToday =
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear();

              return isToday
                ? 'Today'
                : date.toLocaleDateString('en-US', {
                    weekday: 'long',
                  });
            })()}
          </p>
          <p className='text-white/70 dark:text-gray-400 text-sm'>
            {weatherTextMap[forecast7days?.weathercode[index]]}
          </p>
        </div>

        {/* Weather Icon */}
        <div className='text-3xl mx-6 flex-shrink-0'>
          {getWeatherIconForecast(forecast7days?.weathercode[index])}
        </div>

        {/* Temperature Range */}
        <div className='flex-shrink-0 text-right'>
          <div className='flex items-center space-x-3'>
            <span className='text-white dark:text-gray-200 font-bold text-xl'>
              {Math.round(forecast7days?.temperature_2m_max[index])}°
            </span>
            <span className='text-white/60 dark:text-gray-400 text-lg'>
              {Math.round(forecast7days?.temperature_2m_min[index])}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast7DaysCard;
