const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment")


router.get("/", (req, res) => {
  Comment.find()
  .populate("author", "username")
  .then(comment => {
    console.log(comment);
    res.render("comments/comment");
  })
})

module.exports = router;