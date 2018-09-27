var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();
let map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 200,
    center: {lat: 62.323907, lng: -150.109291},
    mapTypeId: 'satellite'
  });

  var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(62.281819, -150.287132),
      new google.maps.LatLng(62.400471, -150.005608));

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