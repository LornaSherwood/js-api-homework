var countries = [];
var capitals = [];
var urls = [];

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestCompleteCountries = function() {

  if(this.status !== 200) return;
    var jsonString = this.responseText; 
    countries = JSON.parse(jsonString);
    getCapitals(countries);
    capitals.sort();

    populateList(capitals);
  }

var getCapitals = function(countries){
  for (country of countries){
    if (country.capital !== ""){ 
    capitals.push(country.capital)
    }
  }
}

var populateList = function(capitals) {

  var select = document.getElementById('selection');

  for (country of capitals) {
    var eachOption = document.createElement('option')
    eachOption.innerText = country;
    selection.appendChild(eachOption)
  }

}

var onSelection = function(callback){ // callback is displayCity
  document.getElementById("selection").addEventListener("change", callback);
}

var getURL = function() {
  var city = selection.value;
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&cnt=10&APPID=4e6b793f0a5f95e19b8f1d3064037ca0';
  urls.push(url);
}
