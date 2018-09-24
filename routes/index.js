const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");

/* GET home page */



router.get('/', (req, res, next) => {
  console.log("entra")
  Place.find()
  .then(place => {
    console.log(place)
    res.render('index',{place});
  })
  .catch(error => {
    console.log(error)
  })
  
});
module.exports = router;