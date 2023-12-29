const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/index.js");

require("dotenv").config();

const cors = require("cors");

const app = express();

const connctionDtring = process.env.mongoDB;

app.use(express.json());
app.use(cors());

mongoose.connect(connctionDtring);

app.use("/", routes);

app.listen(process.env.port, () =>
  console.log("listening on port " + process.env.port)
);
