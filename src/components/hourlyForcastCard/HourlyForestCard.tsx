import type { IHourlyForecastCard } from '@/types/types';
import { getWeatherMapCode } from '../WeatherIcon/WeatherIcon';

const HourlyForecastCard = ({
  hourItem,
  index,
}: {
  hourItem: IHourlyForecastCard;
  index: number;
}) => {
  const timeString = hourItem.time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: '2-digit',
  });
  return (
    <div className='flex-shrink-0 bg-white/10 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-gray-600/30 transition-all duration-200 min-w-[80px]'>
      <div className='text-center'>
        <p className='text-white/90 dark:text-gray-300 text-sm font-medium mb-3'>
          {index === 0 ? 'Now' : timeString}
        </p>

        <div className='flex text-xl justify-center mb-3'>
          {getWeatherMapCode(hourItem?.condition, hourItem?.isDay)}
        </div>

        <p className='text-white dark:text-gray-200 font-bold text-lg'>
          {Math.round(hourItem?.temp)}°
        </p>
      </div>
    </div>
  );
};

export default HourlyForecastCard;
