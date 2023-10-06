"use strict";

const mongoose = require("mongoose");

const name = "Location";
const schema = new mongoose.Schema({
  /* TODO: ASSIGNMENT 6A */
});

const model = mongoose.model(name, schema);

module.exports = model;
