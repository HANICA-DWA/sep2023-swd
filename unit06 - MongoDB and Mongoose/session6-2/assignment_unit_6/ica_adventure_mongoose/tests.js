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
    $log("> running tests");
    await runTests();
  } finally {
    await db.disconnect();
    $log("> done");
  }
}

//
// tests
//
async function runTests() {
  const $test = (a, b, m) => $log(`[test] ${["❌", "✅"][+(a === b)]} (${m})`);

  $test(
    JSON.stringify(await testGetLocationInformation("han")),
    JSON.stringify({ description: "a forest", exits: ["town"] }),
    "testGetLocationInformation"
  );

  $test(
    await testGoToLocation("femke", "forest"),
    "a forest",
    "testGoToLocation"
  );
}

const testGetLocationInformation = async (_id) =>
  (await Player.findOne({ _id })).getLocationInformation();

const testGoToLocation = async (_id, location) =>
  (await Player.findOne({ _id })).goToLocation(location);
