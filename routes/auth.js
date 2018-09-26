const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Comment = require('../models/Comment');
const uploadCloud = require('../config/cloudinary.js');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/profile",(req,res)=>{
  Comment.find({
    author: req.user.id,
  })
  .then(comments => {
    res.render('profile', {comments})
  }) 
})

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", uploadCloud.single('photo'), (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      imgPath,
      imgName,
      role:"MEMBER"
    });
    newUser.save()
    .then(() => {
      res.redirect("/auth/profile");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

function checkRoles(role) {
  return function(req, res, next) {
    if ((req.isAuthenticated() && req.user.role === role) || req.user.rol === "ADMIN") {
      return next();
    } else {
      res.redirect('/auth/login')
    }
  }
}

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get('/', checkRoles('GUEST'), (req, res) => {
  res.render('index', {user: req.user});
});

router.get('/new-event', checkRoles('ADMIN'), (req, res) => {
  res.render('new-event', {user: req.user});
});

router.get('/list-event', checkRoles('MEMBER') , (req, res) => {
  res.render('list-event', {user: req.user});
});

module.exports = router;
