
let directionsService = new google.maps.DirectionsService;
let directionsDisplay = new google.maps.DirectionsRenderer;

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


let steps = [];

function drawRoute() {
  events.forEach(lug => {
    steps.push(
      {
        location: {
          lat: lug.location.coordinates[0],
          lng: lug.location.coordinates[1]
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










console.log(steps);
function upload(){
  const directionRequest = {
    origin: { lat: 41.3977381, lng: 2.190471916 },
    destination: { lat: 40.3977381, lng: -3 },
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
const directionRequest = {
  origin: { lat: 41.3977381, lng: 2.190471916 },
  destination: { lat: 40.3977381, lng: -3 },
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


// directionsDisplay.setMap(map)


