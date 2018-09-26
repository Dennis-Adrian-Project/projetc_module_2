
let puertaDelSol = { lat: 40.4167278, lng: -3.7033387 };
// let directionsService = new google.maps.DirectionsService;
// let directionsDisplay = new google.maps.DirectionsRenderer;
let map;


function startMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 10,
      center: puertaDelSol
    }
  );

  const geolocalize = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) reject('No geolocation available');
      navigator.geolocation.getCurrentPosition((pos) => {
        const center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        resolve(center);
      }, reject)
    });
  }

}
startMap();


// events.forEach(plc => {
//   new google.maps.Marker({
//     position: {
//       lat: plc.location.coordinates[0],
//       lng: plc.location.coordinates[1]
//     },
//     map: map,
//     title: plc.title
//   });
// });


// let steps = [];

// events.forEach(lug => {
//   if(lug.matter == "Personajes") 
//   {steps.push(
// {  location: {
//       lat: lug.location.coordinates[0],
//       lng: lug.location.coordinates[1]
//     }, stopover: true }
//   )}
// })

// console.log(steps);

// const directionRequest = {
//   origin: { lat: 41.3977381, lng: 2.190471916 },
//   destination: { lat: 40.3977381, lng: -3 },
//   waypoints: steps,
//   optimizeWaypoints: true,
//   travelMode: 'DRIVING'
// };

// directionsService.route(
//   directionRequest,
//   function (response, status) {
//     if (status === 'OK') {
//       // everything is ok
//       directionsDisplay.setDirections(response);

//     } else {
//       // something went wrong
//       window.alert('Directions request failed due to ' + status);
//     }
//   }
// );

// function prueba() {
// directionsDisplay.setMap(map);
// }


// map.addListener('click',function(e) {
//   let newLoc = {lat: e.latLng.lat(), lng: e.latLng.lng()};
//   console.log(newLoc);
// })
















// document.addEventListener('DOMContentLoaded', () => {

//   const map = new google.maps.Map(document.getElementById('mapCreate'), {
//     zoom: 13,
//   });

//   const setPosOnForm = (latlng) => {
//     document.getElementById('lat-pos').value = latlng.lat;
//     document.getElementById('lng-pos').value = latlng.lng;

//   }

//   let marker;

//   map.addListener('click', function(e) {
//     const clickPos = {
//       lat:e.latLng.lat(),
//       lng:e.latLng.lng()
//     }
//     console.log(clickPos);
//     marker.setPosition(clickPos);
//     setPosOnForm(clickPos)
//   });

//   geolocalize().then(center => {
//     map.setCenter(center);
//     marker = new google.maps.Marker({
//       position: center,
//       map: map
//     });
//     setPosOnForm(center);
//   });


// }, false);