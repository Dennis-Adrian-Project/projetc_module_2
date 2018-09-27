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
  {
    title: "Puerta de Alcalá",
    matter: "Arquitectura",
    shortDesc: "Es uno de los símbolos más ligados a la ciudad de Madrid, la Puerta de Alcalá...",
    longDesc: "Es uno de los símbolos más ligados a la ciudad de Madrid, la Puerta de Alcalá. Un elemento que esconde un secreto, a la vista de todos, pero en el que muy pocos recaen… ¿Sabías que la puerta no es simétrica puesto que sus dos caras son diferentes una de otra? La Puerta de Alcalá se construyó en 1778 y era una de las cinco puertas reales con las que contaba la ciudad de Madrid. Ésta en concreto era la encargada de dar la bienvenida a los visitantes que llegasen de lugares como Cataluña, Aragón o Francia. Su construcción fue un encargo del monarca Carlos III para conmemorar su llegada a Madrid como rey.Desde que se levantó, la Puerta de Alcalá se ganó el cariño de los madrileños y desde siempre ha sido un elemento muy ligado a la imagen de la ciudad. Su gran originalidad radicó en ser el primer arco del triunfo que se construyó en Europa tras la caída del Imperio Romano. Más tarde llegaron otros, de fama internacional también, como el Arco del Triunfo en París o la Puerta de Brademburgo en Berlín.Gobernando y vigilando lo que sucede en la Calle de Alcalá, este monumento de gran valor arquitectónico y sentimental nos sorprende con un dato revelador y es que resulta diferente según el lado desde el que lo miremos. En resumen, que es asimétrico. El motivo puede ser una anécdota que ha llegado hasta nuestros días, un despiste y un acto de buena fe que dotaron a la ‘puerta’ de un carácter aún más único si cabe.Todo se origina con el concurso que hace Carlos III para ver quien será el encargado de realizar la obra. Los candidatos eran José de Hermosilla, Ventura Rodríguez y Francisco Sabatini. El artista ganador fue el último de los tres, Sabatini, quien mandó varios proyectos al rey. Según dicen, el monarca dio el visto bueno a dos bocetos diferentes sin darse cuenta. El artista, por no hacer caer al rey en su equivocación optó por tirar por el camino de en medio y actuó de la forma más diplomática posible, fusionó ambos proyectos en uno sólo, de ahí que la Puerta de Alcalá presente dos caras distintas.La principal diferencia, y más visible desde la distancia, es que en uno de los lados la obra presenta diez semicolumnas de estilo jónico mientras que por el otro apreciamos dos columnas acompañadas de pilastras. Coronando la puerta por un lado observamos unos escudos heráldicos mientras que por el otro, vemos unas esculturas de unos niños cuyo significado y posturas os detallaré otro día. La pregunta es, con la de veces que muchos habréis pasado por ella ¿os habíais percatado de este secreto?",
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.419992,-3.6909257]
    }, 
  },
  {
    title: "Plaza de la Cebada",
    matter: "Arquitectura",
     shortDesc: "La plazuela de la Cebada, formada en los principios del siglo XVI...",
     longDesc: "La plazuela de la Cebada, formada en los principios del siglo XVI en tierras pertenecientes a la encomienda de Moratalaz, del orden de Calatrava, según se ve por escritura otorgada en 1536 por Rodrigo de Coalla, del consejo de Hacienda y del de Castilla (por quien aparece firmado el perdón que el Emperador dio a los comuneros) y por su mujer, que compraron un quiñón de tierras en dicho sitio, es un descampado irregular, más bien que una plaza pública, y desde su principio estuvo dedicada al comercio de granos, de tocino y de legumbres -En el siglo pasado fue también muy famosa por celebrarse en ella las famosas Ferias de Madrid, y el paseo y bullicio consiguiente, de que aún hemos podido ser testigos en algunos años del presente, en que se han continuado en ella; pero a fines del siglo último adquirió esta plazuela más funesta celebridad por haberse trasladado a la misma las ejecuciones de las sentencias de muerte en horca o garrote; a cuyo efecto se levantaba la víspera en el centro de ella el funesto patíbulo, y las campanas de las próximas iglesias de San Millán y Nuestra Señora de Gracia eran las encargadas de transmitir con su lúgubre clamor a toda la población de Madrid el instante supremo de los reos desdichados. Muchos grandes criminales expiaron en aquel sitio una serie de delitos comunes, y cuando, en este siglo, principalmente, se inventó la nueva clasificación de delitos políticos, muchas víctimas del encono de los partidos o de la venganza del poder regaron con su sangre aquel funesto recinto; 1822, 1823 y 1830 son fechas muy marcadas en aquella plazuela. Los nombres de Goifieu, Riego, Iglesias y Miyar dicen bastante en acusación de la intolerancia y animosidad de los políticos partidos"
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4107817,-3.711866]
    }, 
  },
  {
    title: "Calle de Embajadores",
    matter: "Arquitectura",
     shortDesc: "La calle de Embajadores, que continúa la de los Estudios y de San Dámaso, hasta...",
     longDesc: "La calle de Embajadores, que continúa la de los Estudios y de San Dámaso, hasta el portillo de aquel nombre, cuenta ya bastante caserío y edificios públicos de consideración. -La iglesia y convento de San Cayetano, principal edificio religioso de aquel extenso distrito, y situada en el número 19 de dicha calle, con vuelta a la inmediata del Oso, es lástima ciertamente que se halle escondida en sitio tan extraviado y en una calle estrecha, donde no puede lucir su grandeza. Este hermoso templo, construido en principios del siglo pasado bajo la dirección de los célebres arquitectos D. José Churriguera y D. Pedro de Rivera (aunque con diseños venidos de Roma, según D. Antonio Ponz), es suntuoso, despejado en su planta interior y magnífico en su fachada, aunque el abuso de adornos superfluos con que, siguiendo su escuela y gusto particular, quisieron recargarla los arquitectos directores haya dado lugar a las severas censuras de los críticos rigoristas, entre otros del mismo Ponz, que no hallaba otro arbitrio para remediar la suntuosa fachada de piedra que picarla toda y dejarla lisa; hasta este punto llegó el encono de los críticos a fines del siglo pasado. Esto no obstante (y a pesar de tan acerbas censuras y académicos anatemas), la iglesia de San Cayetano continúa figurando entre los más bellos templos de Madrid, y su magnífica fachada constituiría uno de sus más ricos ornamentos, a estar situada en punto conveniente, por ejemplo, en el que ocupaba el Buen Suceso o la casa de Astraerena. -Este templo padeció un horroroso incendio hace algunos años, pero ya se halla restaurado. El convento, fundado en 1644 para casa de seglares de San Cayetano, estuvo ocupado últimamente por la comunidad de San Gil, y ha sido vendido después de su extinción, aunque el templo continúa dedicado al culto6. -Más abajo, en la misma calle de Embajadores, está el colegio de niñas huérfanas, llamado de la Paz, unido al piadoso establecimiento de la Inclusa, situado a la espalda, en la calle de Mesón de Paredes, y de que hablaremos luego. Este colegio está destinado a recibir y educar en él a las niñas expósitas en aquél, desde que cumplen la edad de siete años, y uno y otroestablecimiento corren a cargo de una Junta de Señoras de la primera nobleza. Es una filantrópica y excelente institución, fundada en 1679 por la señora doña Ana Fernández de Córdoba, duquesa de Feria, y dirigida con notable acierto por la expresada Junta de Señoras.",
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4048051,-3.704992]
    }, 
  },
  {
    title: "El Casino",
    matter: "Arquitectura",
     shortDesc: "Al terminar dicha calle de Embajadores, en la acera izquierda, se alza...",
     longDesc:"Al terminar dicha calle de Embajadores, en la acera izquierda, se alza el extenso edificio construido en los últimos años del siglo pasado con destino a fábrica de aguardientes y licores, estancados entonces por la Real Hacienda, barajas, papel sellado y depósito de efectos plomizos, y hoy destinado a la de Tabacos, desde 1809, en que comenzó en él la elaboración de cigarros y rapé, hasta el día, en que cuenta más de cinco mil operarios, principalmente mujeres, con inmensos talleres, en que se labran al año sobre dos millones de libras de cigarros. Este considerable edificio, que ocupa una superficie de 101.406 pies, tiene su fachada principal a dicha calle en 428 pies de línea, 29 balcones y una decoración seria y apropiada al objeto7. Frente de este edificio, y terminando por su derecha la misma calle de Embajadores, está el precioso jardín llamado el Casino de la Reina, que mide nada menos que la considerable extensión de más de 13 fanegas de tierra, y en su centro tiene un lindísimo palacio, decorado con ellas pinturas al fresco y suntuoso adorno de muebles. Este magnífico jardín y mansión Real, una de las más preciadas curiosidades de Madrid, fue conocido en lo antiguo por la Huerta del clérigo Bayo, y adquirido por la villa de Madrid en 1816 para regalarlo a la reina doña María Isabel de Braganza. El principal ingreso a esta Real posesión por la parte de la Ronda consiste en una elegante portada de granito, decorada con dos columnas dóricas a cada lado, con remates y adornos correspondientes y separados por una verja de hierro. -Entre esta posesión y la Fábrica de cigarros, dando frente a la citada calle de Embajadores, se alzaba el portillo del mismo nombre, moderno, de piedra y de regular construcción, derribado también inútilmente.- Sobre el origen, en fin, del encumbrado nombre de esta calle, nada cierto podemos asegurar; únicamente consignaremos la tradición de que en la epidemia que padeció Madrid, como gran parte del reino, en 1597, parece que se refugiaron en aquellos sitios los embajadores o enviados de las potencias extranjeras, y desde entonces le fue aplicado este nombre, dejando el de calle de la Dehesa de la Villa, con que la vemos designada en los títulos antiguos de las casas. La otra parte de este distrito, a la izquierda de la calle de Embajadores, y a que denominamos de la Inclusa, está cruzada por las calles paralelas del Mesón de Paredes y de la Comadre hasta el Barranco de Embajadores, y de Este a Oeste por las tituladas de Juanelo (en que vivió el célebre ingeniero flamenco Juanelo Turriano, en tiempo del emperador Carlos V) la de la Encomienda de Moratalaz, de las Dos Hermanas, de los Abades, del Oso, de Cabestreros, del Sombrerete, del Tribulete y otras, todas bastante rectas, desahogadas y con un regular caserío, pero absolutamente desnudas para nosotros de interés artístico e histórico.",
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4066475,-3.7076548]
    }, 
  },
  {
    title: "El Prado de Atocha y San Jerónimo",
    matter: "Arquitectura",
     shortDesc: "El trozo del paseo que conduce a esta iglesia, desde donde se alzaba la mezquina",
     longDesc:"El trozo del paseo que conduce a esta iglesia, desde donde se alzaba la mezquina puerta del mismo nombre, llamada primitivamente de Vallecas, y derribada en estos   —62→   últimos años, es el menos decorado y brillante del Prado, y consiste sólo en algunas filas de árboles, con un camino central para los coches y estrechos paseos laterales entre el cerrillo en que estuvo la ermita de San Blas (más abajo de donde hoy el Observatorio Astronómico) y la cerca que da al camino de Vallecas (hoy ya derribada), y arrimada a la cual está la otra mezquina ermita, denominada del Ángel, y antes del Santo Cristo de la Oliva. Pero aún este mezquino paseo o alameda no existía en esta forma en el siglo XVII, presentando sólo entonces el aspecto desnudo y pelado de una carretera.El otro trozo considerable del paseo moderno, que media entre dicha calle de Atocha y la Carrera de San Jerónimo, consistió, hasta fines del siglo último, en una estrecha calle de álamos, flanqueada por algunas huertas del lado de la población, y por el opuesto limitada por el inmundo barranco ya mencionado, que venía descubierto desde las afueras de Recoletos.Del otro lado, entre la Carrera y la calle de Alcalá, es donde existió de más antiguo el paseo primitivo y favorito de los madrileños, pues que vemos que el maestro Pedro de Medina, que se supone escribía en 1543 su libro de Grandezas y cosas memorables de España (aunque la edición que tenemos a la vista lleva la fecha de Alcalá, 1560), consagraba ya a este paseo las líneas siguientes:«Hacia la parte oriental (de Madrid), luego en saliendo de las casas, sobre una altura que se hace, hay un suntuosísimo monesterio de frailes Hierónimos, con aposentamientos y cuartos para recibimiento y hospedería de reyes, con una hermosísima y extendida huerta. Entre las casas y este monesterio hay, a la mano izquierda en saliendo del pueblo, una grande y hermosísima alameda, puestos los álamos en tres órdenes, que hacen dos calles muy anchas y muy largas, con cuatro fuentes hermosísimas y de lindísima agua, a trechos puestas por la una calle, y por la otra muchos rosales entretejidos a los pies de los árboles por toda la carrera. Aquí, en esta alameda, hay un estanque de agua que ayuda mucho a la grande hermosura y recreación de la alameda.A la otra mano, derecha del mismo monesterio, saliendo de las casas, hay otra alameda, también muy apacible, con dos órdenes de árboles, que hacen una calle muy larga hasta salir al camino que llaman de Atocha; tiene esta alameda sus regueros de agua, y en gran parte se va arrimando por la una mano a unas huertas. Llaman a estas alamedas el Prado de San Hierónimo, en donde, de invierno al sol, y de verano a gozar de la frescura y es cosa muy de ver, y de mucha recreación, la multitud de gente que sale, de bizarrísimas damas, de bien dispuestos caballeros, y de muchos señores y señoras principales en coches y carrozas. Aquí se goza con gran deleite y gusto de la frescura del viento todas las tardes y noches del estío, y de muchas buenas músicas, sin daños, perjuicios ni deshonestidades, por el buen cuidado y diligencia de, los alcaldes de la corte».El maestro Juan López de Hoyos, en su tantas veces citado libro de la entrada de la reina doña Ana de Austria, en 1569, hace todavía más entusiasta descripción del entonces nuevo paseo del Prado, y de su decoración para esta fiesta; pero su mucha prolijidad nos priva de reproducirla aquí, remitiendo al lector al Apéndice, donde haremos un extracto de aquel rarísimo libro.A pesar de estas exageradas relaciones del Prado de Madrid a mediados del siglo XVI, hechas por autores contemporáneos, creemos que debían ser tan gratuitamente encomiásticas como de costumbre, cuando sabemos por la tradición lo escabroso e inculto de aquellos sitios, y hasta los vemos representados minuciosamente, un siglo después, en el plano de 1656. -En él se ven efectivamente dos alamedas formadas por tres filas de árboles desde la calle de Alcalá hasta la Carrera. El barranco que corría por toda la línea del paseo se hallaba poco más o menos por donde ahora el paseo de coches, y sobre las alturas cercanas al Retiro, donde después el cuartel de artillería (hoy derribado), estaba el Juego de pelota, habiendo tenido la Villa que desmontar parte de aquella formidable altura, que estaba allí desde el principio del mundo (según afirma seriamente Pinelo), para facilitar el acceso al Real sitio con ocasión de unas solemnes fiestas en 1637, que reseñaremos a su tiempo. Próximamente adonde está ahora la fuente de Neptuno había una torrecilla para las músicas que amenizaban el paseo, y una fuente titulada el Caño dorado, y alguna otra igualmente insignificante por donde ahora la de Apolo. A la parte de la población cerraban el paseo las cercas de los jardines contiguos, y las modestas fachadas y miradores de las casas de los duques de Lerma, de Maceda, de Monterey y de Béjar. Así se ve también en un precioso cuadro de principios del siglo XVII, que posee en su apreciable colección el Sr. Marqués de Salamanca.Este era, pues, todo el adorno de aquellas deliciosas alamedas del maestro Medina, de aquel romántico paseo y sitio de recreación, de aventuras y galanteos, de la poética y disipada corte de los Felipes III y IV, la que, por lo visto, quedaba satisfecha con tan pobre aparato y tan míseras condiciones de comodidad. Verdad es que en aquellos tiempos de valor y de galantería, la poesía y el amor solían embellecer los sitios más groseros e indiferentes; pues aunque Lope de Vega, en un momento de malhumor, se dejó decir:en cambio, Calderón, Rojas y Moreto, y los demás escritores de su tiempo, se esmeraron en poetizarle a porfía con las descripciones más bellas y haciéndole teatro de las escenas más interesantes de sus dramas. ¿Quién no trae a la memoria aquellas damas tapadas que, a hurtadillas de sus celosos padres o hermanos, venían a este sitio al acecho de tal o cual galán perdidizo, o bien que se le hallaban allí sin buscarle? ¿Quién no cree ver a éstos, tan generosos, tan comedidos con las damas, tan altaneros con el rival? ¿Aquellas criadas malignas y revoltosas, aquellos escuderos socarrones y entremetidos, aquellos levantados razonamientos, aquellas intrigas galantes, aquella metafísica amorosa, que nos revelan sus ingeniosísimas comedias (únicas historias de las costumbres de su tiempo), y que no sólo estaban en la mente de sus autores, pues que el público las aplaudía y ensalzaba como pintura fiel de la sociedad, espejo de su carácter y acciones? ¡Qué gratas memorias debían acompañar a este Prado, que todos los poetas se apropiaban como suyo! Y cuando su inmediación a la nueva corte del Retiro lo hizo acrecer aún en importancia, ¡qué de intrigas, qué de venganza, qué de traiciones no vinieron también a compartir con la histórica su poética celebridad!En los tres jardines reunidos de las casas de los duques de Maceda (donde hoy el de Villahermosa), del Conde de Monterrey (donde hoy San Fermín) y de D. Luis Méndez Carrión, marqués del Carpio (hoy de Alcañices), fue donde tuvo lugar la famosa fiesta dada por el Conde-duque de Olivares a Felipe IV y su corte, la noche de San Juan de 1631, cuya pomposa y curiosísima relación inserta Pellicer como apéndice de su libro titulado Origen de la comedia en España. En ella se representaron dos comedias, una de Lope de Vega, titulada La Noche de San Juan, y otra de Quevedo y D. Antonio Mendoza, con el título de Quien más miente medra más (que acaso sea la comprendida en las obras de este último con el título de Los Empeños del mentir). Hubo además bailes, músicas, cena y mascaradas, y luego una suntuosa rua por el paseo inmediato hasta el amanecer.",
     imgPath: "String",
    imgName: "String",
    location: {
      type: "Point",
      coordinates: [40.4137818,-3.6943211]
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
