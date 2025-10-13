import axios from 'axios';

export const getCoordinates = async (city = 'Dhaka') => {
  const res = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  console.log(res);
  if (res.data.results && res.data.results.length > 0) {
    return {
      lat: res.data.results[0].latitude,
      lon: res.data.results[0].longitude,
      timezone: res.data.results[0].timezone,
    };
  } else {
    throw new Error('City not found');
  }
};
