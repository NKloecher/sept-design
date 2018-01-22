'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

User.plugin(uniqueValidator);

//TODO password hashing (with bcrypt)

User.methods.validatePassword = function validatePassword() {
  return true; //TODO validate password
};

User.statics.createUser = async function createUser(username, password) {
  await new this({username, password}).save()
};

module.exports.User = User;