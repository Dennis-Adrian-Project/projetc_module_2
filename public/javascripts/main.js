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
    events.forEach(plc => {
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

// function startMapCreate() {
//   const map = new google.maps.Map(
//     document.getElementById('mapCreate'),
//     {
//       zoom: 10,
//       center: {lat: 40.4167278, lng: -3.7033387}
//     }
//   );
//   }






















