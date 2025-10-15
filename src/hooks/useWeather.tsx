/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Weather } from '@/types/types';
import { getCoordinates } from '@/helpers/getTimeZone';

// const OPEN_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;
export default function useWeather(city = 'Dhaka') {
  // const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [we, setWe] = useState<Weather | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [err, setErr] = useState(null);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const fetchWeather = async () => {
    setLoadingWeather(true);
    try {
      // const res = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER}`
      // );

      const { lat, lon, timezone } = await getCoordinates(city);
      const r = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weathercode,wind_speed_10m,wind_direction_10m,is_day&daily=sunrise,sunset&timezone=${timezone}`
      );
      const wea = {
        city: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
        temp: r?.data?.current?.temperature_2m,
        humidity: r?.data?.current?.relative_humidity_2m,
        feel_like: r?.data?.current?.apparent_temperature,
        windSpeed: r?.data?.current?.wind_speed_10m,
        sunrise: r?.data?.daily?.sunrise[0],
        sunset: r?.data?.daily?.sunset[0],
        precipitation: r?.data?.current?.precipitation,
        isDay: r?.data?.current?.is_day === 1,
        weatherCode: r?.data?.current?.weathercode,
        currentDate,
      };
      console.log(wea);
      setWe(wea);
      // setWeather(res?.data);
      setLoadingWeather(false);
    } catch (err: any) {
      console.log(err);
      setErr(err?.message);
    } finally {
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return {  err, loadingWeather, we };
}
