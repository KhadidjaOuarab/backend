// create users schema using mongoose
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const agentsSchema = new Schema({
   
    "Agency Code": {
        type: String,
        required: true
    },
    agentType: {
        type: String,
        required: true
    },
    areaOfOperation: {
        type: String,
        required: true
    },
    agencyName: {
        type: String,
        required: true
    },
    reportingAgency: {
        type: String,
        required: true
    },
    effectiveFromDate: {
        type: Number,
        required: true
    },
    effectiveToDate: {
        type: String,
        required: true
    }


});

// Schema are then compiled into models using the mongoose.model() method
// once you have a model you can use it to find, create, update and delete objects
//module.exports = mongoose.model("users", userSchema);

module.exports = mongoose.model.agents || mongoose.model("agents", agentsSchema);

//The code above is saying: "create a user table or collection if there is no table with that name already".