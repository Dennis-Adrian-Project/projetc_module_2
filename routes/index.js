const express = require('express');
const router  = express.Router();
const Event = require("../models/Event");


/* GET home page */



router.get('/', (req, res, next) => {
  Event.find()
  .then(event => {
    res.render('index',{event});
  })
  .catch(error => {
    console.log(error)
  })
});





module.exports = router;