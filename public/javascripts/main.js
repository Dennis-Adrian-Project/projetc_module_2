
let puertaDelSol = { lat: 40.4167278, lng: -3.7033387 };
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


