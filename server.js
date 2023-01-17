// create express server
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bp = require("body-parser");
const usersRouter = require("./Routers/User.route");
const admsRouter = require("./Routers/Adm.route");
const citiesRouter = require("./Routers/City.route");
const currenciesRouter = require("./Routers/Currency.route");
const agentsRouter = require("./Routers/Agent.route");

const db = mongoose.connection;

require("dotenv").config();

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("open", () =>
  console.log(`connected to database mongodb  ${process.env.URL}`)
);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.post("/", function (req, res) {
  console.log(req.body);
});
app.get("/", function (req, res) {
  console.log(req.body);
});
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});
app.use("/Users", usersRouter);
app.use("/Adms", admsRouter);
app.use("/Agents", agentsRouter);
app.use("/Cities", citiesRouter);
app.use("/Currencies", currenciesRouter);

app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

// Sequence

