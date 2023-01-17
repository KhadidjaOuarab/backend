const AgentModel = require("../Models/Agent.model.js");
const agentController = {};


require("dotenv").config();
const SECRET = process.env.JWT_SECRET;




agentController.getAllAgents = async function (req, res) {
  console.log("GET /getAllUsers");
  let agents;
  try {
    console.log("inside try GET /getAllUsers");
    agents = await AgentModel.find();
    console.log(agents);
    res.send(agents);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = agentController;
