'use strict';

const express = require('express');
let app = express();

const map = {
    forest: {
        description: 'a forest',
        items: ['mushroom'],
        exits: ['town']
    },
    town: {
        description: 'a town',
        items: ['coin','sword','axe'],
        exits: ['forest', 'mountain']
    },
    mountain: {
        description: 'a mountain range',
        items: [],
        exits: ['town']
    }
}

app.get('/:location', (req, res) => {
    console.log(req.params.location);
    res.json(map[req.params.location]);
});

app.listen(3000, () => {
    console.log('map server running');
});