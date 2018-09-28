const express = require('express');
const router  = express.Router();
const Comment = require("../models/Comment");
const uploadCloud = require('../config/cloudinary.js');
const Event = require('../models/Event')


router.get("/new-comment/:id", (req, res) => {
  Event.findById(req.params.id)
  .then( evento =>{
    Comment.find()
    .populate("author", "username")
    .then(comment => {
      res.render("comments/new-comment", {evento, comment});
    })
    .catch(e => console.log(e))

  })
  .catch(e => console.log(e))
}) 

router.post('/new-comment/:id', uploadCloud.single('photo'), (req,res) => {

  const author = req.user._id;
  const event = req.params.id
  const {title, content} = req.body;
  const imgPath = req.file ? req.file.url : "";
  const imgName = req.file ? req.file.originalname: "";

  const newComment = new Comment({
      author,
      event,
      title,
      content,
      imgPath,
      imgName
  });
  newComment.save()
  .then(() => res.redirect(`/events/event-profile/${req.params.id}`));
});

router.get('/delete/:id', (req, res, next) => {
  Comment.findByIdAndRemove(req.params.id).then(() => {
    res.redirect(`/auth/profile`);
  }).catch(e =>  next(e))
});

module.exports = router;