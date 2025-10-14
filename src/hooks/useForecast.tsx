/* eslint-disable react-hooks/exhaustive-deps */
import { getCoordinates } from '@/helpers/getTimeZone';
import type { IForecast7DaysCard, IHourlyForecast, ISun } from '@/types/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useForecast(city = 'Dhaka') {
  const [forecast7days, setForecast7days] = useState<IForecast7DaysCard>();
  const [hourlyForecast, setHourlyForecast] = useState<IHourlyForecast>();
  const [loading, setLoading] = useState(false);
  const [sun, setSun] = useState<ISun>();
  const fetchForecast = async () => {
    setLoading(true);
    try {
      const { lat, lon, timezone } = await getCoordinates(city);
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=${timezone}`
      );

      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode&daily=sunrise,sunset&timezone=auto`
      );
      setSun(response?.data?.daily);
      setHourlyForecast(response?.data?.hourly);
      setForecast7days(res?.data?.daily);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [city]);
  return { forecast7days, hourlyForecast, sun, loading };
}
