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

router.post('/new-event', uploadCloud.single('photo'), (req, res, next) => {
  console.log(req.body.latitude, req.body.longitude)
  const { title, matter, shortDesc, longDesc } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const location = {
    type: 'Point',
    coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
};
  const newEvent = new Event({
    title, 
    matter,
    shortDesc, 
    longDesc, 
    imgPath, 
    imgName, 
    location
  })
  newEvent.save()
  .then(event => {
    res.redirect('/auth/list-event')
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = router;