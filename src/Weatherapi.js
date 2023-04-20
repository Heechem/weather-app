const API_KEY = 'b89a42a310db4390bb2135559231804';
import { renderBody } from './body';

export const weatherData = async function () {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=calgary&aqi=no`
    );
    const data = await res.json();
    const loc = data.location;
    console.log(loc, data);
    const infos = loc.map((x) => {
      name: x.name;
    });

    console.log(infos);
  } catch (err) {
    console.log(err);
  }
};
