// create users schema using mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const currencySchema = new Schema({
 
"Currency Alpha Code": {
  type: String,
  required: true,
},

"Currency Number Code": {
  type: String,
  required: true,
},

"Currency Name": {
  type: String,
  required: true,
},

});

module.exports = mongoose.model('currency', currencySchema);
