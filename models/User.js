const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new Schema({
  username: String,
  email: { type: mongoose.SchemaTypes.Email },
  password: String,
  imgPath: String,
  imgName: String,
  role: {
    type: String,
    enum : ['GUEST', 'MEMBER', 'ADMIN'],
    default : 'GUEST'
  },
});

userSchema.set('timestamps', true);
const User = mongoose.model('User', userSchema);
module.exports = User;