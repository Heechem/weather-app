import { API_KEY } from './Weatherapi';

export const weatherForcast = async function () {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=calgary&days=5&aqi=no`
    );
    const data = await res.json();
    const [...forecast] = Object.values(data.forecast);
    console.log(forecast[0]);
    const weather = {
      name: data.location.name,
      country: data.location.country,
      temperature_C: data.current.temp_c,
      temperature_F: data.current.temp_f,
      condition: data.current.condition.text,
      imgUrl: data.current.condition.icon,
    };

    const forecastDay = forecast.forEach((x) => {
      return {
        name: data.location.name,
        country: data.location.country,
        temperature_C: data.current.temp_c,
        temperature_F: data.current.temp_f,
        condition: data.current.condition.text,
        imgUrl: data.current.condition.icon,
      };
    });

    console.log(forecastDay);
    return weather;
  } catch (err) {
    console.log(err);
  }
};
