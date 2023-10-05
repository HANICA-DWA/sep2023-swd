"use strict";

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const actionsRouter = require("./routes/actions");

const app = express();
app.use(bodyParser.json());
app.use("/", actionsRouter);

const server = app.listen(3000, () => {
  mongoose.connect(
    `mongodb://127.0.0.1:27017/ica-adventure`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`game server started on port ${server.address().port}`)
  );
});
