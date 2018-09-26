const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment");
const uploadCloud = require('../config/cloudinary.js');


router.get("/new-comment", (req, res) => {
  Comment.find()
  .populate("author", "username")
  .then(comment => {
    res.render("comments/new-comment", {comment});
  })
})

router.post('/new-comment', uploadCloud.single('photo'), (req,res) => {
  const author = req.user._id;
  const {title, content} = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  const newComment = new Comment({
      author,
      title,
      content,
      imgPath,
      imgName
  });
  newComment.save()
  .then(() => res.redirect('/auth/profile'));

});


module.exports = router;