"use strict";

const mongoose = require("mongoose");
const express = require("express");

const actionsRouter = require("./routes/actions");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/", actionsRouter);

const server = app.listen(port, host, async () => {
  console.log("> connecting");
  await mongoose.connect(`mongodb://${host}:27017/ica-adventure`);
  console.log("> connected");

  const { address, port } = server.address();
  console.log(`Game server started on http://${address}:${port}`);
});
