
let puertaDelSol = { lat: 40.4167278, lng: -3.7033387 };

function startNewMap() {
  map = new google.maps.Map(
    document.getElementById('mapCreate'),
    {
      zoom: 10,
      center: puertaDelSol
    }
  )};

  startNewMap();

  map.addListener('click',function(e) {
    document.getElementById("lat-pos").value =  e.latLng.lat();
    document.getElementById("lng-pos").value =  e.latLng.lng();

  })

  