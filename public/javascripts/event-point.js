const Localizacion = window.log;

function startMap(){
let map = new google.maps.Map(
  document.getElementById('eventMap'),
  {
    zoom: 14,
    center: {
      lat: Localizacion.coordinates[0],
      lng: Localizacion.coordinates[1]
    }
  })
  const myMarker = new google.maps.Marker({
    position: {
      lat: Localizacion.coordinates[0],
      lng: Localizacion.coordinates[1]
    },
    map: map,
    title: "I'm here"
  });
}
console.log(Localizacion.coordinates)
startMap();
