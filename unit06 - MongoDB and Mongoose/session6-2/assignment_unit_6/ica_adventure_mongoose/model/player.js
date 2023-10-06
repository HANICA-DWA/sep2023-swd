"use strict";

const mongoose = require("mongoose");

const Location = require("./location");

const name = "Player";
const schema = new mongoose.Schema(
  {
    /* TODO: ASSIGNMENT 6A */
  },
  {
    methods: {
      async getLocationInformation() {
        /* TODO: ASSIGNMENT 6B */
      },

      async goToLocation(name) {
        /* TODO: ASSIGNMENT 6C */
      },
    },
  }
);

const model = mongoose.model(name, schema);

module.exports = model;
