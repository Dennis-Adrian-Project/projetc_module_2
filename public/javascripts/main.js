let puertaDelSol = { lat: 40.4167278, lng: -3.7033387 };
// let map;


// function startMap() {
//   map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 10,
//       center: puertaDelSol
//     }
//   );

//   const geolocalize = () => {
//     return new Promise((resolve, reject) => {
//       if (!navigator.geolocation) reject('No geolocation available');
//       navigator.geolocation.getCurrentPosition((pos) => {
//         const center = {
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude
//         };
//         resolve(center);
//       }, reject)
//     });
//   }

// }
// startMap();

var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();



function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: puertaDelSol,
    mapTypeId: 'satellite'
  });
  
  var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.406503, -3.732647),
    new google.maps.LatLng(40.431508, -3.677977));
    // new google.maps.LatLng(40.281819, -3.287132),
    // new google.maps.LatLng(40.400471, -3.005608));
      // new google.maps.LatLng(40.23505027671814, -3.4236405219762673),
      // new google.maps.LatLng(40.55131534352123, -4.0576477820312675));
  var srcImage = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Pedro_Teixeira_Albernaz_%281656%29_Madrid.png';
  overlay = new USGSOverlay(bounds, srcImage, map);
}

/** @constructor */
function USGSOverlay(bounds, image, map) {

  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;
  this.div_ = null;

  this.setMap(map);
}


USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function() {

  var overlayProjection = this.getProjection();

  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};

google.maps.event.addDomListener(window, 'load', initMap);
