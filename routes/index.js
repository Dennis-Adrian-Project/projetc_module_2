const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");

/* GET home page */

router.get('/', (req, res, next) => {
  console.log("entra")
  Place.find()
  .then(places => {
    res.render('index',{places, plcStr: JSON.stringify(places)
    });
  })
  .catch(error => {
    console.log(error)
  })
  
});

// router.get('/', (req, res, next) => {
//   Restaurant.find().then( restaurants => {
//     res.render('restaurant/list', {restaurants, restStr: JSON.stringify(restaurants)
//     });
//   }).catch(e=> next(e));
// });





module.exports = router;



// router.get('/', (req, res, next) => {
//   Restaurant.find().then( restaurants => {
//     res.render('restaurant/list', {
//       restaurants,
//       restStr: JSON.stringify(restaurants)
//     });
//   }).catch(e=> next(e));
// });



// router.get('/', (req, res, next) => {
//   console.log("entra")
//   Place.find()
//   .then(place => {
//     console.log(place)
//     res.render('index',{place});
//   })
//   .catch(error => {
//     console.log(error)
//   })
  
// });


// module.exports = router;