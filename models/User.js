const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new Schema({
  username: String,
  email: { type: mongoose.SchemaTypes.Email },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

userSchema.set('timestamps', true);
const User = mongoose.model('User', userSchema);
module.exports = User;