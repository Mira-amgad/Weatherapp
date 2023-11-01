let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day = days[now.getDay()];
let time = now.getHours();
let minutes = now.getMinutes();

let date = document.querySelector("#Date");
date.innerHTML = `${day} ${time}: ${minutes}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-submit");
  let country = document.querySelector("#Country");
  country.innerHTML = city.value;
  function temp(response) {
    let temperature = document.querySelector("#row1");
    let weather = Math.round(response.data.main.temp);
    temperature.innerHTML = weather;
    let Humidity = document.querySelector("#Humidity");
    Humidity.innerHTML = response.data.main.humidity;
    let Wind = document.querySelector("#Wind");
    let speed = Math.round(response.data.wind.speed);
    Wind.innerHTML = speed;
  }

  let apiKey = "1c47cb7de8db7253e5f709b37d433711";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(temp);
}

let form = document.querySelector("#form");
form.addEventListener("submit", search);

function showPosition(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "1c47cb7de8db7253e5f709b37d433711";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function temperature(response) {
    let h1 = document.querySelector("#row1");
    let temperature = Math.round(response.data.main.temp);
    h1.innerHTML = temperature;
    let country = document.querySelector("#Country");
    country.innerHTML = response.data.name;
    let Humidity = document.querySelector("#Humidity");
    Humidity.innerHTML = response.data.main.humidity;
    let windSpeed = document.querySelector("#Wind");
    let speed = Math.round(response.data.wind.speed);
    windSpeed.innerHTML = speed;
  }
  axios.get(apiUrl).then(temperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let current = document.querySelector("button");
current.addEventListener("click", getCurrentPosition);
