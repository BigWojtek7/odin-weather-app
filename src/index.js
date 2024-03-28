import "./style.css";

const form = document.querySelector("form");

async function getWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=1037f513ffb64c10b92100001242603&q=${city}`,
    { mode: "cors" },
  );
  const weatherApi = await response.json();
  console.log(weatherApi);
  displayWeather(weatherApi)
}

function submitHandler(e) {
  const cityInput = document.getElementById("city").value;

  e.preventDefault();
  getWeather(cityInput);
}

function displayWeather(weather) {
  // const weatherContainer = document.querySelector(".weather");

  const cityNameDiv = document.querySelector(".city");
  const tempDiv = document.querySelector(".temp");
  const skyDiv = document.querySelector(".sky");

  console.log(`wojtek${weather.current.temp_c}`)
  cityNameDiv.textContent = `${weather.location.name}`
  tempDiv.textContent = `${weather.current.temp_c}\u2103`
  skyDiv.innerHTML = `<img src=http:${weather.current.condition.icon}><p>${weather.current.condition.text}</p>`
}

form.addEventListener("submit", submitHandler);

getWeather("Warsaw")
// getWeather();
