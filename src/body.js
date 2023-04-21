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

export const imgContainer = function (x) {
  const mainConainter = document.querySelector('.main-conainter');
  const containerImg = document.createElement('div');
  containerImg.classList.add('img_container');
  mainConainter.insertAdjacentElement('beforeend', containerImg);
};
