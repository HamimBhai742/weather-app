import type { Weather } from '@/types/types';
export function getWeatherGradient(weather: Weather) {
  let bgGradient = '';
  if (weather?.weatherCode === 0) {
    // Clear sky
    bgGradient = weather.isDay
      ? 'bg-gradient-to-br from-amber-300 via-orange-400 to-orange-500'
      : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-black';
  } else if ([1, 2].includes(weather?.weatherCode)) {
    // Cloudy
    bgGradient = weather.isDay
      ? 'bg-gradient-to-br from-amber-300 via-orange-500 '
      : 'bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900';
  } else if ([3].includes(weather?.weatherCode)) {
    // Cloudy
    bgGradient = weather.isDay
      ? 'bg-gradient-to-br from-slate-400 via-gray-500 to-blue-600'
      : 'bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900';
  } else if (
    [51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(weather?.weatherCode)
  ) {
    // Rain
    bgGradient = 'bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700';
  } else if ([71, 73, 75, 77, 85, 86].includes(weather?.weatherCode)) {
    // Snow
    bgGradient = 'bg-gradient-to-br from-blue-100 via-cyan-200 to-blue-400';
  } else if ([95, 96, 99].includes(weather?.weatherCode)) {
    // Storm
    bgGradient = 'bg-gradient-to-br from-purple-800 via-gray-900 to-black';
  } else if (weather?.weatherCode === 45) {
    // Mist / Fog
    bgGradient = 'bg-gradient-to-br from-gray-300 via-slate-400 to-gray-600';
  } else if (weather?.weatherCode === 48) {
    // Haze
    bgGradient = weather.isDay
      ? 'bg-gradient-to-br from-amber-300 via-orange-400 to-pink-500'
      : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-black';
  } else {
    // Default
    bgGradient = 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600';
  }

  return bgGradient;
}
