'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  address: {
    street: String,
    zip: String,
    city: String
  }
});

module.exports.User = User;