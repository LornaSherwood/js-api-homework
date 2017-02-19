
var MapWrapper = function(coords, zoom, container) {
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  }); 
}

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  },

  displayCity: function(){ //currently uses city but displays country
    
    getURL();
    var capitalUrl = urls[0];

    makeRequestWeather(capitalUrl, requestCompleteWeather);
    
    var center = {};
    for (country of countries){
      if (selection.value === country.capital){
        var latlng = country.latlng
        center = {lat: latlng[0], lng: latlng[1]}
      }
    }

    //var center = {lat: weather.coord.lat, lng: weather.coord.lon};

    var zoom = 6;
    var container = document.getElementById('map-container');
    var newMap = new MapWrapper(center, zoom, container);
    var marker = newMap.addMarker(center);

 
  }
}
