/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { WeatherResponse } from '@/types/types';

const OPEN_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather(city = 'Dhaka') {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState(null);
  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER}`
      );
      setWeather(res?.data);
    } catch (err: any) {

      setError(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return { weather, error };
}
