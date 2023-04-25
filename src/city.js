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

// change the temperature

export const temp = function () {
  window.addEventListener('load', () => {
    const btnTemp = document.querySelector('.temperature');
    btnTemp.addEventListener('click', (e) => {
      e.preventDefault();
      const tempSpan = document.querySelectorAll('.temp_span');
      tempSpan.forEach((x) => {
        x.classList.toggle('hidden');
      });
    });
  });
};

temp();
