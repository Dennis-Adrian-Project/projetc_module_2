const express = require('express');
const router  = express.Router();
const Event = require("../models/Event");


router.get('/', (req, res, next) => {
  Event.find()
    .then(events => {
          res.render('index', {
            events, plcStr: JSON.stringify(events)  
        });

    }).catch(e=> next(e));
})

module.exports = router;
