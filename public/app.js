var allCapitalWeather = [];

var initialize = function(){
  var center = {lat: 40.712274, lng: -74.00594};
  var zoom = 10;
  var container = document.getElementById('map-container');
  var map = new MapWrapper(center, zoom, container);
  var button = document.querySelector('button');
  

  map.addMarker(center);
  button.onclick = handleButtonClick;
  makeRequest("https://restcountries.eu/rest/v1", requestCompleteCountries); //

  
  makeRequestWeather(getURL('London'), requestCompleteWeather);
  onSelection(displayCity);



}

var handleButtonClick = function(){
  var center = {lat: 57.813532, lng: -8.585495};
  var zoom = 6;
  var container = document.getElementById('map-container');
  var newMap = new MapWrapper(center, zoom, container);

  var marker = newMap.addMarker(center);
}

///////////////////////////////////////////////// Countries

// var makeRequest = function(url, callback) {

//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// }

// var requestComplete = function() {

//   if(this.status !== 200) return;
//     var jsonString = this.responseText; 
//     countries = JSON.parse(jsonString);
//     var country = countries[45];

//     console.log(country.capital)
//   }

  // var onSelectClick = function(){
  //   var url = "https://restcountries.eu/rest/v1";
  //   makeRequest("https://restcountries.eu/rest/v1", requestComplete);
  // }

//////////////////////////////////////////////////////////////




window.onload = initialize;
