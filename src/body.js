export const renderBody = function () {
  const mainConainter = document.querySelector('.main-conainter');

  mainConainter.insertAdjacentHTML('afterbegin', createForm);
  imgContainer();
};

// create the form

const createForm = `
  
  <h1 class="title">Heech Weather APP</h1>
  <div class="container">
    <label for="city">Please enter your location</label>
    <input
      type="text"
      class="city_input"
      id="city"
      placeholder="city"
      autocomplete="off"
    />
    <button class="btn">submit</button>
  </div>`;

//create the IMG container

const imgContainer = function () {
  const mainConainter = document.querySelector('.main-conainter');
  const containerImg = document.createElement('div');
  containerImg.classList.add('img_container');
  const weatherInfo = `
            <span class="city-name">City</span>
            <span>Temperature</span>
            <img
              src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              class="weather"
            />`;

  //   const citySpan = document.createElement('span');
  //   citySpan.classList.add('city-name');
  //   const temperatureSpan = document.createElement('span');
  //   const weatherImg = document.createElement('img');
  //   weatherImg.classList.add('weather');
  containerImg.innerHTML = weatherInfo;
  console.log(containerImg);
  mainConainter.insertAdjacentElement('beforeend', containerImg);
};
