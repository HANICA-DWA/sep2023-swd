"use strict";

const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  /* TODO: ASSIGNMENT 6A */
});

playerSchema.methods.getLocationInformation = async function () {
  /* TODO: ASSIGNMENT 6B */
};

playerSchema.methods.goToLocation = async function (newLocationName) {
  /* TODO: ASSIGNMENT 6C */
};
