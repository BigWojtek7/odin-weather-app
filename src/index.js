import "./style.css";

const form = document.querySelector("form");
const cityInput = document.getElementById("city")

async function getWeather(city){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1037f513ffb64c10b92100001242603&q=${city}`, { mode: "cors" });
  const weatherApi = await response.json();
  console.log(weatherApi);

}

function submitHandler(e){
  e.preventDefault();
  getWeather(cityInput.value)
}

// function displayWeather(weather){
//   ...
// }

form.addEventListener("submit", submitHandler)

// getWeather();