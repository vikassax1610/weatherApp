const API_KEY = "b3b05f8ce7ecc4c14afbb3855139d976";
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == 404) {
    weather.innerHTML = `<h2>City not found</h2>`;
    return;
  }
  console.log(data);
  weather.innerHTML = ` <div>
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>

  <div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main}</h4>
  </div>

</div>`;
};
form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
const converterForm = document.getElementById('converterForm');
const tempCelsiusInput = document.getElementById('tempCelsius');
const convertedTemperatureOutput = document.getElementById('convertedTemperature');

converterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const tempCelsius = parseFloat(tempCelsiusInput.value);
  const tempFahrenheit = (tempCelsius * 9/5) + 32;
  
  convertedTemperatureOutput.textContent = `${tempCelsius}°C is ${tempFahrenheit.toFixed(2)}°F`;
});