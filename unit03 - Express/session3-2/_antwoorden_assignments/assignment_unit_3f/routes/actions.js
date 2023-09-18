const Game = require('../game.js');
const promiseWrappers = require('../promise-wrappers');
const path = require('path');

const express = require('express');

let router = express.Router();

const gameFilesFolderName = 'game_files';

const gameFileReader = async (req, res, next) => {
    try {
        const fileName = path.join(gameFilesFolderName, `${req.params.player}.json`);
        const fileContent = await promiseWrappers.readFileP(fileName);
        req.gameData = {
            fileName,
            fileContent
        }
        next(); 
    } catch (err) {
        const error = new Error(`player '${req.params.player}' does not exist`)
        error.code = 'INVALID_PLAYER';
        next(error);
    }
} 

const gameStateReader = (req, res, next) => {
    try {
        const gameState = JSON.parse(req.gameData.fileContent);
        const game = new Game(gameState);
        req.gameData.game = game;
        next();
    } catch (err) {
        next(err)
    } 
}

router.use('/:player', gameFileReader);

router.get('/:player/where', gameStateReader, async (req, res) => {
    const locationInformation = await req.gameData.game.getLocationInformation();
    res.json(locationInformation);
});

router.post('/:player/goto', gameStateReader, async (req, res) => {
    const newLocation = req.query.location;
    const game = req.gameData.game;
    let locationDescription = await game.goToLocation(newLocation);
    const newFileContent = JSON.stringify(game.state);
    await promiseWrappers.writeFileP(req.gameData.fileName, newFileContent);
    res.json(locationDescription);
});

router.post('/:player/arise', async (req, res) => {
    const {start, inventory} = req.body;
    const game = new Game();
    let locationDescription = await game.startNew(start, inventory);
    const newFileContent = JSON.stringify(game.state);
    await promiseWrappers.writeFileP(req.gameData.fileName, newFileContent);
    res.json(locationDescription);
});


router.use('/:player', (err, req, res, next) => {
    if (err.code === 'INVALID_PLAYER') {
        return res.status(404).json({error: err.message});
    } 
    next(err);
});

module.exports = router;