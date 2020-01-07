const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Manufacturer = new Schema({
  name: {
    type: String,
    required: true
  }
},
{ versionKey: false }
);

module.exports = mongoose.model('Manufacturer', Manufacturer);
