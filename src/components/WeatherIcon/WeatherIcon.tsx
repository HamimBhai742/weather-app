/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Night from '../../../lottieFiles/night.json';
import Sunny from '../../../lottieFiles/sunnyday.json';
import Cloudy from '../../../lottieFiles/Cloudy.json';
import Rainy from '../../../lottieFiles/rainy.json';
import Snow from '../../../lottieFiles/snow.json';
import Storm from '../../../lottieFiles/strom.json';
import HazeNight from '../../../lottieFiles/hazenight.json';
import HazeDay from '../../../lottieFiles/hazeday.json';
import Drizzle from '../../../lottieFiles/drizzle.json';
import Cloudynight from '../../../lottieFiles/cloudynight.json';
import Cloudyday from '../../../lottieFiles/cloudyday.json';
import Lottie from 'lottie-react';
import type { Weather } from '@/types/types';
export function WeatherIcon({ weather }: { weather: Weather }) {
  if (weather?.weatherCode === 0) {
    return weather.isDay ? (
      <Lottie animationData={Sunny} loop={true} />
    ) : (
      <Lottie animationData={Night} loop={true} />
    );
  } else if ([1, 2].includes(weather.weatherCode)) {
    return weather.isDay ? (
      <Lottie animationData={Cloudyday} loop={true} />
    ) : (
      <Lottie animationData={Cloudynight} loop={true} />
    );
  } else if ([3].includes(weather.weatherCode)) {
    return <Lottie animationData={Cloudy} loop={true} />;
  } else if (
    [51, 53, 55, 56, 57, 61, 80, 81, 82].includes(weather.weatherCode)
  ) {
    return <Lottie animationData={Drizzle} loop={true} />;
  } else if ([63, 65, 66, 67].includes(weather?.weatherCode)) {
    return <Lottie animationData={Rainy} loop={true} />;
  } else if ([71, 73, 75, 77, 85, 86].includes(weather?.weatherCode)) {
    return <Lottie animationData={Snow} loop={true} />;
  } else if ([95, 96, 99].includes(weather?.weatherCode)) {
    return <Lottie animationData={Storm} loop={true} />;
  } else if ([45].includes(weather?.weatherCode)) {
    return weather?.isDay ? (
      <Lottie animationData={HazeDay} loop={true} />
    ) : (
      <Lottie animationData={HazeNight} loop={true} />
    );
  } else if ([48].includes(weather?.weatherCode)) {
    return <Lottie animationData={Cloudy} loop={true} />;
  } else {
    return <Lottie animationData={Sunny} loop={true} />;
  }
}

export const getWeatherIcon = (item: any, data: any) => {
  const timezoneOffset = data.city.timezone;
  const localTime = new Date((item.dt + timezoneOffset) * 1000);
  const hour = localTime.getHours();
  const isNight = hour >= 6 && hour < 18;
  const main = item.weather[0].main;
  switch (main) {
    case 'Clear':
      return isNight ? (
        <svg
          className='w-8 h-8 text-gray-300'
          viewBox='0 0 24 24'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z' />
        </svg>
      ) : (
        <svg
          className='w-8 h-8 text-yellow-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z' />
        </svg>
      );
    case 'Clouds':
      return (
        <svg
          className='w-8 h-8 text-gray-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z' />
        </svg>
      );
    case 'Rain':
      return (
        <svg
          className='w-8 h-8 text-blue-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z' />
        </svg>
      );
    case 'Snow':
      return (
        <svg
          className='w-8 h-8 text-blue-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z' />
        </svg>
      );
    case 'Drizzle':
      return (
        <svg
          className='w-8 h-8 text-blue-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z' />
        </svg>
      );
    default:
      return (
        <svg
          className='w-8 h-8 text-yellow-300'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z' />
        </svg>
      );
  }
};

export function getWeatherIconForecast(code: number) {
  if (code === 0) return '☀️';
  if (code === 1 || code === 2) return '🌤️';
  if (code === 3) return '☁️';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️'; // Drizzle
  if (code >= 61 && code <= 67) return '🌧️'; // Rain
  if (code >= 71 && code <= 77) return '❄️'; // Snow
  if (code >= 80 && code <= 82) return '🌦️'; // Showers
  if (code >= 95 && code <= 99) return '⛈️'; // Thunderstorm
  return '❓'; // Unknown
}

// weatherText.ts
export const weatherTextMap: Record<number, string> = {
  0: 'Clear sky ☀️',
  1: 'Mainly clear 🌤️',
  2: 'Partly cloudy ⛅',
  3: 'Overcast ☁️',
  45: 'Fog 🌫️',
  48: 'Depositing rime fog 🌫️',
  51: 'Light drizzle 🌦️',
  53: 'Moderate drizzle 🌧️',
  55: 'Dense drizzle 🌧️',
  61: 'Slight rain 🌦️',
  63: 'Moderate rain 🌧️',
  65: 'Heavy rain 🌧️',
  71: 'Slight snow ❄️',
  73: 'Moderate snow 🌨️',
  75: 'Heavy snow 🌨️',
  80: 'Rain showers 🌦️',
  95: 'Thunderstorm ⛈️',
  99: 'Heavy thunderstorm ⛈️',
};

export const getWeatherMapCode = (code: number, isDay: boolean) => {
  switch (code) {
    case 0:
      return isDay ? '☀️' : '🌙';
    case 1:
      return isDay ? '🌤️' : '🌙'; // Mainly clear
    case 2:
      return '⛅'; // Partly cloudy
    case 3:
      return '☁️'; // Overcast
    case 45:
      return '🌫️'; // Fog
    case 48:
      return '🌫️'; // Depositing rime fog
    case 51:
      return '🌦️'; // Drizzle: Light
    case 53:
      return '🌦️'; // Drizzle: Moderate
    case 55:
      return '🌧️'; // Drizzle: Dense
    case 56:
      return '🌧️❄️'; // Freezing drizzle: Light
    case 57:
      return '🌧️❄️'; // Freezing drizzle: Dense
    case 61:
      return '🌧️'; // Rain: Slight
    case 63:
      return '🌧️'; // Rain: Moderate
    case 65:
      return '🌧️'; // Rain: Heavy
    case 66:
      return '🌧️❄️'; // Freezing rain: Light
    case 67:
      return '🌧️❄️'; // Freezing rain: Heavy
    case 71:
      return '❄️'; // Snow fall: Slight
    case 73:
      return '❄️'; // Snow fall: Moderate
    case 75:
      return '❄️'; // Snow fall: Heavy
    case 77:
      return '❄️'; // Snow grains
    case 80:
      return '🌧️'; // Rain showers: Slight
    case 81:
      return '🌧️'; // Rain showers: Moderate
    case 82:
      return '🌧️'; // Rain showers: Violent
    case 85:
      return '❄️'; // Snow showers: Slight
    case 86:
      return '❄️'; // Snow showers: Heavy
    case 95:
      return '⛈️'; // Thunderstorm: Slight or moderate
    case 96:
      return '⛈️❄️'; // Thunderstorm with slight hail
    case 99:
      return '⛈️❄️'; // Thunderstorm with heavy hail
    default:
      return '❓'; // Unknown
  }
};

export const getWeatherText = (code: number, isDay: boolean): string => {
  if (code === 0) return isDay ? 'Sunny' : 'Night';
  if ([1, 2].includes(code)) return isDay ? 'Gloomy Day' : 'Gloomy Night';
  if ([3].includes(code)) return 'Cloudy';
  if ([45, 48].includes(code)) return 'Foggy';
  if ([51, 53, 55, 56, 57].includes(code)) return 'Drizzle';
  if ([61, 63, 65, 80, 81, 82].includes(code)) return 'Rainy';
  if ([66, 67].includes(code)) return 'Freezing Rain';
  if ([71, 73, 75, 85, 86, 77].includes(code)) return 'Snowy';
  if ([95, 96, 99].includes(code)) return 'Thunderstorm';
  return 'Unknown';
};
