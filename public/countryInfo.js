var countries = [];
var capitals = [];

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
  console.log('capitals', capitals)
  console.log('countries', countries)
}

var populateList = function(capitals) {

  var select = document.getElementById('selection');

  for (city of capitals) {
    var eachOption = document.createElement('option')
    eachOption.innerText = city;
    selection.appendChild(eachOption)
  }

}

var onSelection = function(callback){ // callback is displayCity
  document.getElementById("selection").addEventListener("change", callback);
}

var displayCity = function(){
  var center = {};
  for (country of countries){
    if (selection.value === country.capital){
      var latlng = country.latlng
      center = {lat: latlng[0], lng: latlng[1]}
      console.log('center', center)
    }
  }

  var zoom = 6;
  var container = document.getElementById('map-container');
  var newMap = new MapWrapper(center, zoom, container);

  // var marker = newMap.addMarker(center);
  // newMap.addClickEvent();

  // var contentString = "St Kilda is the most remote part of the UK";
  // var infowindow = new google.maps.InfoWindow({
  //    content: contentString
  //  });
  // infowindow.open(this.googleMap, marker);
}

// recenter map
// set marker
// call weather info
// set info window to display weather info


/////////////////////////////////////////////////////////////////////////

var makeRequestWeather = function(url, callback) { //callback = request complete

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestCompleteWeather = function() {
  if(this.status !== 200) return;
    var jsonString = this.responseText;
    var weather = JSON.parse(jsonString);
    
    console.log('weather object', weather)
}

var getURL = function(city) {
  url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&cnt=10&APPID=4e6b793f0a5f95e19b8f1d3064037ca0'
  return url;
}





