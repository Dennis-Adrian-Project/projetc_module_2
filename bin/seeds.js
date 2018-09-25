// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Event = require("../models/Event");


const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/project-module-2', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

User.collection.drop();



let events = [
  {
    title: "Matadero",
    image: "",
    location: {
      type: "Point",
      coordinates: [40.392439,-3.697239]
    },
    shortDesc: "El matadero y mercado municipal de ganados de Madrid fue diseñado a finales del ...",
    longDesc: "El matadero y mercado municipal de ganados de Madrid fue diseñado a finales del s.XIX con el objetivo de paliar los problemas de salubridad que sufría la ciudad. Desde entonces ha servido no solo como matadero industrial y plaza de mercado, sino también como almacén de municiones y de patatas. En 2005 se aprueba el plan que lo convierte en el centro cultural que conocemos hoy."
  },
  {
    title: "El caballo de Felipe III",
    image: "",
    location: {
      type: "Point",
      coordinates: [40.415511,-3.7074009]
    },
    shortDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por...",
    longDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por su porte y su céntrica ubicación, sino también por desprender un olor nauseabundo que no dejaba indiferente a nadie que visitase la Plaza Mayor. Mucho creían que este olor provenía de un cementerio visigodo que habría bajo aquel lugar, pero durante la proclamación de la II República, descubrieron que realmente era una trampa mortal para pájaros que no conseguían volver a salir."
  },
  {
    title: "Puerta del Sol",
    image: "",
    location: {
      type: "Point",
      coordinates: [40.392468,-3.698543]
    },
    shortDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por...",
    longDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por su porte y su céntrica ubicación, sino también por desprender un olor nauseabundo que no dejaba indiferente a nadie que visitase la Plaza Mayor. Mucho creían que este olor provenía de un cementerio visigodo que habría bajo aquel lugar, pero durante la proclamación de la II República, descubrieron que realmente era una trampa mortal para pájaros que no conseguían volver a salir."
  },
  {
    title: "otro",
    image: "",
    location: {
      type: "Point",
      coordinates: [40.4167282,-3.7033389]
    },
    shortDesc: "Durante",
    longDesc: "Durante "
  }
]

Event.collection.drop()


Promise.all([Event.create(events), User.create(users),]).then(values => { 
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
