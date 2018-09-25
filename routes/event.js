const express = require('express');
const router  = express.Router();
const Event = require("../models/Event");
const uploadCloud = require('../config/cloudinary.js');


router.get('/', (req, res, next) => {
  Event.find()
  .then(event => {
    res.render('index',{event});
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/event', uploadCloud.single('photo'), (req, res, next) => {
  const { title, shortDesc, longDesc } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
 // const location = req.body;
  const newEvent = new Event({title, shortDesc, longDesc, imgPath, imgName, /*location*/})
  newEvent.save()
  .then(event => {
    res.redirect('/')
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = router;