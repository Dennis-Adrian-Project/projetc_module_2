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

// ------------------------------------//

// var overlay;
// aMapverlay.prototype = new google.maps.OverlayView();



// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: puertaDelSol,
//     mapTypeId: 'satellite'
//   });
  
//   var bounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(40.406503, -3.732647),
//     new google.maps.LatLng(40.431508, -3.677977));

//   var srcImage = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Pedro_Teixeira_Albernaz_%281656%29_Madrid.png';
//   overlay = new aMapverlay(bounds, srcImage, map);
// }

// /** @constructor */
// function aMapverlay(bounds, image, map) {

//   this.bounds_ = bounds;
//   this.image_ = image;
//   this.map_ = map;
//   this.div_ = null;

//   this.setMap(map);
// }


// aMapverlay.prototype.onAdd = function() {

//   var div = document.createElement('div');
//   div.style.borderStyle = 'none';
//   div.style.borderWidth = '0px';
//   div.style.position = 'absolute';

//   var img = document.createElement('img');
//   img.src = this.image_;
//   img.style.width = '100%';
//   img.style.height = '100%';
//   img.style.position = 'absolute';
//   div.appendChild(img);

//   this.div_ = div;

//   var panes = this.getPanes();
//   panes.overlayLayer.appendChild(div);
// };

// aMapverlay.prototype.draw = function() {

//   var overlayProjection = this.getProjection();

//   var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
//   var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

//   var div = this.div_;
//   div.style.left = sw.x + 'px';
//   div.style.top = ne.y + 'px';
//   div.style.width = (ne.x - sw.x) + 'px';
//   div.style.height = (sw.y - ne.y) + 'px';
// };

// aMapverlay.prototype.onRemove = function() {
//   this.div_.parentNode.removeChild(this.div_);
//   this.div_ = null;
// };

// google.maps.event.addDomListener(window, 'load', initMap);

// ------------------------------------//


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
console.log(steps)
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
    destination: steps[steps.length - 1].location,
    waypoints: steps,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  };
  
  directionsService.route(
    directionRequest,
    function (response, status) {
      console.log(response)
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
