const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  slug: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', User);