"use strict";

const express = require("express");
const session = require("express-session");
const http = require("http");
const uuid = require("uuid");
const ws = require("ws");

const $log = console.log;

//
// create express, http and websocket servers
//
const app = express();
const httpServer = http.createServer(app);
const wsServer = new ws.Server({ noServer: true });

// we must use the same instance of the session parser
// in both express and the websocket server
const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false,
});

//
// express app
//
app.use(express.static("public")); // serve static files from the 'public' folder
app.use(sessionParser);

app.post("/login", (request, response) => {
  // fake 'log in': generate id and set as `userId` in session
  request.session.userId = uuid.v4();

  $log(`Updating session [user: ${request.session.userId}]`);
  response.send({ result: "OK", message: "Session updated" });
});

app.delete("/logout", (request, response) => {
  $log("Destroying session");
  request.session.destroy(() => {
    response.send({ result: "OK", message: "Session destroyed" });
  });
});

//
// http server
//
httpServer.on("upgrade", (request, socket, head) => {
  $log("Parsing session");

  sessionParser(request, {}, () => {
    $log("Session is parsed");
    if (request.session.userId) {
      $log("Acces is accepted");
      wsServer.handleUpgrade(request, socket, head, (ws) => {
        wsServer.emit("connection", ws, request);
      });
    } else {
      $log("Acces is denied");
      socket.destroy();
      return;
    }
  });
});

//
// websocket server
//
wsServer.on("connection", (ws, request) => {
  ws.on("message", (message) => {
    // use session parameters
    $log(`Received message "${message}" [user: ${request.session.userId}]`);
  });
});

//
// start the server
//
httpServer.listen(3000, () => {
  $log("Listening on http://localhost:3000");
});
