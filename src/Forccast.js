import { API_KEY } from './Weatherapi';
import { global, globalCity } from './city';
import { renderData } from './renderData';

// Fetch the data from the API
export const weatherForcast = async function (x) {
  if (!x) alert('city is missing');
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${x}&days=4&aqi=no&lang=fr,`
    );
    const data = await res.json();
    const [...forecast] = Object.values(data.forecast);

    const weather = {
      name: data.location.name,
      day: data.location.localtime,
      country: data.location.country,
      temperature_C: data.current.temp_c,
      temperature_F: data.current.temp_f,
      condition: data.current.condition.text,
      imgUrl: data.current.condition.icon,
    };
    console.log(data, weather);

    const forecastData = forecast[0].map(({ date, day }) => ({
      date,
      maxTemp_C: day.maxtemp_c,
      minTemp_C: day.mintemp_c,
      maxTemp_F: day.maxtemp_f,
      minTemp_F: day.mintemp_f,
      condition: day.condition.text,
      imgUrl: day.condition.icon,
    }));

    return { forecastData, weather };
  } catch (err) {
    alert('Please enter a correct city name in English');
  }
};

// get the weather forecast Data and dispaly them

export const displayforcast = async function (x) {
  const { forecastData, weather } = await weatherForcast(x);
  renderData(weather, forecastData);
};
