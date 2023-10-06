"use strict";

const express = require("express");

const Player = require("../model/player.js");

const router = express.Router();

router.get("/:player/where", (req, res, next) => {
  /* TODO: ASSIGNMENT 6A */
  /* TODO: ASSIGNMENT 6B */
});

router.put("/:player/goto", (req, res, next) => {
  /* TODO: ASSIGNMENT 6C */
});

module.exports = router;
