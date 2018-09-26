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
    matter: "Arte",

    shortDesc: "El matadero y mercado municipal de ganados de Madrid fue diseñado a finales del ...",
    longDesc: "El matadero y mercado municipal de ganados de Madrid fue diseñado a finales del s.XIX con el objetivo de paliar los problemas de salubridad que sufría la ciudad. Desde entonces ha servido no solo como matadero industrial y plaza de mercado, sino también como almacén de municiones y de patatas. En 2005 se aprueba el plan que lo convierte en el centro cultural que conocemos hoy.",
    imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.392439,-3.697239]
    }, 
  },
  {
    title: "El caballo de Felipe III",
    matter: "Arte",
    shortDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por...",
    longDesc: "Durante mucho tiempo, esta famosa estatua no fue solo conocida por su porte y su céntrica ubicación, sino también por desprender un olor nauseabundo que no dejaba indiferente a nadie que visitase la Plaza Mayor. Mucho creían que este olor provenía de un cementerio visigodo que habría bajo aquel lugar, pero durante la proclamación de la II República, descubrieron que realmente era una trampa mortal para pájaros que no conseguían volver a salir.",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.415511,-3.7074009]
    }, 
  },
  {
    title: "Manuela Malasaña. 1791 – 1808",
    matter: "Personajes",
    shortDesc: "Pocos hipsters de los que pululan por el antiguo barrio Maravillas conocen la historia de...",
    longDesc: "Pocos hipsters de los que pululan por el antiguo barrio Maravillas conocen la historia de la valerosa mujer que da nombre a esta zona desde los años 80 del siglo XX. Manuela era hija de un vallecano de origen francés llamado Jean Malesange. Este honrado panadero tenía su tahona en la calle Divino Pastor, a escasos metros del famoso cuartel de Monteleón, donde Daoíz y Velarde trataron de resistir la carga de las tropas de Napoleón durante el 2 de mayo de 1808. Manuela trabajaba en un taller de costura en la calle de San Andrés. Su plácida vida iba a dar un giro de 360º aquel 2 de mayo. Cuando se iniciaron las revueltas, se encontraba en su lugar de trabajo. Su jefa la mantuvo a buen recaudo en el taller hasta que cesaron los sonidos traicioneros de las balas. Al caer la noche, Manuela se aventuró por aquel barrio convertido en zona de guerra. Pocos pasos después se encontró con una patrulla francesa. Ese momento se debate entre la leyenda y la historia. Hay quien afirma que la tropa napoleónica intentó violar a la pobre muchacha y que se defendió con unas tijeras de costurera. También es posible que los franceses la detuvieran simplemente por portar esas tijeras consideradas como arma. Aunque otra versión apunta que murió en el sitio galo al cuartel mientras suministraba munición a su padre. Lo único que es irrefutable es que el 2 de mayo fue ejecutada junto a más de 400 personas. Su historia mereció una calle en el barrio Maravillas, que los modernos de los 80 llenaron de cultura y ocio nocturno. Poco a poco se fue extendiendo la costumbre de referirse a este barrio epicentro de cultura castiza por el nombre de esta heroína.",
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4270047,-3.7040101]
    }, 
  },

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
