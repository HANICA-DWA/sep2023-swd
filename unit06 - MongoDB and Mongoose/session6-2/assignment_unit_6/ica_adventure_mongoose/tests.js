"use strict";

const mongoose = require("mongoose");

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
    $log("> running tests");
    await runTests($log);
  } finally {
    await db.disconnect();
    $log("> done");
  }
}

//
// tests
//
async function runTests($log) {
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
