const apiKey = "45ebbd33aab5c77a18994061b0a6ee6a"

const searchBtn = document.getElementById("city-search")
//works

const getGeolocation = (city) => {
 fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`).then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // Parse the response body as JSON
  return response.json();
 }).then(geoData => {
   getCurrentWeather(geoData[0].lat, geoData[0].lon);
 })
}
const getCurrentWeather = (lat, lon) => {
  const currentURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
  fetch(currentURL).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  }).then(data => {
   buildWidget(data)
  })
}
const buildWidget = (data) => {
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.classList.remove("hide");
  const currentCity = document.getElementById("current-city");
  // currentCity.textContent = data.name;
  // const currentWeather = document.getElementById("current-weather")
  // const currentTemp = document.createElement("li");
  // currentTemp.setAttribute("class", "weather-item");
  // currentTemp.textContent = "Current Temp: " + data.main.temp;
  // currentWeather.append(currentTemp)
  // const dailyHigh = document.createElement("li");
  // dailyHigh.setAttribute("class","weather-item")
  // dailyHigh.textContent = "Today's High is: " + data.main.temp_max;
  // currentWeather.append(dailyHigh)
  // const dailyLow = document.createElement("li");
  // dailyLow.setAttribute("class","weather-item")
  // dailyLow.textContent = "Today's Low is: " + data.main.temp_min;
  // currentWeather.append(dailyLow)
  
  console.log(data)
}
searchBtn.addEventListener("click", function(){
  const cityName = this.previousElementSibling.value
  getGeolocation(cityName)
})
