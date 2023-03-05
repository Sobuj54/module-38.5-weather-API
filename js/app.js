// never leave API KEY inside JS file like we are doing right now
const API_KEY = `d65ed14abc692e9bf940b7ae2338fa82`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  console.log(data);
  const temperature = document.getElementById("temperature");
  temperature.innerText = `${data.main.temp}`;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  loadTemperature(city);
});

document
  .getElementById("search-field")
  .addEventListener("keypress", function (event) {
    if (event.key) {
      const searchField = document.getElementById("search-field");
      const city = searchField.value;
      loadTemperature(city);
    }
  });

loadTemperature("dhaka");