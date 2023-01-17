// create users schema using mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const admSchema = new Schema({
  admNo: {
    type: String,
    required: true,
    unique: false,
  },
  agentCode: {
    type: String,
    required: true,
  },
  documentNumber: {
    type: String,
    required: true,
  },
  couponNumber: {
    type: String,
    required: false,
  },
  admType: {
    type: String,
    required: true,
  },
  anomaly: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  issueCity: {
    type: String,
    required: false,
  },
  issueDate: {
    type: Date,
    required: false,
  },
  flightNumber: {
    type: String,
    required: false,
  },
  flightDate: {
    type: Date,
    required: false,
  },
  froms: {
    type: String,
    required: false,
  },
  tos: {
    type: String,
    required: false,
  },

  exchangeNumber: {
    type: String,
    required: false,
  },

  exchangedDate: {
    type: Date,
    required: false,
  },
  couponNumberExchange: {
    type: String,
    required: false,
  },

  agentCodeExchange: {
    type: String,
    required: false,
  },

  refundNumber: {
    type: String,
    required: false,
  },

  refundDate: {
    type: Date,
    required: false,
  },
  couponNumberRefund: {
    type: String,
    required: false,
  },

  agentCodeRefund: {
    type: String,
    required: false,
  },
});
/*
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // will encrypt password everytime its saved
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });*/

// Schema are then compiled into models using the mongoose.model() method
// once you have a model you can use it to find, create, update and delete objects
//module.exports = mongoose.model("users", userSchema);

module.exports = mongoose.model.adms || mongoose.model("adms", admSchema);

//The code above is saying: "create a user table or collection if there is no table with that name already".
