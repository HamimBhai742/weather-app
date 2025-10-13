/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';

export function WeatherIcon({ weather }: { weather: any }) {
  if (!weather || !weather[0]) return null;

  const main = weather[0].main;
  const iconCode = weather[0].icon; // "01d", "02n", etc.

  const isDay = iconCode.includes('d');

  switch (main) {
    case 'Clear':
      return isDay ? <WiDaySunny size={80} /> : <WiNightClear size={80} />;
    case 'Clouds':
      return <WiCloud size={80} />;
    case 'Rain':
    case 'Drizzle':
      return <WiRain size={80} />;
    case 'Snow':
      return <WiSnow size={80} />;
    case 'Thunderstorm':
      return <WiThunderstorm size={80} />;
    default:
      return <WiDaySunny size={80} />; // fallback
  }
}
