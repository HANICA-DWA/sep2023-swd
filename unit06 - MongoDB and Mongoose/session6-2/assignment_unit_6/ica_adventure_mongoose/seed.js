"use strict";

const mongoose = require("mongoose");
require("./model/location");
require("./model/player");

const Location = mongoose.model("Location");
const Player = mongoose.model("Player");

const $log = console.log;

//
// main program
//
main().catch($log);

async function main() {
  $log("> connecting");
  const db = await mongoose.connect(`mongodb://127.0.0.1:27017/ica-adventure`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  $log("> connected");
  try {
    $log("> seeding");
    await seed();
  } finally {
    await db.disconnect();
    $log("> done");
  }
}

//
// seeding
//
async function seed() {
  await seedLocation();
  await seedPlayer();
}

async function seedLocation() {
  await Location.deleteMany();

  await Location.insertMany([
    {
      _id: "forest",
      description: "a forest",
      exits: ["town"],
    },
    {
      _id: "town",
      description: "a town",
      exits: ["forest", "mountain"],
    },
    {
      _id: "mountain",
      description: "a mountain range",
      exits: ["town"],
    },
  ]);
}

async function seedPlayer() {
  await Player.deleteMany();

  await Player.insertMany([
    {
      _id: "han",
      currentLocation: "forest",
      map: [
        {
          _id: "town",
          description: "a town",
          exits: ["forest", "mountain"],
        },
        {
          _id: "forest",
          description: "a forest",
          exits: ["town"],
        },
      ],
    },
    {
      _id: "femke",
      currentLocation: "town",
      map: [
        {
          _id: "town",
          description: "a town",
          exits: ["forest", "mountain"],
        },
      ],
    },
  ]);
}
