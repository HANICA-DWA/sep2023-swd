"use strict";

const readline = require("readline");
const game = require("./game");

const rl = readline.createInterface(process.stdin, process.stdout);

const COMMAND_ERROR = Symbol();

rl.setPrompt("action?> ");
rl.prompt();

rl.on("line", (line) => {
  const [command, argument] = line.trim().split(" ");
  try {
    const result = execute(command, argument);
    console.log(result);
  } catch (error) {
    if (error.code && error.code === COMMAND_ERROR) {
      console.log(error.message);
    } else {
      throw error;
    }
  }

  rl.prompt();
}).on("close", function () {
  //DEFAULT ^c
  console.log("Leaving the game");
  process.exit(0);
});

function execute(command, argument) {
  let response;
  switch (command) {
    case "inventory":
    case "i":
      response = "you are carrying";
      const inventory = game.getInventory();
      if (inventory.length === 0) {
        response += " no items at al";
      } else {
        response += " these items:";
        inventory.forEach((item) => {
          response += `\n- ${item}`;
        });
      }
      return response;
    case "take":
    case "t":
      if (argument === null || argument === undefined) {
        let err = new Error(`The input '${command}' needs an argument`);
        err.code = COMMAND_ERROR;
        throw err;
      }

      const obtainedItem = game.takeItem(argument);
      response = `you've taken ${obtainedItem}`;
      return response;
    case "where":
    case "w":
      response = "you are in";
      const locationInformation = game.getLocationInformation();
      response += ` ${locationInformation.description}`;

      response += "\nand you can go to these location(s): ";
      locationInformation.exits.forEach((exit) => {
        response += `\n- ${exit}`;
      });

      return response;
    case "look":
    case "l":
      response = "you've found";
      const items = game.getItems();
      if (items.length === 0) {
        response += " no items at al";
      } else {
        response += " these items:";
        items.forEach((item) => {
          response += `\n- ${item}`;
        });
      }
      return response;
    case "goto":
    case "g":
      if (argument === null || argument === undefined) {
        let err = new Error(`The input '${command}' needs an argument`);
        err.code = COMMAND_ERROR;
        throw err;
      }

      const locationDescription = game.goToLocation(argument);
      response = `you are in ${locationDescription}`;
      return response;
    default:
      let err = new Error(`The input: '${command}' is not defined`);
      err.code = COMMAND_ERROR;
      throw err;
  }
}
