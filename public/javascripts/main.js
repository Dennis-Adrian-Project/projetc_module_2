let puertaDelSol = { lat: 40.4167278, lng: -3.7033387 };
let map;
let cent;


function startMap() {
  

  const geolocalize = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) reject('No geolocation available');
      navigator.geolocation.getCurrentPosition((pos) => {
        const center = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        cent = center;
        resolve(center);
      }, reject)
    });
  }
  geolocalize().then((center) => {
    map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 14,
        center: center
      }
    );
    events.forEach(plc => {
      new google.maps.Marker({
        position: {
          lat: plc.location.coordinates[0],
          lng: plc.location.coordinates[1]
        },
        map: map,
        title: plc.title
      });
    });
  })
}
startMap();



let directionsService = new google.maps.DirectionsService;
let directionsDisplay = new google.maps.DirectionsRenderer;




let steps = [];

function drawRoute() {
  events.forEach(lug => {
    steps.push(
      {
        location: {
          lat: Number(lug.location.coordinates[0]),
          lng: Number(lug.location.coordinates[1])
        }, stopover: true
      }
    )
  })
upload()

  directionsDisplay.setMap(map)
}

function drawCharRoute() {
  steps = [];
  events.forEach(lug => {
    if(lug.matter == "Personajes")
 {   steps.push(
      {
        location: {
          lat: lug.location.coordinates[0],
          lng: lug.location.coordinates[1]
        }, stopover: true
      }
    )}
  })
upload()
  directionsDisplay.setMap(map)
}

function drawArtRoute() {
  steps = [];
  events.forEach(lug => {
    if(lug.matter == "Arte")
 {   steps.push(
      {
        location: {
          lat: lug.location.coordinates[0],
          lng: lug.location.coordinates[1]
        }, stopover: true
      }
    )}
  })
upload()
  directionsDisplay.setMap(map)
}

function drawStoryRoute() {
  steps = [];
  events.forEach(lug => {
    if(lug.matter == "Anecdota")
 {   steps.push(
      {
        location: {
          lat: lug.location.coordinates[0],
          lng: lug.location.coordinates[1]
        }, stopover: true
      }
    )}
  })
upload()
  directionsDisplay.setMap(map)
}


function upload(){

  const directionRequest = {
    origin: cent,
    destination:{ lat: 40.4167278, lng: -3.7033387 },
    destination: steps[steps.length - 1].location,
    waypoints: steps,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  };
  
  directionsService.route(
    directionRequest,
    function (response, status) {
      if (status === 'OK') {
        // everything is ok
        directionsDisplay.setDirections(response);
  
      } else {
        // something went wrong
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
  
}
