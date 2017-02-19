var allCapitalWeather = [];

var initialize = function(){
  var center = {lat: 0, lng: -0};
  var zoom = 10;
  var container = document.getElementById('map-container');
  var map = new MapWrapper(center, zoom, container);

  map.addMarker(center);

  makeRequest("https://restcountries.eu/rest/v1", requestCompleteCountries); 
  onSelection(map.displayCity); //move map to new country
}


window.onload = initialize;
