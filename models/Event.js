const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  shortDesc: String,
  longDesc: String,
  imgPath: String,
  imgName: String,
  location: { type: { type: String }, coordinates: [Number]}
});

eventSchema.index({ location: '2dsphere' });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;

