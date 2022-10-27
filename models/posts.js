const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({


  title: {
    type: String,
    required: true
    //required: true 
  },
  body: {
    type: String,
    required: true
  },
 
  photo: {
    data: Buffer,
    contentType: String
  },
  poids: {
    type: String,
    required: true
  },
  prix: {
    type: String,
    required: true
  }, 
  lien_web: {
    type: String,
    //required: true
  },  
  created: {
    type: Date,
    default: Date.now
  },
}

);

module.exports = mongoose.model('post', PostSchema);