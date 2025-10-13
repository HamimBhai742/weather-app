/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { WeatherForecastItem, WeatherResponse } from '@/types/types';

const OPEN_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;
export default function useWeather(city: string) {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<WeatherForecastItem[]>([]);
  const [fo, setFo] = useState(null);
  const [error, setError] = useState(null);
  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER}`
      );
      const { lat, lon } = res?.data?.coord ?? {};
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER}`;
      const re = await axios.get(url);
      const forecastList = re.data.list.slice(0, 8);
      setForecast(forecastList);
      setWeather(res?.data);
      setFo(re?.data);
    } catch (err: any) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return { weather, forecast, error, fo };
}
