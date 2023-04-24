import { weatherForcast, displayforcast } from './Forccast';

// get the city

export const global = function () {
  window.addEventListener('load', () => {
    const input = document.querySelector('input');
    const btn = document.querySelector('button');
    console.log(input);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const city = input.value;

      input.value = '';

      // forecaste the weather at the submit button
      displayforcast(city);
    });
  });
};
