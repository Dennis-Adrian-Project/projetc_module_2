const express = require('express');
const router = express.Router();
const Event = require("../models/Event");


/* GET home page */

router.get('/', (req, res, next) => {
  console.log("entra")
  Event.find()
    .then(events => {
          res.render('index', {
            events, plcStr: JSON.stringify(events)  
        });

    }).catch(e=> next(e));
})

module.exports = router;
