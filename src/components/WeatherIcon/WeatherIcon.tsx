/* eslint-disable @typescript-eslint/no-explicit-any */
import Night from '../../../lottieFiles/night.json';
import Sunny from '../../../lottieFiles/sunny.json';
import Cloudy from '../../../lottieFiles/Cloudy.json';
import Rainy from '../../../lottieFiles/rainy.json';
import Snow from '../../../lottieFiles/snow.json';
import Storm from '../../../lottieFiles/strom.json';
import Lottie from 'lottie-react';
export function WeatherIcon({ weather }: { weather: any }) {
  if (!weather || !weather[0]) return null;

  const main = weather[0].main;
  const iconCode = weather[0].icon; // "01d", "02n", etc.

  const isDay = iconCode.includes('d');

  switch (main) {
    case 'Clear':
      return isDay ? (
        <Lottie animationData={Sunny} loop={true} />
      ) : (
        <Lottie animationData={Night} loop={true} />
      );
    case 'Clouds':
      return <Lottie animationData={Cloudy} loop={true} />;
    case 'Rain':
    case 'Drizzle':
      return <Lottie animationData={Rainy} loop={true} />;
    case 'Snow':
      return <Lottie animationData={Snow} loop={true} />;
    case 'Thunderstorm':
      return <Lottie animationData={Storm} loop={true} />;
    default:
      return <Lottie animationData={Sunny} loop={true} />;
  }
}
