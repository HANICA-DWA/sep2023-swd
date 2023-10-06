"use strict";

const mongoose = require("mongoose");

const Location = require("./model/location");
const Player = require("./model/player");

//
// main program
//
main(console.log).catch(console.log);

async function main($log) {
  $log("> connecting");
  const db = await mongoose.connect(`mongodb://127.0.0.1:27017/ica-adventure`);
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
