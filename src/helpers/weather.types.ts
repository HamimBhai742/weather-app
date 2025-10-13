/* eslint-disable @typescript-eslint/no-explicit-any */
export function WeatherType( weather: any ) {
  if (!weather || !weather[0]) return null;

  const main = weather[0].main;
  const iconCode = weather[0].icon;

  const isDay = iconCode.includes('d');

  switch (main) {
    case 'Clear':
      return isDay ? 'Sunny' : 'Night';
    case 'Clouds':
      return 'Cloudy';
    case 'Rain':
    case 'Drizzle':
      return 'Rainy';
    case 'Snow':
      return 'Snow';
    case 'Thunderstorm':
      return 'Storm';
    default:
      return 'Sunny';
  }
}
