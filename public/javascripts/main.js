// let puertaDelSol = {lat: 40.4167278, lng: -3.7033387};

function startMap() {
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 10,
      center: {lat: 40.4167278, lng: -3.7033387}
    }
  );


  geolocalize().then(center => {
    map.setCenter(center);
  console.log(places)
    places.forEach(plc => {
      console.log("entra")
      new google.maps.Marker({
        position: {
          lat:plc.location.coordinates[0],
          lng:plc.location.coordinates[1]
        },
        map: map,
        title: plc.title
      });
    })
  
  }, false);
  
}

startMap();

function startMapCreate() {
  const map = new google.maps.Map(
    document.getElementById('mapCreate'),
    {
      zoom: 10,
      center: {lat: 40.4167278, lng: -3.7033387}
    }
  );
  }























// function getPlaces() {
//   axios.get("http://localhost:3000/api")
//   .then( response => {
//     placePlaces(response.data.places)
//   })
//   .catch(error => {
//     next(error)
//   })
// }

// markers = [];

// function placePlaces(places){
//     places.forEach(function(place){
//       const center = {
//         lat: place.location.coordinates[1],
//         lng: place.location.coordinates[0]
//       };
//       const pin = new google.maps.Marker({
//         position: center,
//         map: map,
//         title: place.title
//       });
//       markers.push(pin)
//     });
// }












// const drawMarkerAndCenter = (map, coords) => {
//   const myMarker = new google.maps.Marker({
//     position: coords,
//     map,
//   });
//   map.setCenter(coords)
// }

// const puertaDelSol = {lat: 43.4167278, lng: -3.7033387};

// const map = new google.maps.Map(
// document.getElementById('map'),
// {
//   zoom: 10,
//   center: puertaDelSol
// }
// );

// drawMarkerAndCenter(map, puertaDelSol);










