const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  title: String,
  text: String,
  author: {type:Schema.Types.ObjectId, ref:"User"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', userSchema);
module.exports = Comment;


