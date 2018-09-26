const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const commentSchema = new Schema({
  author: {type:Schema.Types.ObjectId, ref:"User"},
  title: String,
  content: String,
  imgPath: String,
  imgName: String
});

commentSchema.set('timestamps', true);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
