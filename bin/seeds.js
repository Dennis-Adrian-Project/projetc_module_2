// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config();

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
    email: "alice@ironhack.com",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    role: "MEMBER"
  },
  {
    username: "bob",
    email: "bob@ironhack.com",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    role: "MEMBER"
  }
]

User.collection.drop();



let events = [
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
    title: "Manuela Malasaña | 1791 – 1808",
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
  {
    title: "José Ortega y Gasset | 1883 – 1955",
    matter: "Personajes",
    shortDesc: "Ortega y Gasset nace en el Madrid decimonónico en una familia de intelectuales cuyo abuelo había fundado El Imparcial, dirigido después por su padre.",
    longDesc: "Estuvo desde niño muy involucrado en el mundo de la política y del periodismo. Pronto empezó a destacar en la prensa siendo colaborador de El Sol, tras estudiar en la Complutense y en Deusto. Sus ideas avanzadas sentaron las bases de la Razón vital. Esta filosofía defendía al hombre de la sociedad de clases instaurada por aquella época. Un buen ejemplo es La rebelión de las Masas, publicada por partes en El Sol. Fue coetáneo y amigo de personalidades como Unamuno, Azorín o Pío Baroja. Su perfil humanista le acarreó serios problemas en tiempos intolerantes y, aunque abrazó la causa republicana, dio un discurso conocido como Rectificación de la República. Días después del alzamiento militar que dio lugar a la guerra civil, Ortega se negó a firmar un manifiesto a favor del gobierno republicano. Pacifista convencido, prefirió apoyar otra publicación menos radical en apoyo a la República firmada por Gregorio Marañón, Ramón Pérez de Ayala y otra cabezas visibles de la cultura. Exiliado durante el conflicto vagó por París, Países Bajos y Argentina. En 1942 se muda a Lisboa como paso previo a su regreso a Madrid, donde fallecería en 1955.",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.445960,-3.685639]
    }, 
  },
  {
    title: "Francisco de Quevedo Villegas | 1580 – 1645",
    matter: "Personajes",
    shortDesc: "Este genio de la literatura del siglo de oro tuvo una infancia complicada al nacer con deformidades en los dos pies y con miopía.",
    longDesc: "Este genio de la literatura del siglo de oro tuvo una infancia complicada al nacer con deformidades en los dos pies y con miopía. Estas circunstancias provocaron que se encerrara en sí mismo, más aún tras la muerte de su padre cuando contaba con seis años. Los altos cargos de su familia le propiciaron una situación holgada llegando a ser secretario de María de Austria, tras estudiar en Alcalá de Henares y Valladolid. En estos centros educativos se forjó su mítica enemistad con Luis de Góngora. Quevedo era un asiduo de las cantinas donde se mezclaban las clases sociales sin disimulo ante un buen vino. Miles de historias pueblan el siglo de oro con sus andanzas de caballero por las calles de Madrid. En una ocasión tuvo que salir en defensa de una dama que había sido insultada en la iglesia de San Ginés por un desaprensivo. Quevedo le retó a un duelo que ganó en la Plaza de las Descalzas, donde una placa lo recuerda. A pesar de ello, siempre contó con buenos empleos. El duque de Osuna le reclutó para organizar sus posesiones en Nápoles. Su amplio talento le hizo destacar en géneros como la narrativa, la picaresca o la sátira. Su matrimonio con una afín al Conde-Duque de Olivares como Esperanza de Mendoza le permitió tener un status importante en la corte. La corrupción de Olivares le llevó a la cárcel en 1639. Tras cinco años recluido, su salud no le dio para mucho más y acabó sus días en la Torre de Juan Abad.",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.433473,-3.7063104]
    }, 
  },
  {
    title: "San Isidro | 1082 – 1172",
    matter: "Personajes",
    shortDesc: "El patrón de la ciudad es el primer personaje ilustre de Madrid.",
    longDesc: "El patrón de la ciudad es el primer personaje ilustre de Madrid. Nació en la Mayrit árabe y vivió en una época fronteriza de guerras religiosas. No obstante, Isidro siempre abogó por la paz entre las diferentes confesiones que poblaban la península. Este humilde labrador mozárabe fue idolatrado por los primeros madrileños. Antes de ser patrono de los labradores era experto en localizar acuíferos, fundamentales para la supervivencia de sus vecinos. Su familia llegó a Madrid para colonizar las tierras ganadas en la Reconquista. De su vida real se sabe poco. Además de ser zahorí, se ganaba la vida como freelance del campo, trabajando para diferentes señores feudales. Se casó con Santa María de la Cabeza y tuvo como hijo a San Illán. Aunque hay quien cree que se trata de una invención de un fraile llamado Fray Domingo de la Cabeza, tras encontrar unos huesos en la ermita de Caraquiz. Fue famoso por sus milagros. El más conocido narra como logró rescatar a Illán de las profundidades del pozo de los Vargas rezando. Un personaje cuya esencia pervive en los arrabales de la ciudad de entonces, hoy La Latina.",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4031004,-3.7298301]
    }, 
  },
  {
    title: "",
    matter: "Personajes",
    shortDesc: "",
    longDesc: "",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: []
    }, 
  },
  {
    title: "",
    matter: "Arquitectura",
    shortDesc: "",
    longDesc: "",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: []
    }, 
  },
  {
    title: "",
    matter: "Arte",
    shortDesc: "",
    longDesc: "",
    imgPath: 'String',
    imgName: "String",
    location: {
      type: "Point",
      coordinates: []
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
