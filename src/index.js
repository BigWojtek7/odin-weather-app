import "./style.css";


async function getWeather(){
  const response = await fetch("https://api.weatherapi.com/v1/current.json?key=1037f513ffb64c10b92100001242603&q=warsaw", { mode: "cors" });
  const weatherApi = await response.json();
  console.log(weatherApi);
}

getWeather();