$(document).on("ready page:load", function(){
  $('#title').text("Google map test");

  function location(){
      // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    
      $('#abc').text("fuckyou");
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  }
  
  function initialize( ) {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(37.449997, 126.952488),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    
    google.maps.event.addListener(map, 'rightclick', function(event){
      templocation = event.latLng;
      //map.setCenter(templocation);
      $("#getcolat").val(templocation.lat());
      $("#getcolng").val(templocation.lng());
      document.getElementById("gettestlat").innerHTML=templocation.lat();
      document.getElementById("gettestlng").innerHTML=templocation.lng();
      var mark = new google.maps.Marker({
        position: templocation,
        map: map
      })
    })
  }
  
  initialize();
  location();

});