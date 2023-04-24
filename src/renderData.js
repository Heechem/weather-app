// function that render the API data
export const renderData = function (x, y) {
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
  
    
    <span class="city-name">${x.name}, ${x.country},${x.day} </span>
    <br><span>${x.condition} ${x.temperature_C}</span>
    <img
      src="${x.imgUrl}"
      alt="${x.condition}"
      class="weather"
      <div class="forecast-container">${forecastHTML}</div>
    `;
};
