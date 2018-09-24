const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('place', placeSchema);