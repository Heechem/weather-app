// function that render the API data
export const renderData = function (x, y) {
  const container = document.querySelector('.img_container');
  let forecastHTML = '';

  y.forEach((data) => {
    forecastHTML += `
        <div class="forecast-day">
          <span class="forecast-date">${data.date}, ${data.condition}</span>
          <img src="${data.imgUrl}" alt="${data.condition}" class="forecast-icon"/>
          <span class="forecast-temp temp_span">${data.maxTemp_C}°C / ${data.minTemp_C}°C</span>
          <span class="forecast-temp temp_span hidden">${data.maxTemp_F}°F / ${data.minTemp_F}°F</span>
        </div>
      `;
  });

  container.innerHTML = `
  
    
    <span class="city-name">${x.name}<br> ${x.country}<br>${x.day} </span>
    <br><span>${x.condition}</span><span class="temp_span">${x.temperature_C}C°</span> <span class="temp_span hidden">${x.temperature_F}F°</span>
    <img
      src="${x.imgUrl}"
      alt="${x.condition}"
      class="weather">
      <div class="forecast-container">${forecastHTML}</div>
    `;
};
