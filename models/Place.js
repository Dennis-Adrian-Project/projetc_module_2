const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  title: String,
  image: String,
  location: {type: {type: String}, coordinates: [Number]},
  shortDesc: String,
  longDesc: String

});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
