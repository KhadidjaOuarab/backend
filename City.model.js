// create users schema using mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const citySchema = new Schema({
  "City Code Alpha": {
    type: String,
    required: true,
  },

  "City Code Alpha": {
    type: String,
    required: true,
  },
  "City Name": {
    type: String,
    required: true,
  },
  "Country Alpha Code": {
    type: String,
    required: true,
  },
  "Country Name": {
    type: String,
    required: true,
  },
  "Main City": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('city', citySchema);
