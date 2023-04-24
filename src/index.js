import { renderBody } from './body';
import { weatherData, displayWeather } from './Weatherapi';
import { weatherForcast, displayforcast } from './Forccast';
import { global, globalCity } from './city';

renderBody();
global();
// if (!globalCity) {
//   alert('Please enter a city');
// } else {
//   global();
// }
