<<<<<<< HEAD
const { Int32 } = require('mongodb');
=======
/*jshint esversion: 8 */
>>>>>>> master
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cars = new Schema({
<<<<<<< HEAD
dealer_id: {
    type: Number,
    required: true
},
make: {
    type: String,
    required: true
  },
model: {
    type: String,
    required: true
  },
bodyType: {
    type: String,
    required: true
  },
year: {
    type: Number,
    required: true
  },
mileage: {
=======
  dealer_id: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  bodyType: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  mileage: {
>>>>>>> master
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('cars', cars);
