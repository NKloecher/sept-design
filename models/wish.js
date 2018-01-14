'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Wish = new Schema({
  name: { //The name of the wish
    type: String,
    required: true
  },
  desc: { //The description of the wish
    type: String,
    required: true
  },
  cost: Number, //Cost, if any, of the wish
  seen: String, //Where it has been seen || Website
  owner: { //Who wished the wish
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

});

Wish.statics.createWish = async function createWish(wishData) {
  //no error handling?!
  if (wishData) {
    const wish = new this(wishData);
    await wish.save();
  }else {
    return Promise.reject(new Error("Error creating wish"))
  }
};

Wish.statics.updateWish = function (wishId, {name, desc, cost, seen}) {
  //Does not currently allow update of owner
  return this.findOneAndUpdate({_id: wishId}, {$set: {name:name},desc:desc,cost:cost,seen:seen}, {runValidators:true})
};

module.exports.Wish = Wish;