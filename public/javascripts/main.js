
function startMap() {
  const puertaDelSol = {
  	lat: 40.4167278,
  	lng: -3.7033387};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 17,
      center: puertaDelSol
    }
  );
}

startMap();


// function initMap() {
//   var customMapType = new google.maps.StyledMapType([
//       {
//         elementType: 'labels',
//         stylers: [{visibility: 'on'}]
//       }
//     ], {
//       name: 'Custom Style'
//   });
//   var customMapTypeId = 'custom_style';

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 40.4167278, lng: -3.7033387}, 
//     mapTypeControlOptions: {
//       mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
//     }
//   });
// }
//   initMap();