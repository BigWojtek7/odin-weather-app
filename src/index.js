import "./style.css";

const form = document.querySelector("form");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1037f513ffb64c10b92100001242603&q=${city}`,
      { mode: "cors" },
    );
    if (response.ok) {
      const weatherApi = await response.json();
      displayWeather(weatherApi);
    } else {
      console.log(`Network error : ${response.status}`);
    }
  } catch (err) {
    console.log(err);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const cityInput = document.getElementById("city").value;
  getWeather(cityInput);
}

const tempDiv = document.querySelector(".temp");

function displayWeather(weather) {

  const cityNameDiv = document.querySelector(".city");
  const tempUnit = document.getElementById("temp-unit");

  const skyDiv = document.querySelector(".sky");

  cityNameDiv.textContent = `${weather.location.name}`;

  tempDiv.textContent = `${weather.current.temp_c}\u2103`;
  if (tempUnit.checked) tempDiv.textContent = `${weather.current.temp_f}\u2109`;

  skyDiv.innerHTML = `<img src=http:${weather.current.condition.icon}><p>${weather.current.condition.text}</p>`;
}

form.addEventListener("submit", submitHandler);

getWeather("Warsaw");

