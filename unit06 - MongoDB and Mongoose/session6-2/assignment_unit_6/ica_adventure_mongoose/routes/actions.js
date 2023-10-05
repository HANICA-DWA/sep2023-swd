"use strict";

const mongoose = require("mongoose");
require("../model/player.js");

const express = require("express");
const router = express.Router();

const Player = mongoose.model("Player");
// don't forget to use the Location model if you need it

router.get("/:player/where", (req, res) => {
  /* TODO: ASSIGNMENT 6A */
  /* TODO: ASSIGNMENT 6B */
  res.json("todo: replace me");
});

router.put("/:player/goto", (req, res) => {
  /* TODO: ASSIGNMENT 6C */
  res.json("todo: replace me");
});

module.exports = router;
