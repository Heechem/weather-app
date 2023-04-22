import { API_KEY } from './Weatherapi';
// import { renderData } from './Weatherapi';

// Fetch the data from the API
export const weatherForcast = async function () {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=calgary&days=4&aqi=no`
    );
    const data = await res.json();
    const [...forecast] = Object.values(data.forecast);

    const weather = {
      name: data.location.name,
      country: data.location.country,
      temperature_C: data.current.temp_c,
      temperature_F: data.current.temp_f,
      condition: data.current.condition.text,
      imgUrl: data.current.condition.icon,
    };

    const forecastData = forecast[0].map(({ date, day }) => ({
      date,
      maxTemp_C: day.maxtemp_c,
      minTemp_C: day.mintemp_c,
      maxTemp_F: day.maxtemp_f,
      minTemp_F: day.mintemp_f,
      condition: day.condition.text,
      imgUrl: day.condition.icon,
    }));

    console.log(data, forecast);

    return { forecastData, weather };
  } catch (err) {
    console.log(err);
  }
};

// get the weather forecast Data and dispaly them

export const displayforcast = async () => {
  const { forecastData, weather } = await weatherForcast();
  renderData(weather, forecastData);
};

// function that render the API data
const renderData = function (x, y) {
  const container = document.querySelector('.img_container');
  let forecastHTML = '';

  y.forEach((data) => {
    forecastHTML += `
      <div class="forecast-day">
        <span class="forecast-date">${data.date}, ${data.condition}</span>
        <img src="${data.imgUrl}" alt="${data.condition}" class="forecast-icon"/>
        <span class="forecast-temp">${data.maxTemp_C}°C / ${data.minTemp_C}°C</span>
      </div>
    `;
  });

  container.innerHTML = `

  
  <span class="city-name">${x.name}, ${x.country}, ${x.condition}</span>
  <span>${x.temperature_C}</span>
  <img
    src="${x.imgUrl}"
    alt="${x.condition}"
    class="weather"
    <div class="forecast-container">${forecastHTML}</div>
  `;
};
