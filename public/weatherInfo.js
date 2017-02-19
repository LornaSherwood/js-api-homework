

var makeRequestWeather = function(url, callback) { //callback = request complete
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestCompleteWeather = function() {
  if(this.status !== 200) return;
    var jsonString = this.responseText;
    weather = JSON.parse(jsonString);
    displayWeather(weather);  
}

var displayWeather = function(weather){
  var weatherInfo = document.getElementById('info-container');
  weatherInfo.innerHTML = '';
  var main = document.getElementById('main');
  var info1 = document.createElement('p');
  info1.innerHTML = '<h4>' + weather.weather[0].main + "</h4>";
  var info2 = document.createElement('p');
  info2.innerHTML = "Description: " + weather.weather[0].description;
  var info3 = document.createElement('p');
  info3.innerHTML = "Humidity: " + weather.main.humidity + " %";
  var info4 = document.createElement('p');
  info4.innerHTML = "Temperature " + (weather.main.temp - 273.15).toFixed(1) + " C";
  var info5 = document.createElement('p');
  info5.innerHTML = "Wind Speed: " + weather.wind.speed + " m/s";
  
  weatherInfo.appendChild(info1);
  weatherInfo.appendChild(info2);
  weatherInfo.appendChild(info3);
  weatherInfo.appendChild(info4);
  weatherInfo.appendChild(info5);
 }










