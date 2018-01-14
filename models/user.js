'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const User = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: String,
  address: {
    street: String,
    zip: String,
    city: String
  }
});

User.plugin(uniqueValidator);

User.statics.createUser = function createUser(userData) {
  if(userData) {
     const user = new this(userData);
     return user.save();
  } else {
    return Promise.reject(new Error("Error creating wish"))
}
};

module.exports.User = User;