export const API_KEY = 'b89a42a310db4390bb2135559231804';
import { renderBody, imgContainer } from './body';

export const weatherData = async function () {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=calgary&aqi=no`
    );
    const data = await res.json();

    console.log(data);
    const weather = {
      name: data.location.name,
      country: data.location.country,
      temperature_C: data.current.temp_c,
      temperature_F: data.current.temp_f,
      condition: data.current.condition.text,
      imgUrl: data.current.condition.icon,
    };

    return weather;
  } catch (err) {
    console.log(err);
  }
};

// return the Data from the fetch
export const displayWeather = async () => {
  const weatherInfo = await weatherData();

  // Use the render Data to display the weather Info
  renderData(weatherInfo);
};

// display the data on the screen

const renderData = function (x) {
  const container = document.querySelector('.img_container');
  container.innerHTML = `


  
  <span class="city-name">${x.name}, ${x.country}, ${x.condition}</span>
  <span>${x.temperature_C}</span>
  <img
    src="${x.imgUrl}"
    alt="${x.condition}"
    class="weather"
  />`;
};
