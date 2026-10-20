<<<<<<< HEAD
=======
/*jshint esversion: 8 */
>>>>>>> master
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dealerships = new Schema({
<<<<<<< HEAD
	id: {
    type: Number,
    required: true,
	},
	city: {
=======
  id: {
    type: Number,
    required: true,
  },
  city: {
>>>>>>> master
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  short_name: {
    type: String,
  },
  full_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('dealerships', dealerships);
