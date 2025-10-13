/* eslint-disable react-hooks/exhaustive-deps */
import { getCoordinates } from '@/helpers/getTimeZone';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useForecast(city: string) {
  const [forecast7days, setForecast7days] = useState();
  const fetchForecast = async () => {
    try {
      const { lat, lon, timezone } = await getCoordinates(city);
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=${timezone}`
      );
      console.log(res.data);
      setForecast7days(res.data.daily);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, [city]);
  return { forecast7days };
}
