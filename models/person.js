'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const Person = new Schema({
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

Person.plugin(uniqueValidator);

Person.statics.createPerson = function createPerson(userData) {
  if(userData) {
     const person = new this(userData);
     return person.save();
  } else {
    return Promise.reject(new Error("Error creating person"))
}
};

module.exports.Person = Person;