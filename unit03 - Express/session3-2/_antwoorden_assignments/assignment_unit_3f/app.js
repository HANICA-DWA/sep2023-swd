'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const actionsRouter = require('./routes/actions');
const adminRouter = require('./routes/games');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method}, ${req.path}`);
    next();
});

//********************* Load the Game Play Routes ***************************/
app.use('/action', actionsRouter);


/********************  Load the Games Admin Routes ****************************/
app.use('/games', adminRouter);



/********************  Server configuration  ****************************/

const server = app.listen(3000, () => {
    console.log(`game server started on port ${server.address().port}`);
});