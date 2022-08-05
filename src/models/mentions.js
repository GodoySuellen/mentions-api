const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  friend: {
    type: String
    
  },
  mention: {
    type: String

  }
});

module.exports = mongoose.model('Mentions', schema);