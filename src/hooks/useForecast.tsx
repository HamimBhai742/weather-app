/* eslint-disable react-hooks/exhaustive-deps */
import { getCoordinates } from '@/helpers/getTimeZone';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useForecast(city: string) {
  const [forecast7days, setForecast7days] = useState();
  const now = new Date();
  const fetchForecast = async () => {
    try {
      const { lat, lon, timezone } = await getCoordinates(city);
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=${timezone}`
      );

      const r = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,weathercode&daily=sunrise,sunset&timezone=auto`
      );

      const w = r.data.hourly.time
        .filter((t) => new Date(t) >= now)
        .slice(0, 24);
      console.log(r.data);
      console.log(w)
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
