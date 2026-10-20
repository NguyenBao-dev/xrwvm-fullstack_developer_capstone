<<<<<<< HEAD
=======
/*jshint esversion: 8 */
>>>>>>> master
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviews = new Schema({
<<<<<<< HEAD
	id: {
    type: Number,
    required: true,
	},
	name: {
=======
  id: {
    type: Number,
    required: true,
  },
  name: {
>>>>>>> master
    type: String,
    required: true
  },
  dealership: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true
  },
  purchase: {
    type: Boolean,
    required: true
  },
  purchase_date: {
    type: String,
    required: true
  },
  car_make: {
    type: String,
    required: true
  },
  car_model: {
    type: String,
    required: true
  },
  car_year: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('reviews', reviews);
